'use strict'
function Transport(vehicleType, fuelType, power) {
  this.vehicleType = vehicleType;
  this.fuelType = fuelType;
  this.power = power;
}
Transport.prototype.fullName = function () {
    return this.vehicleType + ' | '+ this.fuelType + ' | ' + this.power;
}

function Plane(vehicleType, fuelType, power, cabinWidth, wingLength) {
  console.log(arguments);
  Transport.apply(this,arguments);
  this.wingLenth = wingLength;
  this.cabinWidth = cabinWidth;
}
Plane.prototype.wingspan = function () {
  return this.wingLenth*2 + this.cabinWidth
}

function Car(vehicleType, fuelType, power, cabinType){
  Transport.apply(this,arguments);
  console.log(arguments);
  this.cabinType = cabinType;
}
let golfstreamF500 = new Plane('plane', 'kerosene', 3000, 3, 31);
golfstreamF500.power = 4200;
let dodgeRam = new Car('car', 'diesel', 245, 'pickup');
dodgeRam.fuelType = 'gas';
