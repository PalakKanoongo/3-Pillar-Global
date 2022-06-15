//1
//area of a triangle
let base = Number(prompt("enter base of the triangle"));
let height = Number(prompt("enter height of the triangle"));
let area = 0.5 * base * height;
console.log(`the area of the triangle is ${area}`);

//2
//perimeter of a triangle
let A = Number(prompt("enter side A of the triangle"));
let B = Number(prompt("enter side B of the triangle"));
let C = Number(prompt("enter side C of the triangle"));
let perimeter = A + B + C;
console.log(`the perimeter of the triangle is ${perimeter}`)

//area and perimeter of a rectangle
let length = Number(prompt("enter length of the rectangle"));
let width = Number(prompt("enter width of the rectangle"));
let areaOfRectangle = length * width;
let perimeterOfRectangle = 2 * (length + width);
console.log(`the area of the rectangle is ${areaOfRectangle} while the perimeter is ${perimeterOfRectangle}`)


//area and circumference of a circle
const pi = 3.14
let radius = Number(prompt("enter radius of a circle"));
let areaOfCircle = pi * radius * radius;
let circumference = 2 * pi * radius;
console.log(`the area of the circle is ${areaOfCircle} while the circumference is ${circumference}`)

//9
//pay of a person
let hours = Number(prompt("enter your hours"));
let rate = Number(prompt("enter your rate"));
let pay = hours * rate;
console.log(`your pay is ${pay}`)

//name short or long
let name= " Palak"
if(name.length<7){
    console.log(" Name is short")
}else{
    console.log("Name is long")
}
//number of seconds a person has live
let secondsInseconds = 60;
let secondsInHour = secondsInseconds * 60;
let secondsInDay = secondsInHour * 24;
let secondsInYear = secondsInDay * 365;
let yearsLive = Number(prompt("how many years have you live?"));
let secondsOld = yearsLive * secondsInYear;
console.log(`you are ${secondsOld} seconds olds`)

//truthy and falsy
let truthy = [true, "Rizu", 3];
let falsy = [false, undefined, null];

//ternary operator
const firstName = "Palak"
const lastName = "Kanoongo"
firstName.length > lastName.length ? console.log(`your first Name is greater than your family name`) : console.log(`your last name is greater than your name`);

//allowed to drive
let age = Number(prompt("what is your age"));
if (age > 18) {
    console.log("you are allowed to drive");
} else {
    console.log(`you are ${age}, you will be allowed to dr ive after ${18 - age} years`)
}