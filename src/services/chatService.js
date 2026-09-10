import {api} from './api';
import data from '../data/chatData.json';
export async function fetchChats(){try{const r=await api.get('/chats');return r.data}catch{return {data,offline:true}}}
