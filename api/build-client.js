import axios from "axios";

import { constants } from "../constants";
// return axios instance based on server or browser
const buildClient = ({ req }) => {
  if (typeof window === "undefined") {
    // called from the server
    return axios.create({
      baseURL: constants.INGRESS_CONTROLLER,
      headers: req.headers,
    });
  } else {
    // called from the browser
    return axios.create({
      baseURL: "/",
    });
  }
};
export default buildClient;
