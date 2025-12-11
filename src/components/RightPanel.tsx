import ChevronUpIcon from "./icon/ChevronUpIcon";
// import ChevronDownIcon from "./icon/ChevronDownIcon";

const RightPanel = () => {
  const sectionStyles = {
    box: "bg-[#ffffffcc] rounded-xl w-[calc(100%-25px)] mx-[12px]",
    header: "pl-4 pr-3 py-2 flex justify-between items-center",
    title: "tracking-tight text-[#444] text-[1.1rem] font-semibold",
    status: "py-[3px] px-3 rounded-2xl bg-[#F2F6FE] text-[#064C8B]",
    body: "flex flex-wrap gap-y-3.5 px-4.5 pt-2 pb-5",
    label: "text-[0.95rem] text-[#888]",
    value: "text-[1.1rem] text-[#444] font-bold leading-[17px]",
  };

  return (
    <div className="hidden sm:inline-block absolute top-[60px] right-2.5">
      <div className="w-[360px] bg-[#F7F7F7dd] backdrop-blur-sm rounded-3xl overflow-hidden" style={{ maxHeight: "calc(100svh - 70px)" }}>
        <div className="flex items-center h-13 px-3 gap-2 text-[#333] tracking-tight">
          <select className="h-10 rounded-xl hover:bg-[#e9e9e9] text-[1.15rem] outline-0 px-1">
            <option>15階</option>
          </select>
          <div className="text-[1.25rem] font-bold">ペガサスホール</div>
          <div className="grow" />
          <div className="pt-1 pb-1.5 pl-1 pr-2 rounded-xl hover:bg-[#e9e9e9] cursor-pointer" onClick={() => {}}>
            <ChevronUpIcon />
          </div>
        </div>

        <div className="pb-3 flex flex-col gap-2.5 overflow-y-auto" style={{ maxHeight: "calc(100svh - 70px - 52px)" }}>
          <div className={sectionStyles.box}>
            <div className={sectionStyles.header}>
              <div className={sectionStyles.title}>在室状況・トイレ</div>
              <div className={sectionStyles.status}>余裕</div>
            </div>
            <div className={sectionStyles.body}>
              {[
                ["在室人数", `${13} 名`],
                ["", ""],
                ["トイレ(男)", `${1}/${4}`],
                ["トイレ(女)", `${0}/${4}`],
              ].map(([label, value], i) => (
                <div key={i} className="w-[49%] tracking-[-0.4px]">
                  <div className={sectionStyles.label}>{label}</div>
                  <div className={sectionStyles.value}>{value}</div>
                </div>
              ))}
            </div>
          </div>
          <div className={sectionStyles.box}>
            <div className={sectionStyles.header}>
              <div className={sectionStyles.title}>空気質 & ウイルス指数™</div>
              <div className={sectionStyles.status}>正常</div>
            </div>
            <div className={sectionStyles.body}>
              {[
                ["CO₂", `${2369} ppm`],
                ["PM2.5", `${10} μg/m³`],
                ["TVOC", `${1.3} ppm`],
                ["ウイルス指数", `${3.8}`],
              ].map(([label, value], i) => (
                <div key={i} className="w-[49%] tracking-[-0.4px]">
                  <div className={sectionStyles.label}>{label}</div>
                  <div className={sectionStyles.value}>{value}</div>
                </div>
              ))}
            </div>
          </div>
          <div className={sectionStyles.box}>
            <div className={sectionStyles.header}>
              <div className={sectionStyles.title}>快適性評価 (PMV)</div>
              <div className={sectionStyles.status}>快適</div>
            </div>
            <div className="h-4.5 mx-3.5 mt-1.5 rounded-full overflow-hidden relative">
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to right, #2783fc, #3ab4d6, #3ad659,#ecc243, #ec4343)" }}
              />
              <div className="absolute left-[51%] w-[3px] top-0.5 h-3.5 bg-white" />
            </div>
            <div className={sectionStyles.body}>
              {[
                ["室温", `${26} °C`],
                ["湿度", `${50} %`],
                ["気流", `${0.1} m/s`],
                ["平均放射温度", `${23} °C`],
                ["着衣量", `${1} clo`],
                ["活動量", `${1} Met`],
              ].map(([label, value], i) => (
                <div key={i} className="w-[49%] tracking-[-0.4px]">
                  <div className={sectionStyles.label}>{label}</div>
                  <div className={sectionStyles.value}>{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
