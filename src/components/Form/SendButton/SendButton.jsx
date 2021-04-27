import './SendButton.css';


export function SendButton(){
    return(
        <div className="send-container">
            <button className="send" >Send</button>
        </div>
    )
}

// export function SendButtonHandle(){
//     let b = document.getElementsByClassName('input-field');
    
//     for(let i = 0; i < b.length; i++){
//         if(b[i].value == ""){
//             b[i].classList.add('input-field--selected');
//         } else if ((b[0].value !== "") && (b[1].value !== "") && 
//         (b[2].value !== "") && (b[3].value !== "")){
//             b[i].classList.remove('input-field--selected');
          
//         }
       
//     }

//      let c = document.querySelector('.success-message');
//                     console.log(c);

// }