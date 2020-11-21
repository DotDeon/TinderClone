import axios from "axios";

const instanse = axios.create({
  baseURL: "https://minder-1.herokuapp.com",
});

export default instanse;
