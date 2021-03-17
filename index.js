console.log('JavaScript Object Oriented Programming');


const car = {
    nrOfWheel: 4,
    color: 'red',
    engine: 'diesel',
    runningEngine: false,
    turn: function(direction) {
        if(this.runningEngine){
            console.log('The car is turning ', direction);
        } else {
            console.log('The car is not running, turn the engine on');
        }
        
    },
    startEngine : function() {
        //console.log(this);
        console.log('The engine is starting');
        this.runningEngine = true;
    }
};

const car2 = {
    nrOfWheel: 4,
    color: 'white',
    engine: 'electric',
    runningEngine: false,
    turn: function(direction) {
        if(this.runningEngine){
            console.log('The car is turning ', direction);
        } else {
            console.log('The car is not running, turn the engine on');
        }
        
    },
    startEngine : function() {
        //console.log(this);
        console.log('The engine is starting');
        this.runningEngine = true;
    }
};
//this -reprezinta obiectul curent
car.startEngine();

// const func = car.startEngine;
// func();

car.turn('left');
car.startEngine();
car.turn('left');

//Classes

class Car {
    constructor(color, engine) {    //aduci metode
        this.__nrOfWheel = 4;
        this.color = color;
        this.engine = engine;
        this.runningEngine = false;
    }
    turn(direction){
        if(this.runningEngine){
            console.log('The car is turning ', direction);
        } else {
            console.log('The car is not running, turn the engine on');
        }
    }
    startEngine() {
         //console.log(this);
         console.log('The engine is starting');
         this.runningEngine = true;
    }
}

class Bike{

}


const car3 = new Car('yellow', 'hibrid');
const car4 = new Car('pink', 'petrol');
console.log(car3);
console.log(car3.color);
car3.startEngine();
console.log(car3);
car3.color = 'green';

console.log(car4);

console.log(Car.color);// clasele nu au atribute
car4.nrOfDoors = 2; // adaugare clasa
console.log(car4);
console.log(car3);

let vehicle;
const typeOfVehicle = 'car';
if((typeOfVehicle === 'car')){
    vehicle = new Car();
}else {
    vehicle = new Bike();
}

//class Bike {}

document.getElementById('generate-car').addEventListener('click', () => {
    console.log('Generate Car');
    const newCar = new Car();
});