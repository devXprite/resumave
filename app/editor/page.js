import Editor from '@/components/Editor';
import Preview from '@/components/Resume/Preview';
// import Preview from '@/components/Resume/html';
import Tabs from '@/components/Tabs';

const page = ({ searchParams: { tab = 'contact' } }) => {
    return (
        <div className="mt-8 flex flex-col-reverse pb-8 md:flex-row gap-10 xl:mt-8 px-2">
            <Preview />
            <div className="flex-grow ">
                <Tabs activeTab={tab} />
                <Editor tab={tab} />
            </div>
        </div>
    );
};

export default page;
