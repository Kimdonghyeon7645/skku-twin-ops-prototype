import RightPanel from "./components/RightPanel";
import TitleBar from "./components/TitleBar";
import useMap from "./hooks/useMap";

function App() {
  const { containerRef } = useMap();

  return (
    <div>
      <div ref={containerRef} className="absolute h-svh w-svw" />
      <TitleBar />
      <RightPanel />
    </div>
  );
}

export default App;
