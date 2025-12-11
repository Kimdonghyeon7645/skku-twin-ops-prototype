interface Props {
  value: boolean;
  onToggle: () => void;
}

const ToggleBtn = ({ value, onToggle }: Props) => {
  const labelBaseStyle = "absolute pt-[1px] text-[0.95rem] text-[#888888] ";

  return (
    <div
      className="
          relative h-12 w-25.5
          flex items-center 
          rounded-3xl p-[3px] 
          border-[#ddd] bg-white border 
          tracking-tight
          transition-colors duration-300
          cursor-pointer select-none
        "
      onClick={onToggle}
    >
      <div className={labelBaseStyle + "left-[9px]"}>日常</div>
      <div className={labelBaseStyle + "right-[9px]"}>非常</div>
      <div
        className={`
            absolute top-1/2 -translate-y-1/2 
            h-10 w-14 rounded-3xl 
            flex justify-center items-center 
            text-white text-[1.1rem]
            transition-all duration-300 ease-in-out
            ${value ? "bg-[#A60F12] translate-x-9.5" : "bg-[#888888] translate-x-0"}
          `}
      >
        {value ? "非常" : "日常"}
      </div>
    </div>
  );
};

export default ToggleBtn;
