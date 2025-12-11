import useMap from "./hooks/useMap";

function App() {
  const { containerRef } = useMap();

  return (
    <div>
      <div ref={containerRef} className="absolute h-svh w-svw" />
    </div>
  );
}

export default App;
