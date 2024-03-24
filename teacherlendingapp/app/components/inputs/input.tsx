'use client';

import {
    FieldErrors,
    FieldValues,
    UseFormRegister
} from "React-hook-form";
import { BiDollar } from 'react-icons/bi';

interface InputProps {
    id: string;
    label: string;
    disabled?: boolean;
    formatPrice?: boolean;
    required?: boolean;
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors
}

const Input: React.FC<InputProps> = ({
    id,
    label,
    tyoe = "text",
    disabled,
    formatPrice,
    register,
    required,
    errors
}) => {
    return(
        <div className="w-full relative">
            {formatPrice && (
                <BiDollar
                    size={24}
                    className="
                    text-neutral-700
                    abosolute
                    top=5
                    left-2
                    "
                />
            )}
            <Input
            id={id}
            disabled={disabled}
            {... register(id, {required})}
            placeholder=" "
            type={type}
            className={
                peer
                w-full
                p-4
                pt-6
                font-light
                border-2
                rounded-md
                outline-none
                transition
                disabled:opacity-70
                disabled:cursor-not-allowed
                ${formatPrice ? 'pl-9' : 'pl-4'}
                ${errors[id] ? 'border-green-500' : 'border-neutral-300"}
                ${errors[id] ? 'focus:border-green-500' : 'focus:border-black"}
                }
            />
            <label
                className={'
                absolute
                text-mdduration-150
                transform
                -translate-y-3
                top-5
                z-10
                origin-[0]
                ${formatPrice ? 'left-9' : 'left-4'}
                peer-placeholder-shown:scale-100
                peer-placeholder-shown:translate-y-0
                peer-focus:scale-75
                peer-focus:-transalte-y-4
                ${errors[id] ? 'text-green-500' : 'text-zinc-400'}
                }
            >
                {label}
            </label>
        </div>
    );
}

export default Input;