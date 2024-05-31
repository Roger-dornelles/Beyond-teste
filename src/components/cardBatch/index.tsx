import { useState } from "react";
import { InitialValueType } from "../../context/AddBatchContext";
import { useNavigate } from "react-router-dom";

type Props = {
  items?: InitialValueType;
  deleteAddress: (value: number) => void;
};

const Index = ({ items, deleteAddress }: Props) => {
  const navigate = useNavigate();

  const [selectedItem, setSelectedItem] = useState(false);

  const handleItemSelected = (item: number) => {
    if (item) {
      setSelectedItem(!selectedItem);
    }
  };

  const handleDeleteAddress = (value: number) => {
    deleteAddress(value);
  };

  const handleEditAddress = (id: number) => {
    navigate(`/editar/${id}`);
  };
  return (
    <>
      {items && (
        <div
          className={`w-[80%] flex  bg-[#f7f7f7] py-[2rem] relative m-[1rem] rounded-md ${
            selectedItem && "border-[1px] border-[#643efc]"
          }`}
          onClick={() => handleItemSelected(items.id as number)}
        >
          <div
            className={`w-[14px] h-[14px] rounded-[50%] border-[1px] border-[#000] ${
              selectedItem && "border-[#643efc]"
            } absolute right-[10px] top-[10px] `}
          >
            <p
              className={`w-[8px] h-[8px] rounded-[50%] absolute top-[2px] left-[2px] 
              ${selectedItem && "bg-[#643efc]"} `}
            ></p>
          </div>

          <div>
            <ul className={`pl-[1rem]`}>
              <>
                <li
                  className={`${
                    items.batchType.name === "Escritorio"
                      ? "bg-[#DAE6FF]"
                      : "bg-[#FFECC7]"
                  } w-[70px] rounded-md flex justify-center items-center text-[0.8rem]`}
                >
                  {items.batchType.name}
                </li>
                <li className={`font-bold mb-[0.3rem]`}>{items.fullName}</li>

                <li className={`font-bold text-[0.7rem]`}>{items.contact}</li>
                <li>{items.batch}</li>

                <div className={`mt-[0.5rem]`}>
                  <button
                    className={`border-[1px] border-[#ccc] rounded-md px-[0.5rem] py-[0.1rem] text-[0.8rem]`}
                    onClick={() => handleEditAddress(Number(items.id))}
                  >
                    Editar endereço
                  </button>
                  <button
                    className={`border-[1px] border-[#ccc] rounded-md px-[0.5rem] py-[0.1rem] ml-[1rem] text-[0.8rem]`}
                    onClick={() => handleDeleteAddress(Number(items.id))}
                  >
                    Excluir endereço
                  </button>
                </div>
              </>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Index;
