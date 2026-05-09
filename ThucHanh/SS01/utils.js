//Bai 01
export function productInfo(name, price) {
    const formatPrice = Number(price).toLocaleString()
    return `San pham: ${name}, Gia: ${formatPrice} VNĐ`
}

//Bai 02
export function greet(name) {
    return `Xin chao ${name}`;
}

//Bai 03
export function sumUpTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

//Bai 04
export function square(number) {
    return number * number;
}

//bai 05
export function isEven(number) {
    return number % 2 === 0;
}

//bai 06
export function firstElement(array) {
    return array[0];
}

//bài 7
export function sum1(...number) {
    return number.reduce((acc, curr) => acc + curr, 0);
}

//bài 8
export function tachGiaTri(user) {
    return `Name: ${user.name}, Age: ${user.age}`;
}

//Bai 09
export function joinNames(people) {
    return Array.isArray(people) ? people.map(person => person.name).join(", ") : "";
}

//Bai 10
export function stringLength(string) {
    let cnt = 0;
    for (const char of string) {
        cnt++;
    }
    return cnt;
}

//Bai 11
export function toUpperCase(str) {
    return str.toUpperCase();
}