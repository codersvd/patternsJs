class Car {
    start(){
        console.log( "The engine starts with roar" );
    }
    drive(){
        console.log( "Away we go" );
    }
    getPrice(){
        return 95000.00;
    }
}

class CarDecor {
    constructor(car){
        this.car = car;
    }
    start(){
        this.car.start();
    }
    drive(){
        this.car.drive();
    }
    getPrice(){
        return this.car.getPrice();
    }
}

class PowerLocksDecor extends CarDecor{
    constructor(car){
        super(car);
    }
    
    drive(){
        this.car.drive();
        console.log( "The doors automatically lock" );
    }
}

class PowerWindowsDecor extends CarDecor{
    constructor(car){
        super(car);
        console.log( "Add power  windows" );
    }
}

class ACDDecor extends CarDecor {
    constructor(car){
        super(car);
    }
    start(){
        this.car.start();
        console.log( "The cool air starts blowing" );
    }
    getPrice(){
        return this.car.getPrice()+1000;
    }
}


//How do uses

let car = new Car();

car = new PowerWindowsDecor(car);
car = new PowerLocksDecor(car);
car = new ACDDecor(car);

car.start();
car.drive();
console.log( car.getPrice() );