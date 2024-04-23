'use client';

import { useEffect, useState } from 'react';
import Resume from './pdf';
import { useSelector } from 'react-redux';
import { BlobProvider, PDFViewer } from '@react-pdf/renderer';

// import "react-pdf/dist/Page/AnnotationLayer.css";
// import "react-pdf/dist/Page/TextLayer.css";

const Preview = () => {
    const resumeData = useSelector(state => state.resume);
    const [data, setData] = useState(resumeData);

    useEffect(() => {
        if (resumeData.saved) setData(resumeData);
    }, [resumeData.saved]);

    return (
        <div className="hidden h-[40rem] w-[28rem] md:block">
            <PDFViewer className="h-full w-full" showToolbar={true}>
                <Resume data={data} />
            </PDFViewer>
        </div>
    );
};

export default Preview;
