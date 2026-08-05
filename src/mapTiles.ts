const token = import.meta.env.VITE_MAPBOX_TOKEN;

export const tileUrl = token
  ? `https://api.mapbox.com/styles/v1/mapbox/light-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${token}`
  : "https://tile.openstreetmap.org/{z}/{x}/{y}.png";

export const tileAttribution = token
  ? '&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  : '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
