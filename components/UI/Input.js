'use client';

import { twMerge } from 'tailwind-merge';
import { sentenceCase } from 'change-case';
import ContentEditable from 'react-contenteditable';
import { useRef } from 'react';

const Input = ({ label, name, type, placeholder, options, span, value, ...props }) => {
    const inputClassName = `block w-full rounded-md border border-gray-600 bg-gray-700/75 p-2 text-sm text-gray-100 shadow-md shadow-gray-800 outline-none focus:border-2 focus:border-primary-500 focus:bg-gray-700 md:text-base 2xl:p-2.5`;

    const inputRef = useRef(null);

    const InputEl = () => {
        // if (type === 'textarea' && props.multipoints) {
        //     return (
        //         <div
        //             contentEditable={true}
        //             role="textbox"
        //             className={twMerge(inputClassName, 'min-h-56 whitespace-pre-wrap text-sm md:min-h-40 md:text-sm')}
        //             {...props}
        //             // onInput={e => {
        //             //     const text = e.target.innerText;
        //             //     console.log(text);
        //             //     props.onChange({ target: { name, value: text } });

        //             // }}

        //             // onKeyDown={e => {console.log('key down')}}
        //         >
        //             <ul className="space-y-2 list-disc">
        //                 {value?.split('\n')?.map((line, index) => (
        //                     <li
        //                         key={index}
        //                         className={
        //                             "relative ml-[10px] leading-[1.35em] before:absolute before:left-[-10px] before:content-['•']"
        //                         }
        //                     >
        //                         {line}
        //                     </li>
        //                 ))}
        //             </ul>
        //         </div>
        //     );
        // }

        if (type === 'textarea' && props.multipoints) {
            // <ul className='space-y-1.5 list-disc pl-5'></ul>
            // <li className="relative ml-[10px] leading-[1.35em] before:absolute before:left-[-10px] before:content-['•']"></li>;

            const html = `
                <ul class="space-y-1.5 list-disc pl-4 md:pl-5">
                    ${value
                        ?.split('\n')
                        ?.filter(line => line.trim())
                        ?.map(
                            line => `
                            <li>
                                ${line || ''}${' '}
                            </li>
                            `,
                        )
                        .join('')}
                </ul>
            `;

            return (
                <ContentEditable
                    role="textbox"
                    html={value && html}
                    innerRef={inputRef}
                    className={twMerge(inputClassName, 'min-h-56  text-sm md:min-h-40 md:text-sm ')}
                    onChange={e => {
                        const text = inputRef.current.innerText;
                        props.onChange({ target: { name, value: text } });
                    }}
                />
            );
        }

        if (type === 'textarea') {
            return (
                <textarea
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    className={twMerge(inputClassName, 'min-h-56 text-sm md:min-h-40')}
                    {...props}
                >
                    {value}
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
                    defaultValue={value}
                    {...props}
                >
                    {options?.map(option => (
                        <option key={option.value} value={option.value}>
                            {option?.name || option?.value}
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
                className={inputClassName}
                placeholder={placeholder || `Enter ${label}`}
                defaultValue={type === 'file' ? undefined : props.defaultValue}
                value={value}
                {...props}
            />
        );
    };

    return (
        <div className={`${span ? 'md:col-span-2' : ''}`}>
            {label && (
                <label htmlFor={name} className="mb-0.5 block text-xs text-gray-300 md:text-sm 2xl:text-base">
                    {label ?? sentenceCase(name)} {props.required && '*'}
                </label>
            )}

            {InputEl()}
        </div>
    );
};

export default Input;
