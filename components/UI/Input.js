'use client';

import { twMerge } from 'tailwind-merge';
import { sentenceCase } from 'change-case';

const Input = ({ label, name, type, placeholder, options, span, ...props }) => {
    const inputClassName = `block w-full rounded-md border border-gray-600 bg-gray-700/50 p-2 text-sm text-gray-100 outline-none focus:border-2 focus:border-primary-500 md:text-base`;

    const InputEl = () => {
        if (type === 'textarea') {
            return (
                <textarea
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    className={twMerge(inputClassName, 'text-sm min-h-56 md:min-h-40')}
                    {...props}
                >
                    {props.value}
                </textarea>
            );
        }

        if (type == 'select') {
            return (
                <select
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    className={inputClassName}
                    defaultValue={''}
                    {...props}
                >
                    {options?.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.name}
                        </option>
                    ))}
                </select>
            );
        }

        if (type == 'color') {
            return (
                <input
                    type={'color'}
                    name={name}
                    id={name}
                    className={twMerge(inputClassName, 'py-1')}
                    placeholder={placeholder || `Enter ${label}`}
                    {...props}
                />
            );
        }

        return (
            <input
                type={type ?? 'text'}
                name={name}
                id={name}
                // className={inputClassName}

                className={
                    'block w-full rounded-md border border-gray-600 bg-gray-700/75 p-2 text-sm text-gray-100 shadow-md shadow-gray-800 outline-none focus:border-2 focus:border-primary-500 focus:bg-gray-700 md:text-base'
                }
                placeholder={placeholder || `Enter ${label}`}
                {...props}
                defaultValue={type === 'file' ? undefined : props.defaultValue}
            />
        );
    };

    return (
        <div className={`${span ? 'md:col-span-2' : ''}`}>
            {label && (
                <label htmlFor={name} className="mb-0.5 block text-xs text-gray-300 md:text-sm">
                    {label ?? sentenceCase(name)} {props.required && '*'}
                </label>
            )}

            {InputEl()}
        </div>
    );
};

export default Input;
