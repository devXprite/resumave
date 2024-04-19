import ResumeFields from '@/config/ResumeFields';
import Link from 'next/link';

const Tabs = ({ activeTab }) => {
    const tabs = Object.keys(ResumeFields);

    return (
        <div className="flex gap-2">
            {tabs.map(tab => (
                <Link
                    key={tab}
                    className={`tabs relative cursor-pointer rounded-md px-4 py-1.5 text-sm capitalize ${activeTab === tab ? 'bg-primary-500 text-black' : 'bg-gray-700/50 hover:bg-gray-700'}`}
                    href={`/editor/?tab=${tab}`}
                >
                    {tab}
                </Link>
            ))}
        </div>
    );
};

export default Tabs;
