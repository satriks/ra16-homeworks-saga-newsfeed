import axios from "axios";

export const getPostApi = () => {
  return axios.get(import.meta.env.VITE_HOST).then((response) => response.data);
};

export const getMorePostApi = (id: string) => {
  return axios
    .get(import.meta.env.VITE_HOST, { params: { lastSeenId: id } })
    .then((response) => response.data);
};
