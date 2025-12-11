import HamburgerIcon from "./icon/HamburgerIcon";
import SearchIcon from "./icon/SearchIcon";
import InfoBookIcon from "./icon/InfoBookIcon";
import ToggleBtn from "./ToggleBtn";

const TitleBar = () => {
  return (
    <div className="h-[59px] w-full px-2.5 absolute flex items-center bg-[#ffffff00] select-none">
      <div className="flex items-center bg-[#ffffff66] h-12 pl-4 pr-6.5 rounded-3xl border-[#ffffff22] border">
        <img alt="logo" src="logo.png" height={35} width={46} />
        <div className="ml-1.5 tracking-tight leading-[17px] mt-[5.5px]">
          <div className="font-bold text-[1.6rem] text-[#333]">DX Office</div>
          <div className="text-[0.95rem] text-[#00000066] ml-px">Smart Office Map</div>
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
          {["실시간 사무실", "사내 일정", "근태 현황", "회의실 예약", "전자 결재"].map((e, i) => (
            <div key={i} className={"px-4 flex items-center justify-center rounded-3xl " + (i === 0 ? "bg-[#555] text-white" : "")}>
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
          <div className="text-[#666] text-[1.05rem] font-medium tracking-tighter">수원사무소 (본사)</div>
        </div>
        <div className="hidden md:flex mx-1.5">
          <ToggleBtn value={false} onToggle={() => {}} />
        </div>
        <div
          className="
          hidden md:flex 
          h-12 w-23 
          justify-center items-center 
          rounded-3xl border-[#ddd] border bg-white
          font-medium text-[#888888] tracking-tight
          cursor-pointer"
        >
          <InfoBookIcon />
          <div className="pl-[3.5px]">메뉴얼</div>
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
