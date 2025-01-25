class Car {
  constructor({ maxSpeed, price }) {
    this.maxSpeed = maxSpeed; 
    this.price = price; 
    this.isOn = false; 
  }
  get price() {
    return this._price;
  }
  set price(newPrice) {
    this._price = newPrice;
  }
  turnOn() {
    this.isOn = true;
  }
  turnOff() {
    this.isOn = false;
    this.speed = 0; 
  }
  accelerate(value) {
    this.speed = Math.min(this.speed + value, this.maxSpeed);
  }
  static getSpecs(car) {
    console.log(
      `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, price: ${car.price}`
    );
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });
mustang.turnOn();
Car.getSpecs(mustang);
mustang.turnOff();
Car.getSpecs(mustang);
console.log(mustang.price); 
mustang.price = 4000;
console.log(mustang.price); 