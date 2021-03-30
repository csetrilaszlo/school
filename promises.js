// document.addEventListener('click', () => {
//     console.log('click');
// })

// setTimeout(() => {
//     console.log('time end');
// })

// const interval = setInterval(() => {
//     console.log('ping');
// }, 2000);


//we need to call
// function firstStep(){
//     setTimeout(() => {
//         console.log('End of first step');
//        secondStep(); 
//     }, 1000)
    
// }

// function secondStep(){
//     setTimeout(() => {
//         console.log('End of second step');
//         thirdStep();
//     }, 500);
// }

// function thirdStep(){
//     setTimeout(() => {
//         console.log('End of third step');
//     }, 500);
// }



// firstStep();


//Promises

function firstStep(number){
    return new Promise((resolve, reject) => {
        resolve(number + 1);
        setTimeout(() => {
                    console.log('End of first step');
                    
                    resolve(number + 3);
                }, 2000)
    });        
}


function secondStep(param){
    console.log(param);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('End of second step');
            if(param % 2 === 1){
                reject('We want even param');
            } else {
                resolve(param / 2);
            }
            
        }, 1000);
    });
}

function thirdStep(finalValue){
        setTimeout(() => {
            console.log('End of third step');
            console.log('Final value ', finalValue);
        }, 500);
    }

firstStep(1)
    .then(secondStep)
    .then(thirdStep)
    .catch((error) => {
        console.log(`Promise chain has the following error: ${error}`);
    })


// fetch example
fetch('https://simple-json-server-scit.herokuapp.com/posts')
    .then((response) => {
        return response.json();
    })
    .then(json => {
        console.log(json);
    })
    .catch((error) => {
        console.log(error)
    });