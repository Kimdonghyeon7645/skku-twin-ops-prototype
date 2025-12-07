import useMap from "./hooks/useMap";

function App() {
  const { containerRef } = useMap();

  return (
    <div>
      <div
        ref={containerRef}
        style={{
          position: "absolute",
          height: "100svh",
          width: "100vw",
        }}
      />
    </div>
  );
}

export default App;
