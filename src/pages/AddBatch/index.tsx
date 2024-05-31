import React, { useContext, useState } from "react";
import Input from "../../components/input";
import ButtonConfirm from "../../components/buttonConfirm";
import ButtonCancel from "../../components/buttonCancel";
import { useNavigate } from "react-router-dom";
import validateName from "../../utils/validateName";
import validateEmail from "../../utils/validateEmail";
import MaskPhone from "../../utils/phoneMask";
import { MessageErrorContext } from "../../context/contextMessageError";
import validatePhone from "../../utils/validatePhone";
import acceptOnlyNumbers from "../../utils/acceptOnlyNumbers";
import { AddBatchContext } from "../../context/AddBatchContext";
import Select from "../../components/select";
import optionsSelect from "../../utils/optionsSelect";

const Index = () => {
  const navigate = useNavigate();
  const { setMessageError } = useContext(MessageErrorContext);
  const { setAddBatch, addBatch } = useContext(AddBatchContext);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [contact, setContact] = useState<string>("");
  const [batch, setBatch] = useState<string>("");
  const [batchType, setBatchType] = useState<{ id: number; name: string }>({
    id: 0,
    name: "",
  });

  const [loading, setLoading] = useState<boolean>(false);

  const getValuesSelect = (value: { id: number; name: string }) => {
    setBatchType({
      id: value.id,
      name: value.name,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (batchType.name === "") {
      setMessageError({
        identification: "Tipo de Endereço",
        message: "Selecionar um valor",
      });
      return;
    }

    if (name) {
      const isNameValid = validateName(name);

      if (!isNameValid) {
        setMessageError({
          identification: "Nome completo",
          message: "Nome invalido",
        });
        return;
      }
    } else {
      setMessageError({
        identification: "Nome completo",
        message: "Digite um nome valido",
      });
      return;
    }

    if (email !== "") {
      const isEmailValid = validateEmail(email);

      if (!isEmailValid) {
        setMessageError({
          identification: "Email",
          message: "Email invalido",
        });
        return;
      } else {
        setMessageError({ identification: "", message: " " });
      }
    } else {
      setMessageError({
        identification: "Email",
        message: "Digite um email valido",
      });
      return;
    }

    if (contact !== "") {
      const isContactValid = validatePhone(contact);
      if (!isContactValid) {
        setMessageError({
          identification: "Celular",
          message: "Digite um numero de celular valido",
        });
        return;
      }
    } else {
      setMessageError({
        identification: "Celular",
        message: "Preencha este campo",
      });
      return;
    }

    if (batch !== "") {
      const isNumber = acceptOnlyNumbers(batch);

      if (!isNumber) {
        setMessageError({
          identification: "Numero do Lote",
          message: "Valor invalido, somente numeros",
        });
        return;
      }
    } else {
      setMessageError({
        identification: "Numero do Lote",
        message: "Valor invalido",
      });
    }

    if (batchType.name === "") {
      setMessageError({
        identification: "Tipo do Lote",
        message: "Preencha este campo",
      });
      return;
    } else {
      setMessageError({
        identification: "",
        message: "",
      });
    }
    setLoading(true);
    const addBatchArray = [];
    addBatchArray.push(...addBatch, {
      id: addBatch.length + 1,
      fullName: name,
      email: email,
      contact: contact,
      batch: batch,
      batchType: { id: batchType.id, name: batchType.name },
    });

    setAddBatch(addBatchArray);
    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 2000);
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div className={`w-full h-full flex items-center py-[3rem]`}>
      <div
        className={`flex flex-col w-[50%] m-auto bg-[#f7f7f7] py-[1.5rem] rounded-xl`}
      >
        <h1 className={`flex m-auto pb-[1rem]`}>Cadastrar Endereço</h1>
        <form onSubmit={handleSubmit} className={`w-[50%] m-auto`}>
          {optionsSelect.length >= 1 && (
            <>
              <Select
                options={optionsSelect}
                values={getValuesSelect}
                title={"Tipo de Endereço"}
              />
            </>
          )}

          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            title="Nome completo"
            placeholder="Nome completo"
          />

          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            title="Email"
            placeholder="Email"
          />

          <Input
            value={contact}
            onChange={(e) => setContact(MaskPhone(e.target.value))}
            title="Celular"
            placeholder="Celular"
            maxLength={15}
          />

          <Input
            value={batch}
            onChange={(e) => setBatch(e.target.value)}
            title="Numero do Lote"
            placeholder="EX: 1234"
            maxLength={4}
          />
          <div className={`w-full flex justify-between mt-[1rem]`}>
            <ButtonCancel title="Cancelar" onClick={handleCancel} />
            <ButtonConfirm title={`${loading ? "Salvando..." : "Cadastrar"}`} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Index;
