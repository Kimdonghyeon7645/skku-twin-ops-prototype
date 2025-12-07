import mapboxgl from "mapbox-gl";
import { useEffect, useRef, useState } from "react";

mapboxgl.accessToken = `${import.meta.env.VITE_MAPBOXGL_ACCESS_TOKEN}`;

const useMap = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [map, setMap] = useState<mapboxgl.Map | null>();

  const initMap = () => {
    if (!containerRef.current) return;
    const map = new mapboxgl.Map({
      container: containerRef.current,
      style: `${import.meta.env.VITE_MAPBOXGL_STYLE}`,
      center: [126.973720, 37.293076],
      zoom: 18,
      pitch: 50,
    });
    setMap(map);
    map.on("load", () => onLoadMap(map));
    map.on("click", (e) => onClickMap(e));
    return () => map.remove();
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(initMap, []);

  const onLoadMap = (map: mapboxgl.Map) => {
    // map.loadImage(markerImg, (error1, image1) => {
    //   map.loadImage(markerBgImg, (error2, image2) => {
    //     if (error1 || error2 || !image1 || !image2) return;
    //     map.addImage("marker-icon", image1, { sdf: true });
    //     map.addImage("marker-bg", image2, { sdf: true });
    //     const buildings = buildingDataService.getAllBuildings();
    //     map.addSource("bld", parseBld2Geojson(buildings));
    //     map.addLayer(bldMarkerBubbleLayer);
    //     map.addLayer(bldMarkerBgLayer);
    //     map.addLayer(bldLayer1);
    //     map.on("click", onClickMap);
    //     // 대시보드에서 선택된 건물이 있으면 해당 건물로 줌인
    //     const { selectedBld: initialBld } = useSelectionStore.getState();
    //     if (initialBld !== undefined) {
    //       flyToBld(initialBld);
    //     }
    //   });
    // });
  };

  const onClickMap = (e: mapboxgl.MapMouseEvent) => {
    if (!map) return;
    const features = map.queryRenderedFeatures(e.point, { layers: ["bld1"] });
    const targetIdx = features && features.length > 0 && features[0].layer!.id === "bld1" ? features[0].properties!.idx : undefined;
    console.log(targetIdx);
  };

  return { containerRef };
};

export default useMap;
