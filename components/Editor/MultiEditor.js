'use client';

import { useDispatch } from 'react-redux';
import Input from '../UI/Input';
import { useSelector } from 'react-redux';
import { addNewIndex, deleteIndex, moveIndex, updateResumeValue } from '@/store/slices/resumeSlice';
import ResumeFields from '@/config/ResumeFields';
import { LuPlus } from 'react-icons/lu';
import { useState } from 'react';
import { FaArrowUp, FaCrop, FaMinimize, FaPencil, FaTrash } from 'react-icons/fa6';
import { FaArrowDown } from 'react-icons/fa';
import { TbArrowsMinimize } from "react-icons/tb";

const MultiEditor = ({ tab }) => {
    const { fields } = ResumeFields[tab];
    const [selectedCard, setSelectedCard] = useState(null);

    const dispatch = useDispatch();
    const resumeData = useSelector(state => state.resume[tab]);

    const handleChange = (e, i) => {
        const { name, value } = e.target;

        dispatch(
            updateResumeValue({
                tab,
                name,
                value,
                index: i,
            }),
        );
    };

    const addNew = () => {
        dispatch(
            addNewIndex({
                tab,
                name: 'degree',
                value: 'new',
            }),
        );

        setSelectedCard(resumeData.length);
    };

    const deleteCard = index => {
        dispatch(deleteIndex({ tab, index }));
        setSelectedCard(null);
    };

    return (
        <div>
            <button type="button" className="btn mb-6 ml-auto bg-gray-600/75 text-sm 2xl:text-base" onClick={addNew}>
                <LuPlus />
                <span>Add New</span>
            </button>

            {resumeData?.length == 0 && (
                <div className="my-16">
                    <p className="text-center text-gray-500">Please Add a New {tab}</p>
                </div>
            )}

            <div className="space-y-5">
                {resumeData.map((e, i) => (
                    <div
                        key={i}
                        className="card h-full py-3 transition-all duration-1000"
                        onClick={_ => setSelectedCard(i)}
                    >
                        <h3 className="flex items-center justify-between gap-5">
                            <span className="mr-auto text-sm md:text-base truncate ">{Object.values(e)[0] || 'Untitled'}</span>

                            <button
                                disabled={i == 0}
                                className="hover:text-primary-400 disabled:cursor-not-allowed disabled:opacity-50"
                                onClick={_ => {
                                    _.stopPropagation();
                                    dispatch(moveIndex({ tab, index: i, dir: 'up' }));
                                }}
                            >
                                <FaArrowUp />
                            </button>

                            <button
                                disabled={i == resumeData.length - 1}
                                className="hover:text-primary-400 disabled:cursor-not-allowed disabled:opacity-50"
                                onClick={_ => {
                                    _.stopPropagation();
                                    dispatch(moveIndex({ tab, index: i }));
                                }}
                            >
                                <FaArrowDown />
                            </button>

                            {selectedCard == i ?
                                <button
                                    type="button"
                                    onClick={_ => {
                                        _.stopPropagation();
                                        setSelectedCard(null);
                                    }}
                                >
                                    <TbArrowsMinimize />
                                </button>
                            :   <button type="button" className="text-primary-400">
                                    <FaPencil />
                                </button>
                            }

                            <button
                                type="button"
                                className="text-red-400"
                                onClick={_ => {
                                    _.stopPropagation();
                                    deleteCard(i);
                                }}
                            >
                                <FaTrash />
                            </button>
                        </h3>

                        {selectedCard == i && (
                            <div className="mt-6 grid gap-4 md:grid-cols-2 md:gap-6">
                                {fields.map(field => (
                                    <Input
                                        key={field.name}
                                        {...field}
                                        onChange={e => handleChange(e, i)}
                                        value={resumeData[i][field.name]}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MultiEditor;
