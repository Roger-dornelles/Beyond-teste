/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { useContext, useEffect, useState } from "react";
import { MessageErrorContext } from "../../context/contextMessageError";

type OptionsType = {
  id: number;
  name: string;
};

type Props = {
  options: OptionsType[];
  values: (value: OptionsType) => void;
  title: string;
  valueInitial?: OptionsType;
};

const Index = ({ options, values, title, valueInitial }: Props) => {
  const [optionValue, setOptionValue] = useState("");

  const { messageError } = useContext(MessageErrorContext);

  const handleSelect = (value: string) => {
    options.filter((itemFilter) => {
      if (itemFilter.name === value) {
        return values({ id: itemFilter.id, name: itemFilter.name });
      }
    });
  };

  useEffect(() => {
    handleSelect(optionValue);
  }, [optionValue]);
  return (
    <div className="relative">
      <p className={`mb-[0.3rem]`}>{title}</p>
      <select
        value={optionValue}
        className={`w-full outline-0 rounded py-[0.3rem] pl-[0.2rem] shadow-md shadow-[#e4e4e4] ${
          messageError.identification === title && "border-[1px] border-red-400"
        }`}
        onChange={(e) => setOptionValue(e.target.value)}
      >
        <option
          className={`w-full`}
          value={valueInitial?.name ? valueInitial.name : ""}
        >
          {valueInitial?.name ? valueInitial.name : "Selecionar opção"}
        </option>
        {options.length >= 1 &&
          options.map((option) => {
            return (
              <option className={`w-full`} value={option.name} key={option.id}>
                {option.name}
              </option>
            );
          })}
      </select>
      {messageError.identification === title && (
        <p className={`absolute bottom-[-22px] text-red-500`}>
          {messageError.message}
        </p>
      )}
    </div>
  );
};

export default Index;
