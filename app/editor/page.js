
import Editor from '@/components/Editor';
import Tabs from '@/components/Tabs';

const page = ({ searchParams: { tab = 'basic' } }) => {
    return (
        <div className="mt-8 xl:mt-16 flex gap-10">
            <div className="aspect-[210/297] w-[28rem] border-gray-500 bg-white/20"></div>
            <div className="flex-grow ">
                <Tabs activeTab={tab} />
                <Editor tab={tab} />
            </div>
        </div>
    );
};

export default page;
