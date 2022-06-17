const dog={}
console.log(dog)


dog.name='coco';
dog.legs=4;
dog.color='brown';

dog.bark=function(){
    return ' woof woof';
}

console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.bark());

dog.breed='schitzo';
dog.getDogInfo=function(){
    let statement=`I am ${this.name}. My color is ${this.color}. I belong to ${this.breed} family.`
    return statement;
}

console.log(dog.getDogInfo());