'use client';

import { useEffect, useRef, useState } from 'react';
import Resume from './pdf';
import { useSelector } from 'react-redux';
import { CgSpinner } from 'react-icons/cg';

// import 'react-pdf/dist/Page/AnnotationLayer.css';
// import 'react-pdf/dist/Page/TextLayer.css';

import { usePDF } from '@react-pdf/renderer';
import { Document, Page, pdfjs } from 'react-pdf';
import { FaDownload, FaEye, FaFileWord } from 'react-icons/fa6';
import { Document as DocxDocument, Packer, Paragraph, TextRun, BorderStyle, WidthType, convertInchesToTwip } from 'docx';

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

const convertToWord = async (data) => {
    // تنسيقات مشتركة
    const sectionSpacing = {
        spacing: { before: 400, after: 400 },
    };

    const headerStyle = {
        spacing: { before: 400, after: 200 },
        border: {
            bottom: {
                color: '#888888',
                size: 1,
                style: BorderStyle.SINGLE,
            },
        },
    };

    const dividerParagraph = new Paragraph({
        children: [new TextRun({ text: '' })],
        border: {
            bottom: {
                color: '#eeeeee',
                size: 2,
                style: BorderStyle.SINGLE,
            },
        },
        spacing: { before: 200, after: 200 },
    });

    const doc = new DocxDocument({
        sections: [{
            properties: {
                page: {
                    margin: {
                        top: convertInchesToTwip(0.8),
                        right: convertInchesToTwip(0.8),
                        bottom: convertInchesToTwip(0.8),
                        left: convertInchesToTwip(0.8),
                    },
                },
            },
            children: [
                // Header
                new Paragraph({
                    children: [
                        new TextRun({
                            text: data.contact?.name || 'Resume',
                            bold: true,
                            size: 32,
                            color: '#111111',
                        }),
                    ],
                    alignment: 'center',
                    spacing: { after: 200 },
                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: [
                                data.contact?.email,
                                data.contact?.phone,
                                data.contact?.linkedin,
                                data.contact?.github,
                                data.contact?.portfolio,
                            ].filter(Boolean).join(' | '),
                            size: 22,
                            color: '#555555',
                        }),
                    ],
                    alignment: 'center',
                    spacing: { after: 400 },
                }),
                
                // Summary
                ...(data.summary?.summary ? [
                    new Paragraph({
                        ...headerStyle,
                        children: [
                            new TextRun({
                                text: 'SUMMARY',
                                bold: true,
                                size: 26,
                                color: '#333333',
                            }),
                        ],
                    }),
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: data.summary.summary,
                                size: 22,
                                color: '#555555',
                            }),
                        ],
                        spacing: { before: 200 },
                    }),
                    dividerParagraph,
                ] : []),

                // Education
                ...(data.education?.length ? [
                    new Paragraph({
                        ...headerStyle,
                        children: [
                            new TextRun({
                                text: 'EDUCATION',
                                bold: true,
                                size: 26,
                                color: '#333333',
                            }),
                        ],
                    }),
                    ...data.education.flatMap((edu, index) => [
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: `${edu.degree} - ${edu.institution}`,
                                    bold: true,
                                    size: 22,
                                    color: '#555555',
                                }),
                            ],
                            spacing: { before: 200 },
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: `${edu.start} - ${edu.end} | ${edu.location}${edu.gpa ? ` | GPA: ${edu.gpa}` : ''}`,
                                    size: 22,
                                    color: '#555555',
                                }),
                            ],
                            spacing: { before: 100 },
                        }),
                        ...(index < data.education.length - 1 ? [
                            new Paragraph({
                                children: [new TextRun({ text: '' })],
                                border: {
                                    bottom: {
                                        color: '#eeeeee',
                                        size: 1,
                                        style: BorderStyle.SINGLE,
                                    },
                                },
                                spacing: { before: 100, after: 100 },
                            }),
                        ] : []),
                    ]),
                    dividerParagraph,
                ] : []),

                // Experience
                ...(data.experience?.length ? [
                    new Paragraph({
                        ...headerStyle,
                        children: [
                            new TextRun({
                                text: 'EXPERIENCE',
                                bold: true,
                                size: 26,
                                color: '#333333',
                            }),
                        ],
                    }),
                    ...data.experience.flatMap((exp, index) => [
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: `${exp.role} - ${exp.company}`,
                                    bold: true,
                                    size: 22,
                                    color: '#555555',
                                }),
                            ],
                            spacing: { before: 200 },
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: `${exp.start} - ${exp.end} | ${exp.location}`,
                                    size: 22,
                                    color: '#555555',
                                }),
                            ],
                            spacing: { before: 100 },
                        }),
                        ...(exp.description ? exp.description.split('\n').map(line => 
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: '• ' + line,
                                        size: 22,
                                        color: '#555555',
                                    }),
                                ],
                                spacing: { before: 100 },
                            })
                        ) : []),
                        ...(index < data.experience.length - 1 ? [
                            new Paragraph({
                                children: [new TextRun({ text: '' })],
                                border: {
                                    bottom: {
                                        color: '#eeeeee',
                                        size: 1,
                                        style: BorderStyle.SINGLE,
                                    },
                                },
                                spacing: { before: 100, after: 100 },
                            }),
                        ] : []),
                    ]),
                    dividerParagraph,
                ] : []),

                // Projects
                ...(data.projects?.length ? [
                    new Paragraph({
                        ...headerStyle,
                        children: [
                            new TextRun({
                                text: 'PROJECTS',
                                bold: true,
                                size: 26,
                                color: '#333333',
                            }),
                        ],
                    }),
                    ...data.projects.flatMap((project, index) => [
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: project.title,
                                    bold: true,
                                    size: 22,
                                    color: '#555555',
                                }),
                            ],
                            spacing: { before: 200 },
                        }),
                        ...(project.url ? [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: project.url,
                                        size: 22,
                                        color: '#666666',
                                    }),
                                ],
                                spacing: { before: 100 },
                            }),
                        ] : []),
                        ...(project.description ? project.description.split('\n').map(line => 
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: '• ' + line,
                                        size: 22,
                                        color: '#555555',
                                    }),
                                ],
                                spacing: { before: 100 },
                            })
                        ) : []),
                        ...(index < data.projects.length - 1 ? [
                            new Paragraph({
                                children: [new TextRun({ text: '' })],
                                border: {
                                    bottom: {
                                        color: '#eeeeee',
                                        size: 1,
                                        style: BorderStyle.SINGLE,
                                    },
                                },
                                spacing: { before: 100, after: 100 },
                            }),
                        ] : []),
                    ]),
                    dividerParagraph,
                ] : []),

                // Skills
                ...(data.skills?.skills ? [
                    new Paragraph({
                        ...headerStyle,
                        children: [
                            new TextRun({
                                text: 'SKILLS',
                                bold: true,
                                size: 26,
                                color: '#333333',
                            }),
                        ],
                    }),
                    ...data.skills.skills.split('\n').map(line => 
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: line,
                                    size: 22,
                                    color: '#555555',
                                }),
                            ],
                            spacing: { before: 100 },
                        })
                    ),
                    dividerParagraph,
                ] : []),

                // Certificates
                ...(data.certificates?.length ? [
                    new Paragraph({
                        ...headerStyle,
                        children: [
                            new TextRun({
                                text: 'CERTIFICATIONS',
                                bold: true,
                                size: 26,
                                color: '#333333',
                            }),
                        ],
                    }),
                    ...data.certificates.flatMap((cert, index) => [
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: `${cert.title} - ${cert.issuer}`,
                                    bold: true,
                                    size: 22,
                                    color: '#555555',
                                }),
                            ],
                            spacing: { before: 200 },
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: cert.date || '',
                                    size: 22,
                                    color: '#555555',
                                }),
                            ],
                            spacing: { before: 100 },
                        }),
                        ...(index < data.certificates.length - 1 ? [
                            new Paragraph({
                                children: [new TextRun({ text: '' })],
                                border: {
                                    bottom: {
                                        color: '#eeeeee',
                                        size: 1,
                                        style: BorderStyle.SINGLE,
                                    },
                                },
                                spacing: { before: 100, after: 100 },
                            }),
                        ] : []),
                    ]),
                    dividerParagraph,
                ] : []),

                // Languages
                ...(data.languages?.length ? [
                    new Paragraph({
                        ...headerStyle,
                        children: [
                            new TextRun({
                                text: 'LANGUAGES',
                                bold: true,
                                size: 26,
                                color: '#333333',
                            }),
                        ],
                    }),
                    new Paragraph({
                        children: [
                            new TextRun({
                                text: data.languages.map(lang => 
                                    `${lang.language} (${lang.proficiency})`
                                ).join(' | '),
                                size: 22,
                                color: '#555555',
                            }),
                        ],
                        spacing: { before: 200 },
                    }),
                    dividerParagraph,
                ] : []),
            ],
        }],
    });

    const blob = await Packer.toBlob(doc);
    return URL.createObjectURL(blob);
};

const Preview = () => {
    const parentRef = useRef(null);
    const resumeData = useSelector(state => state.resume);
    const document = <Resume data={resumeData} />;
    const [instance, updateInstance] = usePDF({ document });
    const [wordUrl, setWordUrl] = useState(null);

    useEffect(() => {
        const generateWordDoc = async () => {
            try {
                const url = await convertToWord(resumeData);
                setWordUrl(url);
            } catch (error) {
                console.error('Error generating Word document:', error);
            }
        };

        if (resumeData.saved) {
            updateInstance(document);
            generateWordDoc();
        }
    }, [resumeData.saved, resumeData]);

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
                <div className="mt-4 flex justify-around gap-2">
                    <button onClick={() => preview(instance.url)} className="btn text-sm">
                        <span>Preview</span>
                        <FaEye />
                    </button>
                    <a
                        href={instance.url}
                        download={`${resumeData.contact?.name || 'resume'}.pdf`}
                        className="btn text-sm"
                    >
                        <span>Download PDF</span>
                        <FaDownload />
                    </a>
                    <a
                        href={wordUrl}
                        download={`${resumeData.contact?.name || 'resume'}.docx`}
                        className="btn text-sm"
                        onClick={(e) => {
                            if (!wordUrl) {
                                e.preventDefault();
                                alert('Please wait while the Word document is being generated...');
                            }
                        }}
                    >
                        <span>Download Word</span>
                        <FaFileWord />
                    </a>
                </div>
            )}
        </div>
    );
};

// const Preview = () => {
//     const resumeData = useSelector(state => state.resume);
//     const [data, setData] = useState(resumeData);

//     useEffect(() => {
//         if (resumeData.saved) setData(resumeData);
//     }, [resumeData.saved]);

//     return (
//         <div className="hidden h-[40rem] w-[28rem] md:block">
//             <PDFViewer className="h-full w-full" showToolbar={true}>
//                 <Resume data={data} />
//             </PDFViewer>
//         </div>
//     );
// };

export default Preview;
