import Editor from '@/components/Editor';
import Preview from '@/components/Resume/Preview';
// import Preview from '@/components/Resume/html';
import Tabs from '@/components/Tabs';

const page = ({ searchParams: { tab = 'contact' } }) => {
    return (
        <div className="mx-auto mt-8 flex container flex-col-reverse gap-10 px-2 pb-8 md:flex-row md:mt-8 2xl:mt-14 2xl:gap-16">
            <Preview />
            <div className="flex-grow ">
                <Tabs activeTab={tab} />
                <Editor tab={tab} />
            </div>
        </div>
    );
};

export default page;
