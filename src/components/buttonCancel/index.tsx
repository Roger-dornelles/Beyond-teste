type PropsButton = {
  title: string;
  onClick: () => void;
};

const Index = ({ title, onClick }: PropsButton) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`shadow-xl shadow-[#bdbdbd] px-[3rem] py-[0.2rem] text-[1.1rem] rounded-[4px] bg-[#FFF] hover:bg-[#fafafa] `}
      >
        {title}
      </button>
    </>
  );
};

export default Index;
