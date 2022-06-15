let date = new Date();
//year
console.log(`year:${date.getFullYear()}`);
//month
console.log(`year:${date.getMonth()}`);
//date
console.log(`year:${date.getDate()}`);
//day
console.log(`year:${date.getDay()}`);
//hours
console.log(`year:${date.getHours()}`);

//minutes
console.log(`year:${date.getMinutes()}`)

//seconds
console.log(`year:${date.getSeconds()}`);
let YYYMMDD = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`
let DDMMYYYY = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()} ${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`
let DdMmYYy = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`

//prints the readable format
console.log(YYYMMDD);
console.log(DDMMYYYY);
console.log(DdMmYYy);