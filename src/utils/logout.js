export function logout() {
    localStorage.removeItem("name");
    localStorage.removeItem("password");
    localStorage.removeItem("breed");
    localStorage.removeItem("index");
    window.location = "/login.html";
    
    }
    

        
    
  