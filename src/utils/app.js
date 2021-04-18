export async function getItem(){
    const one = document.getElementById('image-dog');
    const response = await fetch('https://dog.ceo/api/breeds/list/all');
    const data = await response.json();
      
      //console.log(data);
      for(const i in data.message){
          const div = document.createElement('div');
          const p = document.createElement('button');
          
          
          p.addEventListener('click', async function()  {
            document.getElementById('page-number').innerText = '1';
            p.setAttribute('id', 'current');
            
            
            
          
              
              let j = 0;
              if(document.getElementById('current')){
                
              const response = await fetch(`https://dog.ceo/api/breed/${i}/images`);
              const data2 = await response.json();
              const imageContainer = document.getElementById('images-container');
              const imageOne = document.getElementById('image-breed');
              let images = data2.message[j];
               
              //console.log(images);
              let a = 1;
              SetLocalStorage();
               
               
               
              
                 
                  
                
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
              function SetLocalStorage(){
              const breed = `${i}`;
              const index = `${a}`;
              localStorage.setItem("breed", `${i}`);
              localStorage.setItem("index", `${a}`);
              }  
              
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