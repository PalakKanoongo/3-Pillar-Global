//1
//loop 0-10
//for-loop
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

//while-loop
let j = 0;
while (j < 10) {
    j++;
    console.log(j);
}

//do-while
let i = 0;
do {
    i++;
    console.log(i)
} while (i < 10)

//2
//loop 10-0
//for-loop
for (let i = 10; i >= 0; i--) {
    console.log(i);
}

//while-loop
let k = 10;
while (k > 0) {
    k--;
    console.log(k)
}

//do-while loop
let x = 10;
do {
    x--;
    console.log(x)
} while (x > 0)

//3
let n = Number(prompt("enter number"));
for (let i = 0; i <= n; i++) {
    console.log(i);
}
//4
let space = "";
for (let i = 0; i < 7; i++) {
    space += "#";
    console.log(space)
}

//5 multiplcation
for (let i = 0; i <= 10; i++) {
    console.log(`${i} x ${i} = ${i * i}`)
}

//6 power of 2,3
for (let i = 0; i <= 10; i++) {
    console.log(`${i} ${i ** 2} ${i ** 3}`)
}

// 7 print even numbers from 0-100;
for (i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

//8 print odd numbers
for (i = 0; i <= 100; i++) {
    if (i % 2 > 0) {
        console.log(i)
    }
}

//9 print prime numbers
for (let i = 0; i <= 100; i++) {
    for (let k = 2; k < i; k++) {
        if (i % k === 0 && i > 1) {
            console.log(i)
        }
    }
}

//10 sum of all numbers
let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
}
console.log(sum)

//11 sum of all even and odd
let even = 0;
let odd = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        even += i;
    } else if (i % 2 > 0) {
        odd += i
    }
}
console.log(`the sum of all even number is ${even}. And the sum of all odd numbers is ${odd}`)

console.log(sumEvenOdd)

//12 array of five random numbers
let randomArr = [];
for (let i = 0; i < 5; i++) {
    randomArr.push(Math.floor(Math.random() * 10));
}
console.log(randomArr)

//13 generating random unique arr
let randomUniqueArr = [];
for (let i = 5; randomUniqueArr.length < i;) {
    let random = Math.floor(Math.random() * 10);
    if (randomUniqueArr.indexOf(random) === -1) {
        randomUniqueArr.push(random);
    }
}
console.log(randomUniqueArr)

//14 generate 6 random numbers/strings
let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
let randomC = ""
for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * chars.length);
    randomC += chars[random];
}
console.log(randomC)



