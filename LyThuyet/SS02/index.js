const arrNames = ["Phúc", "Nghia", "Minh", "Huy", "Tính"];
for(let i = 0; i < arrNames.length; i++) {
    // console.log(arrNames.length);
    console.log(arrNames[i]);
}

console.log(arrNames);
console.log(arrNames[4]);
console.log(arrNames.length);

//Cách 2: Sử dụng từ khoá new
const arrNames2 = new Array(10);
console.log(arrNames2);
arrNames2[0] = "Phúc";
arrNames2[1] = "Nghia";
arrNames2[2] = "Minh";
arrNames2[3] = "Huy";
arrNames2[4] = "Tính";
console.log(arrNames2);
arrNames2[1] = "Hieu";
console.log(arrNames2);

const arrNumbers = [1, 2, 3, 4, 5, 6, 10, 12, 23, 24, 45, 67, 89, 100];
const [a, b, c, ...rest] = arrNumbers;
console.log(a, b, c, rest);


const nameList = ["Hieu", "Minh", "Nghia", "Nam", "May", "Phat"];
const [hieu, ...classmates] = nameList;
for (const member of classmates) {
    console.log(member);
} 

let fruits = ["apple", "banana", "cherry"];
fruits.push("orange");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift("apple2");
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 2, "orange2");
console.log(fruits);

let arr = [1, 2, 3];
let newArr = arr.map(function(item) {
    return item * 10;
});
console.log(newArr);

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNums = nums.filter(function(item) {
    return item % 2 === 0;
});
console.log(evenNums);

const numbers = [5, 10, 15, 20, 25];
const found = numbers.find(function(item) {
    return item > 15;
});
console.log(found);

numbers.splice(2, 0, 6, 7);
console.log(numbers);

numbers.splice(2);
console.log(numbers);

const numbers3 = [5, 12, 8, 130, 44];
const index = numbers3.findIndex(function(item) {
    return item > 10;
});
console.log(index);

//object

const person = {
    name: "John",
    age: 20,
    job: "Developer"
};

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.job);
person.name = "Phúc";
console.log(person);
delete person.job;
console.log(person);

for(const key in person) {
    console.log(key, person[key]);
}

const obj = {a:1, b:2, c:3};
console.log(Object.keys(obj));
console.log(Object.values(obj));

const obj1 = {a:1};
const obj2 = {b:2};
const mergedObj = Object.assign({},obj1, obj2);
console.log(mergedObj);

const arr1 = [1, 2, 3];
const arr2 = [...arr1];
console.log(arr2);

const obj3 = {name: "John", age: 20};
const obj4 = {job: "Developer"};
const mergedObj2 = {...obj3, ...obj4};
console.log(mergedObj2);




