/* eslint-disable react-hooks/rules-of-hooks */
import { useContext } from "react";
import { MessageErrorContext } from "../../context/contextMessageError";

type PropsInput = {
  value: string;
  onChange: (value: any) => void;
  title: string;
  placeholder: string;
  maxLength?: number;
};

const index = ({
  onChange,
  value,
  title,
  placeholder,
  maxLength,
}: PropsInput) => {
  const { messageError } = useContext(MessageErrorContext);
  return (
    <div className={`flex flex-col w-full my-[1.5rem] relative`}>
      <label htmlFor={title}>{title}</label>
      <input
        id={title}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`outline-0 rounded py-[0.3rem] pl-[0.2rem] shadow-md shadow-[#e4e4e4] ${
          messageError?.identification === title
            ? "border-[1px] border-red-500"
            : ""
        } `}
        maxLength={maxLength}
      />

      <p className={`absolute  text-red-500 w-full z-[99] bottom-[-22px]`}>
        {messageError?.identification === title ? messageError.message : ""}
      </p>
    </div>
  );
};

export default index;
