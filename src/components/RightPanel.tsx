import ChevronUpIcon from "./icon/ChevronUpIcon";
// import ChevronDownIcon from "./icon/ChevronDownIcon";

const RightPanel = () => {
  const sectionStyles = {
    box: "bg-[#ffffffcc] rounded-xl w-[calc(100%-25px)] mx-[12px]",
    header: "pl-4 pr-3 py-2 flex justify-between items-center",
    title: "tracking-tight text-[#444] text-[1.15rem] font-semibold",
    status: "py-[3px] px-3 rounded-2xl bg-[#f2f6fe] text-[#2175bf] font-medium",
    body: "flex flex-wrap gap-y-3.5 px-4.5 pt-2 pb-5",
    label: "text-[0.95rem] text-[#888]",
    value: "text-[1.1rem] text-[#444] font-bold leading-[17px]",
  };

  return (
    <div className="hidden sm:inline-block absolute top-[60px] right-2.5">
      <div className="w-[360px] bg-[#F7F7F7dd] backdrop-blur-sm rounded-3xl overflow-hidden" style={{ maxHeight: "calc(100svh - 70px)" }}>
        <div className="flex items-center h-13 px-3 gap-2 text-[#333] tracking-tight">
          <select className="h-10 rounded-xl hover:bg-[#e9e9e9] text-[1.15rem] outline-0 px-1">
            <option>3층</option>
          </select>
          <div className="text-[1.25rem] font-bold">테스트 사무실 1</div>
          <div className="grow" />
          <div className="pt-1 pb-1.5 pl-1 pr-2 rounded-xl hover:bg-[#e9e9e9] cursor-pointer" onClick={() => {}}>
            <ChevronUpIcon />
          </div>
        </div>

        <div className="pb-3 flex flex-col gap-2.5 overflow-y-auto" style={{ maxHeight: "calc(100svh - 70px - 52px)" }}>
          <div className={sectionStyles.box}>
            <div className={sectionStyles.header}>
              <div className={sectionStyles.title}>사내 인력 현황</div>
              <div className={sectionStyles.status}>정상</div>
            </div>
            <div className={sectionStyles.body}>
              {[
                ["상주 인원", `31 / 38 명`],
                ["", ""],
                ["외근 인원", `5 명`],
                ["휴가 인원", `2 명`],
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
              <div className={sectionStyles.title}>회의실 이용 현황</div>
              <div className={sectionStyles.status}>여유</div>
            </div>
            <div className={sectionStyles.body}>
              {[
                ["대회의실", `금일 예약없음`],
                ["소회의실 1", `금일 예약없음`],
                ["소회의실 2", `14:00 예약`],
                ["소회의실 3", `13:00 예약`],
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
              <div className={sectionStyles.title}>실내환경 모니터링</div>
              <div className={sectionStyles.status}>쾌적</div>
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
                ["냉/난방온도", `${25} °C`],
                ["현재 온도", `${25.4} °C`],
                ["습도", `${50} %`],
                ["이산화탄소 농도", `정상 (862 ppm)`],
                ["미세먼지 농도", `정상 (21 ㎍/㎥)`],
                ["초미세먼지 농도", `정상 (15 ㎍/㎥)`],
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
