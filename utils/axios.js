import axios from "axios";

const instance = axios.create({
  baseURL: "https://fastdbaccess.vercel.app/api",
  // baseURL:
  //   process.env.NODE_ENV === "development"
  //     ? "http://localhost:3000/api"
  //     : process.env.URL,
});

export default instance;
