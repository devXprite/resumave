'use client';

import Resume from '.';
import { useSelector } from 'react-redux';
import { PDFViewer } from '@react-pdf/renderer';
import { useEffect, useState } from 'react';

const Preview = () => {
    const resumeData = useSelector(state => state.resume);
    const [data, setData] = useState(resumeData);

    useEffect(() => {
        if (resumeData.saved) setData(resumeData);
    }, [resumeData.saved]);

    return (
        <div className="hidden md:block w-[28rem] h-[40rem]">
            <PDFViewer className="h-full w-full" showToolbar={true}>
                <Resume data={data} />
            </PDFViewer>
        </div>
    );
};

export default Preview;
