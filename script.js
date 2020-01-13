'use strict'
function Transport(vehicleType, fuelType, power) {
  this.vehicleType = vehicleType;
  this.fuelType = fuelType;
  this.power = power;
  }
Transport.prototype.fullName = function () {
    return 'type: ' + this.vehicleType + ' | '
    + 'fuel :' + this.fuelType + ' | '
    + 'power :' + this.power + ' Hp';
}

function Plane(vehicleType, fuelType, power, cabinWidth, wingLength) {
  console.log(arguments);
  Transport.apply(this,arguments);
  this.wingLenth = wingLength;
  this.cabinWidth = cabinWidth;
}
Plane.prototype.wingSpan = function() {
  let wn =  this.wingLenth*2 + this.cabinWidth
  return wn;
}
// let x = (Plane.prototype.wingSpan();
Plane.prototype.localTitle = function() {
  return 'type: ' + this.vehicleType + ' |'
  + 'fuel :' + this.fuelType + ' |'
  + 'power :' + this.power + ' Hp' + ' |'
  + 'wingspan :' + (this.wingLenth*2 + this.cabinWidth) + ' m';
}

function Car(vehicleType, fuelType, power, cabinType) {
  Transport.apply(this,arguments);
  console.log(arguments);
  this.cabinType = cabinType;
}
let ICE = new Transport ('train', 'electricity', 2400);
console.log(ICE.fullName());

let golfstreamF500 = new Plane('plane', 'kerosene', 3000, 3, 31);
golfstreamF500.power = 4200;

console.log(golfstreamF500.localTitle());

let dodgeRam = new Car('car', 'diesel', 245, 'pickup');
dodgeRam.fuelType = 'gas';
