class Car{
    constructor(make, model, year){
        this.make=make;
        this.model=model;
        this.year=year;

    }
getDescription(){
    console.log( this.year + " " + this.make + " " + this.model) 
}
}
const car1 = new Car("Toyota", "Camry", 2021);
console.log(car1.getDescription()); // "2021 Toyota Camry"
