//import { handleLogin } from "./utils/handleLogin";
import { getItem } from "./utils/app";
import { logout } from "./utils/logout";


//handleLogin();

// let clickLogin = document.getElementById('login');
// if(clickLogin){
//   clickLogin.addEventListener('click', handleLogin, false);
 
// }

getItem();


document.getElementById('logout').addEventListener('click', logout);
// let clickLogout = document.getElementById('logout');
// if(clickLogout){
//   clickLogout.addEventListener('click', logout, false);
 
// }
 


  


