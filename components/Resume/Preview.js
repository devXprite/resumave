'use client';

import { useEffect, useRef, useState } from 'react';
import Resume from './pdf';
import { useSelector } from 'react-redux';
import { CgSpinner } from 'react-icons/cg';

// import 'react-pdf/dist/Page/AnnotationLayer.css';
// import 'react-pdf/dist/Page/TextLayer.css';

import { usePDF } from '@react-pdf/renderer';
import { Document, Page, pdfjs } from 'react-pdf';
import { FaDownload, FaEye } from 'react-icons/fa6';

pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.js', import.meta.url).toString();

const Loader = () => (
    <div className="flex min-h-96 w-full items-center justify-center">
        <CgSpinner className="mx-auto mt-16 animate-spin text-center text-4xl text-primary-400 md:text-5xl" />
    </div>
);

const preview = url => {
    window.open(
        url,
        'Resume Preview',
        `toolbar=no, location=no, menubar=no, scrollbars=no, status=no, titlebar=no, resizable=no, width=600, height=800, left=${window.innerWidth / 2 - 300}, top=100`,
    );
};

const Preview = () => {
    const parentRef = useRef(null);
    const resumeData = useSelector(state => state.resume);
    const document = <Resume data={resumeData} />;
    const [instance, updateInstance] = usePDF({ document });
    const [isEmpty, setIsEmpty] = useState(false);

    useEffect(() => {
        if (resumeData.saved) {
            updateInstance(document);
            // Check if the resumeData has required fields filled
            if (!resumeData.contact || !resumeData.contact.name || !resumeData.experience || resumeData.experience.length === 0) {
                setIsEmpty(true);
            } else {
                setIsEmpty(false);
            }
        }
    }, [resumeData.saved, document, updateInstance]);

    const handlePreview = () => {
        if (isEmpty) {
            alert('Please fill in the required fields before previewing.');
        } else {
            preview(instance.url);
        }
    };

    return (
        <div ref={parentRef} className="relative w-full md:max-w-[24rem] 2xl:max-w-[28rem]">
            {instance.loading ?
                <Loader />
            :   <Document loading={<Loader />} file={instance.url}>
                    <Page
                        pageNumber={1}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                        loading={<Loader />}
                        width={parentRef.current?.clientWidth}
                    />
                </Document>
            }

            {!instance.loading && (
                <div className="mt-4 flex justify-around">
                    <button onClick={handlePreview} className="btn text-sm" disabled={isEmpty}>
                        <span>Preview</span>
                        <FaEye />
                    </button>
                    <a
                        href={instance.url}
                        download={`${resumeData.contact?.name || 'resume'}.pdf`}
                        className={`btn text-sm ${isEmpty ? 'opacity-50 cursor-not-allowed' : ''}`}
                        onClick={(e) => isEmpty && e.preventDefault()}
                    >
                        <span>Download</span>
                        <FaDownload />
                    </a>
                </div>
            )}
            {isEmpty && (
                <div className="mt-2 text-red-500 text-center">Generated resume is empty. Please fill in the required fields and generate the resume.</div>
            )}
        </div>
    );
};

export default Preview;
