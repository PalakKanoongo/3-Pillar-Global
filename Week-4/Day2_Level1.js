//1
var challenge = '30 Days Of JavaScript';

//2
console.log(challenge);

//3
console.log(challenge.length);

//4
challenge = challenge.toUpperCase();
console.log(challenge);

//5
challenge = challenge.toLowerCase();
console.log(challenge);

//6
challenge = challenge.substr(3);
console.log(challenge);

//7
challenge = '30 Days Of JavaScript';
challenge = challenge.substr(0,2);
console.log(challenge);

//8
challenge = '30 Days Of JavaScript';
console.log(challenge.includes('Script'));

//9
challenge = challenge.split(' ');
console.log(challenge);


var test = 'Facebook , Google , Microsoft , Apple , IBM , Oracle , Amazon';

test = test.split(' , ');
console.log(test);

//12
challenge = '30 Days Of JavaScript';
console.log(challenge.replace('JavaScript', 'Python'))

//13
console.log(challenge.charAt(15));

//14
console.log(challenge.charCodeAt('J'));

//15
console.log(challenge.indexOf('a'));

//16
console.log(challenge.lastIndexOf('a'));

test = 'You cannot end a sentence with because because because is a conjunction';

console.log(test.lastIndexOf('because'));

console.log(test.search('because'));

//20
console.log(challenge.trim());

//21
console.log(challenge.startsWith('3'));

//22
console.log(challenge.endsWith('t'));

//23
console.log(challenge.match('a'));

//24
console.log(challenge.repeat(2));