'use client';

import { useRouter } from 'next/navigation';

const tabs = ['basic', 'education', 'experience', 'projects', 'skills', 'contact', 'certifications', 'settings'];

const Tabs = ({ activeTab }) => {
    const router = useRouter();

    return (
        <div className="flex gap-2">
            {tabs.map(tab => (
                <div
                    key={tab}
                    className={`cursor-pointer tabs rounded-md relative px-4 py-1.5 text-sm capitalize ${activeTab === tab ? 'bg-primary-500 text-black' : 'bg-gray-800 hover:bg-gray-700'}`}
                    onClick={() => router.push(`/editor/?tab=${tab}`)}
                >
                    {tab}
                </div>
            ))}
        </div>
    );
};

export default Tabs;
