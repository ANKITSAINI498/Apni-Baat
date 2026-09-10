export const loadState=(key,fallback)=>{try{const v=localStorage.getItem(key);return v?JSON.parse(v):fallback}catch{return fallback}};
export const saveState=(key,value)=>{try{localStorage.setItem(key,JSON.stringify(value));return true}catch{return false}};
