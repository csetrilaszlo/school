import { SetLocalStorage } from "./localStorage";




console.log("JavaScript - Dogs App");




if (!localStorage.getItem("name") || !localStorage.getItem("password")) {
  window.location = "/login.html";
  console.log('Working');
}

//Getting the data 
export async function getItem(){
  const one = document.getElementById('image-dog');
  const response = await fetch('https://dog.ceo/api/breeds/list/all');
  const data = await response.json();
  //Creating buttons
    //console.log(data);
    for(const i in data.message){
        const div = document.createElement('div');
        const p = document.createElement('button');
        
        
        p.addEventListener('click', async function engine()  {
          document.getElementById('page-number').innerText = '1';
          p.setAttribute('id', 'current'); 
          let j = 0;
          //Selecting the actual dog breed
          if(document.getElementById('current')){
              
          const response = await fetch(`https://dog.ceo/api/breed/${i}/images`);
          const data2 = await response.json();
          const imageContainer = document.getElementById('images-container');
          const imageOne = document.getElementById('image-breed');
          let images = data2.message[j];
             
          //console.log(images);
          let a = 1;
          SetLocalStorage();
          //Adding functionality to forward button
          document.getElementById('forward').addEventListener('click', () => {
               if(a > (a + 1)){
                 a = 1;
                pageNumber.innerText = `${a}`;
                 console.log(a.length);
               } else {
              a = a + 1;
               
              document.getElementById('breed-image').src = data2.message[a];
               
              const pageNumber = document.getElementById('page-number');
              pageNumber.innerText = `${a}`;
              SetLocalStorage();

               }
             })
             //Adding functionality to backward button
             document.getElementById('backward').addEventListener('click', () => {
              if(a < 1){
                
               document.getElementById('page-number').innerText = 1;
             
              } else {
                
              a = a - 1;
              document.getElementById('breed-image').src = data2.message[a];
                
                const pageNumber = document.getElementById('page-number');
               // console.log(a);
                 pageNumber.innerText = `${a}`;
                 SetLocalStorage();
              }
              
            })
            SetLocalStorage();
            //Setting the actual breed, index number to local storage
            // function SetLocalStorage(){
            // const breed = `${i}`;
            // const index = `${a}`;
            // localStorage.setItem("breed", `${i}`);
            // localStorage.setItem("index", `${a}`);
            // }  
            
                document.getElementById('breed-image').src = `${images}`;
              
            }
          
        })
        p.style.background = 'white';
        p.style.border = "0px solid white";
        
        const breeds = document.getElementById('breeds');
        //console.log(p);
     
        div.appendChild(p);
        breeds.appendChild(div);
        p.innerText = i; 
    }
}
getItem();

//Removing the local storage data when logout
document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("name");
  localStorage.removeItem("password");
  localStorage.removeItem("breed");
  localStorage.removeItem("index");
  window.location = "/";
});
