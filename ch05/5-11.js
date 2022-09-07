var createCar = function () {
    var fuel = Math.ceil(Math.random()*10+10); //연료(L)
    var power = Math.ceil(Math.random()*3+2); //연비(km/L)
    var moved = 0;
    return {
        get moved () {
            return moved;
        },
        run: function () {
            var km = Math.ceil(Math.random()*6);
            var wasteFuel = km/power;
            if (fuel<wasteFuel) {
                console.log('이동불가');
                return;
            }
            fuel -= wasteFuel;
            moved += km;
            console.log(km + 'km 이동 (총 ' + moved + 'km). 남은 연료:' + fuel);
        }
    };
};
var car = createCar();

car.run(); //3km 이동(총 3km), 남은 연료: 17.4
console.log(car.moved); //3
console.log(car.fuel); //undefined
console.log(car.power); //undefined

car.fuel = 1000;
console.log(car.fuel); //1000
car.run(); //1km 이동(총 4km), 남은 연료: 17.2

car.power = 100;
console.log(car.power); //100
car.run(); //4km 이동(총 8km), 남은 연료: 16.4

car.moved = 1000;
console.log(car.moved); //8
car.run(); //2km 이동(총 10km), 남은 연료: 16