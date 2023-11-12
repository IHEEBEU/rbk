// Write your code here .....
function MakeCar(numberOfPasengers, maximumNumberPassangers, fuel, counter) {
	var instance = {};
	instance.numberOfPasengers = numberOfPasengers;
	instance.maximumNumberPassangers = maximumNumberPassangers;
	instance.fuel = fuel;
	instance.counter = counter;
	return instance;
}
function mount(car) {
	if (car.numberOfPasengers === 5) {
		return "no more space";
	}
	car.numberOfPasengers++;
}
function dismount(car) {
	if (car.numberOfPasengers === 0) {
		return "no one left";
	}
	car.numberOfPasengers--;
}
function run(car, howanymiles) {
	if (car.numberOfPasengers === 0) {
		return "no driver";
	}
	if (car.fuel - howanymiles / car.numberOfPasengers < 0) {
		return "no enough fuel";
	}
	car.counter += howanymiles;
	car.fuel -= howanymiles / car.numberOfPasengers;
}