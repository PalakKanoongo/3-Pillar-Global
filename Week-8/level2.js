//3
printArr = (arr) => {
    arr.forEach(function (ar) {
        console.log(ar);
    })
}
printArr([3, 4, 5])

//4
showDateTime = () => {
    let date = new Date();
    let datee = date.getDate();
    let month = date.getUTCMonth();
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    return `${datee}/${month + 1}/${year} ${hour}:${minutes} `
}
showDateTime();

//5
swapValues = (a, b) => {
    let x = b;
    let y = a;
    console.log(x, y)
}
swapValues(2, 4)

//6
reverseArr = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.unshift(arr[i]);
    }
    console.log(newArr);
}
console.log(reverseArr([3, 4, 5]))

//7
capitalizeArr = (arr) => {
    let newArr = [];
    arr.forEach(function (ar) {
        newArr.push(ar.toUpperCase());
    })
    return newArr;
}
capitalizeArr(["palak", "kanoongo"]);

//8
removeitem = (index) => {
    let names = ["john", "mike"]
    names.splice(index);
    return names
}
removeitem(1);

//10
sumOfNumbers = (...args) => {
    let sum = 0;
    args.forEach(function (arg) {
        sum += arg
    })
    return sum;
}
sumOfNumbers(5, 7, 2, 9)

//11
sumOfEven = (...args) => {
    let evenSum = 0;
    args.forEach(function (arg) {
        if (arg % 2 === 0) {
            evenSum += arg
        }
    })
    return evenSum;
}
sumOfEven(4, 3, 2, 1)

//12
sumOfOdd = (...args) => {
    let oddSum = 0;
    args.forEach(function (arg) {
        if (arg % 2 === 0) {
            oddSum += arg
        }
    })
    return oddSum;
}
sumOfOdd(1, 2, 3, 4)

//13
evenAndOdds = (num) => {
    let odd = 0;
    let even = 0;
    for (let i = 0; i <= num; i++) {
        if (i % 2 === 0) {
            even++
        } else if (i % 2 !== 0) {
            odd++
        }
    }
    return `the number of odds are ${odd} \n the number of even are ${even}`
}
evenAndOdds(100)

generateUserId = () => {
    let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    let userId = "";
    for (let i = 0; i <= 7; i++) {
        userId += chars[Math.floor(Math.random() * chars.length)];
    }
    return userId;
}
console.log(generateUserId());