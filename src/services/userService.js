import {api} from './api';
export async function fetchUser(id){try{const r=await api.get(`/users/${id}`);return r.data}catch{return null}}
