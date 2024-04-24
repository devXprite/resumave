import { CgSpinner } from 'react-icons/cg';

const Loader = () => {
    return (
        <div className="flex min-h-[calc(100vh-6rem)] items-center justify-center">
            <CgSpinner className="text-5xl animate-spin text-primary-400 md:text-6xl" />
        </div>
    );
};

export default Loader;
