import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";

type Props = {
  children: ReactNode;
};

const Index = ({ children }: Props) => {
  const location = useLocation();

  return (
    <>
      <aside
        className={`flex flex-col bg-[#F7F7F7] w-[170px] h-[450px] absolute top-0`}
      >
        <Link
          to={"/"}
          className={`text-[#000]  px-[0.5rem]  my-[1rem] py-[0.2rem] ${
            location.pathname === "/" && "bg-[#e7e7e7]"
          }`}
        >
          Home
        </Link>

        <Link
          to={"/adicionar"}
          className={`text-[#000] hover:bg-[#e7e7e7] px-[0.5rem] py-[0.2rem] ${
            location.pathname === "/adicionar" && "bg-[#e7e7e7]"
          }`}
        >
          Cadastrar endereço
        </Link>
      </aside>
      {children}
    </>
  );
};

export default Index;
