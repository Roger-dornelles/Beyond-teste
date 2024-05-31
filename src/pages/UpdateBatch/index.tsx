/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { useNavigate, useParams } from "react-router-dom";
import { AddBatchContext } from "../../context/AddBatchContext";
import { useContext, useEffect, useState } from "react";
import Input from "../../components/input";
import Select from "../../components/select";
import optionsSelect from "../../utils/optionsSelect";
import ButtonCancel from "../../components/buttonCancel";
import ButtonConfirm from "../../components/buttonConfirm";
import acceptOnlyNumbers from "../../utils/acceptOnlyNumbers";
import validatePhone from "../../utils/validatePhone";
import validateEmail from "../../utils/validateEmail";
import validateName from "../../utils/validateName";
import { MessageErrorContext } from "../../context/contextMessageError";

const Index = () => {
  const { id } = useParams();
  const { addBatch } = useContext(AddBatchContext);
  const { setMessageError } = useContext(MessageErrorContext);

  const navigate = useNavigate();

  const [address, setAddress] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [contact, setContact] = useState<string>("");
  const [batch, setBatch] = useState<string>("");
  const [batchType, setBatchType] = useState<{ id: number; name: string }>({
    id: 0,
    name: "",
  });

  const [loading, setLoading] = useState<boolean>(false);

  const listAddress = () => {
    if (id) {
      addBatch.filter((itemFilter) => {
        if (Number(itemFilter.id) === Number(id)) {
          setAddress(true);
          setName(itemFilter.fullName);
          setEmail(itemFilter.email);
          setContact(itemFilter.contact);
          setBatch(itemFilter.batch);
          setBatchType({
            id: itemFilter.batchType.id,
            name: itemFilter.batchType.name,
          });
        }
      });
    }
  };

  useEffect(() => {
    listAddress();
  }, [id]);

  const addressToUpdate = (address: any) => {
    setBatchType({
      id: address.id,
      name: address.name,
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
    addBatch.filter((itemFilter) => {
      if (Number(itemFilter.id === Number(id))) {
        itemFilter.fullName = name;
        itemFilter.email = email;
        itemFilter.contact = contact;
        itemFilter.batch = batch;
        itemFilter.batchType.name = batchType.name;
        itemFilter.batchType.id = batchType.id;
      }
    });
    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 1950);
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div
      className={`flex flex-col justify-center items-center w-[50%] m-auto bg-[#F7F7F7] mt-[2rem]`}
    >
      {address && (
        <div className={`flex flex-col m-auto w-[50%] py-[1.5rem]`}>
          <p className={`flex justify-center mb-[2rem]`}>Atualizar Cadastro</p>
          <form onSubmit={handleSubmit} className={`w-[90%] m-auto`}>
            <Select
              title="Tipo de Endereço"
              options={optionsSelect}
              values={addressToUpdate}
              valueInitial={batchType}
            />

            <Input
              onChange={(e) => setName(e.target.value)}
              placeholder="Nome completo"
              title="Nome completo"
              value={name}
            />

            <Input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              title="Email"
              value={email}
            />

            <Input
              onChange={(e) => setContact(e.target.value)}
              placeholder="Celular"
              title="Celular"
              value={contact}
            />

            <Input
              onChange={(e) => setBatch(e.target.value)}
              placeholder="Numero do Lote"
              title="Numero do lote"
              value={batch}
            />

            <div className={`flex justify-between`}>
              <ButtonCancel onClick={handleCancel} title="Cancelar" />
              <ButtonConfirm title={`${loading ? "Salvando..." : "Salvar"}`} />
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Index;
