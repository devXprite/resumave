'use client';

import InputBox from '@/components/UI/InputBox';
import ResumeFields from '@/config/ResumeFields';
import { useRouter } from 'next/navigation';
import { FaArrowRight } from 'react-icons/fa6';
import { LuPlus } from "react-icons/lu";


const Editor = ({ tab }) => {
    const router = useRouter();
    const { fields, multiple } = ResumeFields[tab];

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
            <form
                action=""
                onSubmit={saveAndNext}
                className="mt-8 rounded-md border border-gray-600 bg-gray-700/25 p-6 shadow-xl"
            >
                {multiple && (
                    <button className="btn bg-gray-600/75 ml-auto mb-6 text-sm">
                        <LuPlus />
                        <span>Add More</span>
                    </button>
                )}

                <div className=" grid grid-cols-2 gap-x-8 gap-y-5">
                    {fields.map(field => (
                        <InputBox key={field.name} {...field} />
                    ))}
                </div>

                <button type="submit" className="btn-filled ml-auto mt-6 gap-2 px-6 text-center">
                    {currentTabIndex < allTabs.length - 1 ? 'Save & Next' : 'Preview'}
                    <FaArrowRight />
                </button>
            </form>
        </>
    );
};

export default Editor;
