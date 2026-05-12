import { sumArray, countOccurences, removeDuplicates, flattenArray, isSymmetric, findSecondLargest, sortProductsByPrice, findMostExpensiveProduct, groupByType, findMaxKey, mergeObjectsSumValues, countElements, isSubset } from "./utils.js";

const numbers = [1, 2, 3, 4, 5, 3, 3, 3, 3, 3, 4, 3];
const nestedArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const symmetricArray = [1, 2, 3, 2, 1, 2, 3, 4];
const products = [
    {name: "Product 1", price: 100},
    {name: "Product 2", price: 200},
    {name: "Product 3", price: 300},
    {name: "Product 4", price: 400},
    {name: "Product 5", price: 500},
];
const items = [
    {name: "Product 1", type: "Electronics"},
    {name: "Product 2", type: "Clothing"},
    {name: "Product 3", type: "Electronics"},
    {name: "Product 4", type: "Clothing"},
    {name: "Product 5", type: "Electronics"},
];
const arr = ['a', 'b', 'a', 'c', 'b', 'a'];
const obj1 = { a: 10, b: 20, c: 15, d: 25 };
const arr1 = [1, 2, 3, 4];
const arr2 = [2, 4];
const obj2 = { d: 25, e: 30, f: 15 };
const obj = { a: 10, b: 20, c: 15 };
console.log(sumArray(numbers));
console.log(countOccurences(numbers, 3));
console.log(removeDuplicates(numbers));
console.log(flattenArray(nestedArray));
console.log(isSymmetric(symmetricArray));
console.log(findSecondLargest(numbers));
console.log(sortProductsByPrice(products));
console.log(findMostExpensiveProduct(products));
console.log(groupByType(items));
console.log(findMaxKey(obj));
console.log(mergeObjectsSumValues(obj1, obj2));
console.log(countElements(arr));
console.log(isSubset(arr1, arr2));