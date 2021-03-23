class Car {
    engine;

    constructor (engine) {
        this.engine = engine;

        console.log('一辆新的汽车');
    }

    drive () {
        console.log('haha~')
    }
}


// const c1 = new Car ('v8');
// c1.drive ();
// console.log(c1);

class PickupTruck extends Car {}

const p1 = new PickupTruck ('v9');

p1.drive();

console.log(p1);