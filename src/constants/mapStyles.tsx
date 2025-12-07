import { mapSpaceColors } from "./colorPalette";

const floorSrc = "floors";
const wallSrc = "walls";
const roomSrc = "rooms";

const floorSource: [string, mapboxgl.SourceSpecification] = [floorSrc, { type: "geojson", data: "data/fdx_floors.geojson" }];
const wallSource: [string, mapboxgl.SourceSpecification] = [wallSrc, { type: "geojson", data: "data/fdx_walls.geojson" }];
const roomSource: [string, mapboxgl.SourceSpecification] = [roomSrc, { type: "geojson", data: "data/fdx_spaces.geojson" }];

const floorLayer: mapboxgl.FillExtrusionLayerSpecification = {
  id: `${floorSrc}-layer`,
  source: floorSrc,
  type: "fill-extrusion",
  paint: { "fill-extrusion-color": "#fff", "fill-extrusion-opacity": ["step", ["zoom"], 0, 17, 1], "fill-extrusion-height": 0.1 },
};

const wallLayer: mapboxgl.FillExtrusionLayerSpecification = {
  id: `${wallSrc}-layer`,
  source: wallSrc,
  type: "fill-extrusion",
  paint: { "fill-extrusion-color": "#d4d4d7", "fill-extrusion-opacity": ["step", ["zoom"], 0, 17, 1], "fill-extrusion-height": 1.2 },
};

const roomLayer: mapboxgl.FillExtrusionLayerSpecification = {
  id: `${roomSrc}-layer`,
  source: roomSrc,
  type: "fill-extrusion",
  paint: {
    "fill-extrusion-color": ["match", ["get", "type"], ...mapSpaceColors, "#6975a8"],
    "fill-extrusion-opacity": ["step", ["zoom"], 0, 17, 0.8],
    "fill-extrusion-height": 1,
  },
};

export const mapSources = [floorSource, wallSource, roomSource];
export const mapLayers = [floorLayer, wallLayer, roomLayer];
