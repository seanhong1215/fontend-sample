import axios from 'axios';

const baseRequest = axios.create({
  baseURL: `${import.meta.env.VITE_API}`,
});

export const apiData = () => baseRequest.get('5fd5b0a0-7cec-4ccf-bdec-b9c99c78e29f');
