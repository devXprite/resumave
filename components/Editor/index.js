'use client';

import ResumeFields from '@/config/ResumeFields';
import { useRouter } from 'next/navigation';
import { FaArrowRight } from 'react-icons/fa6';
import SingleEditor from './SingleEditor';
import MultiEditor from './MultiEditor';

const Editor = ({ tab }) => {
    const router = useRouter();
    const { multiple } = ResumeFields[tab];

    const allTabs = Object.keys(ResumeFields);
    const currentTabIndex = allTabs.findIndex(t => t === tab);

    const saveAndNext = e => {
        e.preventDefault();
        console.log('Save and Next');

        if (currentTabIndex < allTabs.length - 1) {
            const nextTab = allTabs[currentTabIndex + 1];
            router.push(`/editor/?tab=${nextTab}`);
        } else {
            router.push(`/preview`);
        }
    };

    return (
        <>
            <form action="" onSubmit={saveAndNext} className="card mt-8">
                

                {multiple && (
                    <div>
                        <MultiEditor tab={tab} />
                    </div>
                )}

                {!multiple && <SingleEditor tab={tab} />}

                <button type="submit" className="btn-filled ml-auto mt-6 gap-2 px-6 text-center">
                    {currentTabIndex < allTabs.length - 1 ? 'Save & Next' : 'Preview'}
                    <FaArrowRight />
                </button>
            </form>
        </>
    );
};

export default Editor;
