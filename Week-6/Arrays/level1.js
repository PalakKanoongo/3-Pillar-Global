//1 empty array
const arr=[];

//2,3,4
const arr1=[1,2,3,4,5,6,7];
console.log(arr1.length);
console.log(arr1[0])  //first item
let mid=(arr1.length -1)/2;
console.log(arr1[mid])

const lastIndex= arr1.length -1
console.log(arr1[lastIndex]);

//5
const arr2=[0,'red',3.5,true,{name:'rohan', class:'4th'},'car',false]
console.log(arr2);

//6,7,8
const itCompanies= ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompanies);
console.log(itCompanies.length)

//9
console.log(itCompanies[0])
let midd=(arr1.length -1)/2;
console.log(itCompanies[midd])

const lastIndex1= itCompanies.length -1
console.log(itCompanies[lastIndex1]);

//10
itCompanies.forEach(element => {
    console.log(element)
});

//11
itCompanies.forEach(element => {
    console.log(element.toUpperCase())
});

//12
console.log(itCompanies.join()+" are big IT companies.")

//13
if(itCompanies.includes('Facebook')){
    console.log('Facebook')
}
else{
    console.log('Not found')
}

//14
let check = []
for (let i = 0; i < itCompanies.length; i++) {
    check.push(itCompanies[i].includes("oo"));
}
console.log(check)

//15,16
console.log(itCompanies.sort())
console.log(itCompanies.reverse())

//17-23
console.log(itCompanies.slice(0, 3));
console.log(itCompanies.slice(itCompanies.length - 1, 3));
console.log(itCompanies.slice(Math.floor(itCompanies.length / 2), 1));
console.log(itCompanies.pop());
console.log(itCompanies.shift())
console.log(itCompanies.splice(Math.floor(itCompanies.length / 2), 1))
console.log(itCompanies.splice())

