'use client';

import Tilt from 'react-parallax-tilt';

const page = () => {
    return (
        <div className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-screen-xl items-center justify-between gap-8 overflow-hidden px-3">
            <div>
                <h4 className="text-lg">
                    <span className="text-gradient">A Free and Open Source Resume Builder</span>
                </h4>
                <h1 className="text-4xl  ">
                    <span className="text-gradient">Build a professional resume for free</span>
                </h1>

                <p className="mt-6 max-w-screen-sm text-gray-300">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, inventore! In beatae harum
                    repudiandae enim dolore nulla repellendus soluta debitis vel numquam. Voluptatem deserunt mollitia,
                    eveniet iste necessitatibus pariatur molestias?
                </p>

                <div className="mt-16 flex items-center justify-start gap-8">
                    <button className="btn-filled">Create My Resume</button>

                    <button className="btn">View Source</button>
                </div>
            </div>
            <div className="">
                <Tilt trackOnWindow={true} tiltReverse={true} glareEnable={true} className="shadow-2xl shadow-gray-900">
                    <img
                        src="https://d.novoresume.com/images/doc/preview/creative-resume-template.png"
                        className="md:w-[22rem]"
                    />
                </Tilt>
            </div>
        </div>
    );
};

export default page;
