import HamburgerIcon from "./icon/HamburgerIcon";
import SearchIcon from "./icon/SearchIcon";
import InfoBookIcon from "./icon/InfoBookIcon";
import ToggleBtn from "./ToggleBtn";

const TitleBar = () => {
  return (
    <div className="h-[59px] w-full px-2.5 absolute flex items-center bg-[#ffffff00] select-none">
      <div className="flex items-center bg-[#ffffff66] h-12 pl-4 pr-6.5 rounded-3xl border-[#ffffff22] border">
        <img alt="azbil-logo" src="/img/azbil_logo.png" height={35} width={86} />
        <div className="ml-px mr-[5px] text-[1.5rem] font-thin text-[#333]">×</div>
        <img alt="ninewatt-logo" src="/img/9w_logo.png" height={31} width={19} />
        <div className="ml-2.5 md:ml-3 tracking-tight leading-[17px] mt-[5.5px]">
          <div className="font-semibold text-[1.4rem] text-[#333]">ビル管理 DX</div>
          <div className="font-light text-[0.85rem] text-[#555] ml-px">Building Management DX</div>
        </div>
      </div>
      <>
        {/* PC layout (md~) */}
        <div
          className="
          hidden md:flex h-12 ml-2.5 p-[3px]
          border-[#ddd] border rounded-3xl bg-white
          text-[#444] tracking-tight overflow-hidden cursor-pointer"
        >
          {["室内環境", "設備管理", "エネルギー"].map((e, i) => (
            <div
              key={i}
              className={
                "flex items-center justify-center rounded-3xl " +
                (i === 0 ? "bg-[#555] text-white" : "") +
                ([0, 2].includes(i) ? " w-27" : " w-24")
              }
            >
              {e}
            </div>
          ))}
        </div>
        <div className="grow" />
        <div
          className="
          hidden md:flex 
          w-60 h-12 relative
          items-center justify-center 
          rounded-3xl border-[#ddd] border bg-white
          cursor-pointer"
        >
          <SearchIcon />
          <div className="text-[#555] text-[1.05rem] font-medium tracking-tight">北とぴあ</div>
        </div>
        <div className="hidden md:flex mx-1.5">
          <ToggleBtn value={false} onToggle={() => {}} />
        </div>
        <div
          className="
          hidden md:flex 
          h-12 w-19 
          justify-center items-center 
          rounded-3xl border-[#ddd] border bg-white
          font-medium text-[#888888] tracking-tight
          cursor-pointer"
        >
          <InfoBookIcon />
          <div className="pl-[3.5px]">EOP</div>
        </div>
      </>
      <>
        {/* Mobile layout (~md) */}
        <div className="flex md:hidden mr-1.5">
          <HamburgerIcon />
        </div>
      </>
    </div>
  );
};

export default TitleBar;
