//1
console.log('The quote "There is no exercise better for the heart than reaching down and lifting people up." by John Holmes teaches us to help one another.');

//3
console.log(typeof(10) === 10);
//4
console.log(parseFloat('9.8') == 10);

//5
console.log("python".includes('on') && "jargon".includes('on'));

//6
console.log("I hope this course is not full of jargon".includes('jargon'));

//7
console.log(Math.floor(Math.random() * 101))

//8
console.log(Math.floor(Math.random() * (100-50) + 50))

//9
console.log(Math.floor(Math.random() * 256))

//10
console.log("JavaScript".charAt(Math.floor(Math.random() * "JavaScript".length)));

//11
console.log(`
1 1 1 1 1 
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125
`
);

//12
var test = 'You cannot end a sentence with because because because is a conjunction';

console.log(test.replace("because because because" , ""))