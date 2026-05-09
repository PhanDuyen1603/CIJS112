

// const price = 100000;
// const formatPrice = Number(10000).toLocaleString()

//nonal function
export function greet(name, age, city) {
    return `Hello ${name}, you are ${age} years old and you live in ${city}`;
}

export const sum = (a, b) => {
    return a+b;
}

export const sum2 = (a, b) => a+b;

export function sum3(...args) {
    console.log(args);
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
    // return a+b+c+d+e+f+g+h;
}