import Editor from '@/components/Editor';
import Preview from '@/components/Resume/Preview';
import Tabs from '@/components/Tabs';

const page = ({ searchParams: { tab = 'contact' } }) => {
    return (
        <div className="mt-8 flex flex-col md:flex-row gap-10 xl:mt-16 px-2">
            <Preview />
            <div className="flex-grow ">
                <Tabs activeTab={tab} />
                <Editor tab={tab} />
            </div>
        </div>
    );
};

export default page;
