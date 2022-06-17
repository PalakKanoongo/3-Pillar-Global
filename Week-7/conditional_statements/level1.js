//1
let age = Number(prompt("enter age"));
if (age > 18) {
    console.log("You are old enough to drive")
} else {
    console.log(`You are left with ${18-age} year(s) to drive`)
}

//2
let yourAge = 30;
if (age > yourAge) {
    console.log(`i'm older than you with ${age - yourAge}`)
} else {
    console.log(`you are ${yourAge - age} years older than me`)
}

//3
//using ifelse
let a = 4;
let b = 3;
if (a > b) {
    console.log("a is greater than b");
} else {
    console.log("a is less than b");

}
//ternary
(a > b) ? console.log("a is greater than b"): console.log("a is less than b");

//4 even or odd
let x=34;
if(x%2==0){
    console.log(`${x} is even.`);
}
else{
    console.log(`${x} is odd.`);
}