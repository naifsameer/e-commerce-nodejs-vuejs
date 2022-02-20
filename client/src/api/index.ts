import axios from 'axios';

const API_URL : string = import.meta.env.VITE_API_URL as string;

const api = axios.create({ baseURL: API_URL });

const getProducts = () => api.get('/products');

export { getProducts };
