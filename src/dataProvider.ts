import { fetchUtils } from "react-admin";
//@ts-ignore
import lb4Provider from 'react-admin-lb4';
import { LoginRS } from "./request/types";

export const apiUrl = import.meta.env.VITE_BASE_URL_API || 'http://localhost:3000';

export const dataProvider = lb4Provider(apiUrl, () => {
  const auth = JSON.parse(localStorage.getItem('auth') || '{}') as LoginRS;
  const token = auth.token;
  return { Authorization: `Bearer ${token}` };
});