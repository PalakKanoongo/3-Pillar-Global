//1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

ages.sort();
let maxAge=ages[ages.length-1];
console.log("min age:"+ ages[0]);
console.log("max age: "+ maxAge)


console.log("Median: "+ ages[Math.floor(ages.length / 2)])

let avg=0;
let total = 0;
for (i = 0; i < ages.length; i++) {
    total += ages[i];
    avg = total / ages.length;
}

console.log("Average: "+avg);

let var2=maxAge- ages[0]
console.log("range: "+ var2);


let check = abs(ages[0]- avg);
let check1 = abs(maxAge - avg);
console.log(check);
console.log(check1);
