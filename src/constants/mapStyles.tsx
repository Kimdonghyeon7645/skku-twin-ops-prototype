import { mapSpaceColors } from "./colorPalette";

const floorSrc = "floors";
const wallSrc = "walls";
const roomSrc = "rooms";
const pointSrc = "points";

const floorSource: [string, mapboxgl.SourceSpecification] = [floorSrc, { type: "geojson", data: "data/fdx_floors.geojson" }];
const wallSource: [string, mapboxgl.SourceSpecification] = [wallSrc, { type: "geojson", data: "data/fdx_walls.geojson" }];
const roomSource: [string, mapboxgl.SourceSpecification] = [roomSrc, { type: "geojson", data: "data/fdx_spaces.geojson" }];
const pointSource1: [string, mapboxgl.SourceSpecification] = [pointSrc, { type: "geojson", data: "data/points.geojson" }];

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

const pointLayer0: mapboxgl.SymbolLayerSpecification = {
  id: `${pointSrc}0-layer`,
  source: pointSrc,
  type: "symbol",
  layout: {
    "icon-image": "icon-bg",
    "icon-allow-overlap": true,
    "icon-size": 0.17,
    "text-size": 0,
  },
  paint: {
    "icon-color": "#ffffff",
  },
  minzoom: 17,
};

const pointLayer1: mapboxgl.SymbolLayerSpecification = {
  id: `${pointSrc}1-layer`,
  source: pointSrc,
  type: "symbol",
  layout: {
    "icon-image": "meeting-room",
    "icon-size": 0.17,
    "text-field": ["get", "title"],
    "text-font": ["Open Sans Regular"],
    "text-offset": [0, 1.1],
    "text-anchor": "top",
    "text-size": 13,
    "icon-allow-overlap": true,
    "text-allow-overlap": false,
    "text-optional": true, // text-optional아 고맙다...
  },
  paint: {
    "icon-color": "#2F3E87",
    "text-color": "#090E20",
    "text-halo-color": "#ffffff",
    "text-halo-width": 1.5,
  },
  minzoom: 17,
};

export const mapSources = [floorSource, wallSource, roomSource, pointSource1];
export const mapLayers = [floorLayer, wallLayer, roomLayer, pointLayer0, pointLayer1];
