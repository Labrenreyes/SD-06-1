function Car(make, model, year, color, doors, mileage, fuelType) {
  this.make = make
  this.model = model
  this.year = year
  this.color = color
  this.doors = doors
  this.mileage = mileage
  this.fuelType = fuelType  // por ejemplo: "combustión" o "eléctrico"

  this.printCar = function() {
    console.log(`Auto: ${this.make} ${this.model} (${this.year}), Color: ${this.color}, Puertas: ${this.doors}, Km: ${this.mileage}, Tipo: ${this.fuelType}`)
  }
}


const myCar = new Car("Toyota", "Corolla", 2001, "rojo", 4, 15000, "combustión")
myCar.printCar()

