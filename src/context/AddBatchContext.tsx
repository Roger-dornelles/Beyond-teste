import React, { ReactNode, createContext, useState } from "react";

export interface InitialValueType {
  id: number | null;
  fullName: string;
  email: string;
  contact: string;
  batch: string;
  batchType: { id: number; name: string };
}

interface InitialValueContext {
  addBatch: InitialValueType[];
  setAddBatch: React.Dispatch<React.SetStateAction<InitialValueType[]>>;
}

const InitialValue: InitialValueContext = {
  addBatch: [
    {
      id: null,
      fullName: "",
      email: "",
      batch: "",
      batchType: { id: 0, name: "" },
      contact: "",
    },
  ],
  setAddBatch: () => {},
};

export const AddBatchContext = createContext(InitialValue);

interface Children {
  children: ReactNode;
}

export const AddBatchProvider = ({ children }: Children) => {
  const [addBatch, setAddBatch] = useState<InitialValueType[]>([]);

  return (
    <AddBatchContext.Provider value={{ addBatch, setAddBatch }}>
      {children}
    </AddBatchContext.Provider>
  );
};
