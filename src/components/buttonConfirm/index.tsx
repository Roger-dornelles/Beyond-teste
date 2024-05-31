type PropsButton = {
  title: string;
};

const Index = ({ title }: PropsButton) => {
  return (
    <>
      <button
        className={`shadow-xl shadow-[#7d7d7d] px-[3rem] py-[0.2rem] 
        text-[1.1rem] rounded-[4px] bg-[#542BF0] hover:bg-[#544ef4]
         text-[#FFF] `}
      >
        {title}
      </button>
    </>
  );
};

export default Index;
