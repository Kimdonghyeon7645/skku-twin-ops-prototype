import mapboxgl from "mapbox-gl";
import { useEffect, useRef, useState } from "react";
import { mapLayers, mapSources } from "../constants/mapStyles";
import meetingImg from "/meeting-icon.png";
import iconBgImg from "/icon-bg.png";

mapboxgl.accessToken = `${import.meta.env.VITE_MAPBOXGL_ACCESS_TOKEN}`;

const useMap = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [, setMap] = useState<mapboxgl.Map | null>();

  const initMap = () => {
    if (!containerRef.current) return;
    const map = new mapboxgl.Map({
      container: containerRef.current,
      style: `${import.meta.env.VITE_MAPBOXGL_STYLE}`,
      center: [126.9769, 37.2908],
      zoom: 20,
      pitch: 50,
    });
    setMap(map);
    // eslint-disable-next-line react-hooks/immutability
    map.on("click", (e) => onClickMap(e));
    map.on("load", () => {
      map.loadImage(meetingImg, (_, image1) => {
        map.loadImage(iconBgImg, (_, image2) => {
          if (!image1 || !image2) return;
          map.addImage("meeting-room", image1, { sdf: true });
          map.addImage("icon-bg", image2, { sdf: true });
          mapSources.forEach((source) => map.addSource(...source));
          mapLayers.forEach((layer) => map.addLayer(layer));
        });
      });
    });
    return () => map.remove();
  };
  useEffect(initMap, []);

  const onClickMap = (e: mapboxgl.MapMouseEvent) => {
    console.log(e.lngLat.lng, e.lngLat.lat);
    // const features = map.queryRenderedFeatures(e.point, { layers: ["bld1"] });
    // const targetIdx = features && features.length > 0 && features[0].layer!.id === "bld1" ? features[0].properties!.idx : undefined;
    // console.log(targetIdx);
  };

  return { containerRef };
};

export default useMap;
