'use client';

import ReactTilt from 'react-parallax-tilt';

const Tilt = ({ props, children }) => {
    return (
        <ReactTilt
            trackOnWindow={true}
            tiltReverse={true}
            glareEnable={true}
            className="shadow-2xl shadow-gray-900"
            {...props}
        >
            {children}
        </ReactTilt>
    );
};

export default Tilt;
