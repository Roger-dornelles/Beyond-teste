/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/rules-of-hooks */
import { useContext } from "react";
import { AddBatchContext } from "../../context/AddBatchContext";
import CardBatch from "../../components/cardBatch";

const Index = () => {
  const { addBatch, setAddBatch } = useContext(AddBatchContext);

  const handleDeleteAddress = (value: number) => {
    setAddBatch(() =>
      addBatch.filter((itemFilter) => {
        return itemFilter.id !== value;
      })
    );
  };

  return (
    <>
      <div className={`w-[50%] m-auto flex justify-center flex-col`}>
        {!addBatch.length ? (
          <p
            className={`flex justify-center items-center text-red-500 mt-[2rem]`}
          >
            Opsss, Não endereços cadastrados.
          </p>
        ) : (
          <h2 className={`flex justify-center w-full text-center mt-[2rem]`}>
            Endereços cadastrados
          </h2>
        )}

        <div className={`w-[50%] m-auto`}>
          {addBatch.length >= 1 &&
            addBatch.map((item, index) => {
              return (
                <CardBatch
                  items={item}
                  deleteAddress={handleDeleteAddress}
                  key={index}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};
export default Index;
