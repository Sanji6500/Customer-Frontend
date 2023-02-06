// Need to use the React-specific entry point to import createApi
import axios from "axios";

const Apii = axios.create({ baseURL: process.env.REACT_APP_BACKEND });

// const configData = {
//   header: { "Content-Type": "multipart/form-data" },
// };

export const geCurrentAds = async () => {
  const respnese = await Apii.get("Advertising/Current-ads");
  return respnese.data.result;
};

// Define a service using a base URL and expected endpoints

export default Apii;
