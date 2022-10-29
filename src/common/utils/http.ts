import axios from "axios";

export default axios.create({
  baseURL: "https://api.jsonbin.io/v3/b",
  headers: {
    "Content-type": "application/json",
    "X-Access-Key":
      "$2b$10$2CcRVfpiuo977w/QRdVKduknKrhlyg/6xtHeSlTiOTS4jzwB/urHi",
  },
});
