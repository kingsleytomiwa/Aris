import React, { useId } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  label?: string;
  inputClassName?: string;
  labelClassName?: string;
  forms?: boolean;
  textarea?: boolean;
};

const Input: React.FC<Props & Omit<React.ComponentProps<"input">, "id">> = ({
  label,
  className,
  inputClassName,
  labelClassName,
  forms = false,
  textarea,
  ...inputProps
}) => {
  const id = useId();

  return (
    <div className={twMerge("w-full flex flex-col gap-1", className)}>
      {label && (
        <label
          htmlFor={id}
          className={twMerge("text-lg font-medium", labelClassName)}
        >
          {label}
        </label>
      )}
      {textarea ? (
        <textarea
          className={twMerge(
            "text-base py-0 h-[38px] px-[20px] bg-[#e6e6e8] rounded-[7px] placeholder:text-[#9c9b9b]",
            inputClassName,
            forms &&
              "bg-white focus-visible:outline-none text-black-500 border border-gray-400 rounded-[5px]"
          )}
          id={id}
        ></textarea>
      ) : (
        <input
          className={twMerge(
            "text-base py-0 h-[44px] px-4 border border-gray-400 rounded-[5px] placeholder:text-black-500 placeholder:opacity-50 placeholder:font-light text-black-500 focus-visible:outline-none",
            inputClassName,
            forms && "bg-white focus-visible:outline-none"
          )}
          id={id}
          {...inputProps}
        />
      )}
    </div>
  );
};

export default Input;
