//1
function fullName() {
    console.log("Palak Kanoongo")
}
console.log(fullName());

//2
function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
fullName("Palak", "Kanoongo");

//3
function addNumbers(x, y) {
    return x + y;
}
addNumbers(4, 6);

//4
function areaOfRectangle(length, width) {
    let area = length * width;
    return area;
}
areaOfRectangle(6, 8);

//5
perimeterOfRectangle = (length, width) => {
    let perimeter = 2 * (length * width);
    return perimeter;
}
perimeterOfRectangle(7, 2);

//6
volumeOfRectPrism = (length, width, height) => {
    let volume = length * width * height;
    return volume;
}
volumeOfRectPrism(3, 5, 7);

//7
AreaOfCircle = (r) => {
    const PI = 3.14;
    let area = PI * r * r;
}
AreaOfCircle(4);

//8
circumOfCircle = (r) => {
    const PI = 3.14;
    return PI * r
}
circumOfCircle(8);

//9
density = (mass, volume) => {
    return mass * volume;
}
density(3, 5);

//10
function speed(dis,time){
    return dis/time;
}
console.log(speed(3,4));

//11
function weight(mass , gravity){
    return mass*gravity;
}
console.log(weight(4,5));

//12
celsiusToFahrenheit = (celsius) => {
    let fahrenheit = (celsius * 9 / 5) + 32
    return fahrenheit;
}
celsiusToFahrenheit(7);

//13
BMI = (weight, height) => {
    let bmi = weight / (height / height);
    if (bmi < 18.5) {
        return `underweight`;
    } else if (bmi > 18.5 && bmi < 24.9) {
        return `overweight`;
    } else if (bmi > 25 && bmi < 29.9) {
        return `overweight`;
    } else {
        return `obese`;
    }
}
console.log(BMI(4, 7));

//14
checkSeasons = (month) => {
    switch (month) {
        case "september":
        case "october":
        case "November":
            console.log("the season is Autumn");
            break;
        case "december":
        case "january":
        case "febuary":
            console.log("the season is Winter");
            break;
        case "march":
        case "april":
        case "may":
            console.log("the season is Spring");
            break;
        case "june":
        case "july":
        case "august":
            console.log("the season is Summer");
            break;
        default:
            console.log("invalid Month")
    }
}
console.log(checkSeasons("june"));

//15
findMax = (a, b, c) => {
    return Math.max(a, b, c);
}
findMax(3, 2, 7);