import Tabs from '@/components/Tabs';

const page = ({ searchParams: { tab } }) => {
    return (
        <div className="mt-8 flex gap-10">
            <div className="w-[28rem] bg-white border-gray-500 aspect-[210/297]">
                
            </div>
            <div className='bg-red-100/0 flex-grow'>
                <Tabs activeTab={tab} />
            </div>
        </div>
    );
};

export default page;
