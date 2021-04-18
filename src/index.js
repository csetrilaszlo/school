import { getItem } from "./utils/app";
import { handleLogin } from "./utils/handleLogin";
import { logout } from "./utils/logout";



let clickLogin = document.getElementById('login');
if(clickLogin){
  clickLogin.addEventListener('click', handleLogin, false);
 
}


let clickLogout = document.getElementById('logout');
if(clickLogout){
  clickLogout.addEventListener('click', logout, false);
 
}
 

getItem();
  


