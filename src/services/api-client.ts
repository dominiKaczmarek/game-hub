import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0719c49088744961b5dd2813e1990587",
  },
});
