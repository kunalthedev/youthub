import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyDkoU-RIcFE4PubYk_5j8onp8WGkk9ShSc",
  },
});

export default request;
