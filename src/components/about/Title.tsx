const Title = ({ title, color }) => {
  return (
    <div
      className={`${color} mx-auto flex w-1/4 justify-center border-b-2 border-[#EBB2F9] font-metrophobic text-5xl leading-[3.583rem]`}
    >
      {title}
    </div>
  );
};
export default Title;
