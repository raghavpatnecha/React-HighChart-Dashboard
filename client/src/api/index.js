import axios from "axios";
//
const url = "http://localhost:5000/api/advspentroutes/";

//
export const getAdvertisementSpent = () => axios.get(url);
export const postAdvertisementSpent = (formData) => axios.post(url, formData);
export const updateAdvertisementSpent = (id, formData) => axios.put(`${url}/${id}`, formData);
export const deleteAdvertisementSpent = (id) => axios.delete(`${url}/${id}`);