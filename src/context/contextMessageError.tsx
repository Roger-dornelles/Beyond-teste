import React, { ReactNode, createContext, useState } from "react";

interface InitialValueType {
  identification: string;
  message: string;
}

interface InitialValueContext {
  messageError: InitialValueType;
  setMessageError: React.Dispatch<React.SetStateAction<InitialValueType>>;
}

const InitialValue: InitialValueContext = {
  messageError: { identification: "", message: "" },
  setMessageError: () => {},
};

export const MessageErrorContext = createContext(InitialValue);

interface Children {
  children: ReactNode;
}

export const MessageErrorProvider = ({ children }: Children) => {
  const [messageError, setMessageError] = useState<InitialValueType>({
    identification: "",
    message: "",
  });

  return (
    <MessageErrorContext.Provider value={{ messageError, setMessageError }}>
      {children}
    </MessageErrorContext.Provider>
  );
};
