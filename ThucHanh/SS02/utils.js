
//Bai 01
export function sumArray(arr) {
    let sum = 0;

    for (let num of arr) {
        sum += num;
    }
    return sum;
}

//Bai 02
export function countOccurences(arr, value) {
    let count = 0;
    for (let num of arr) {
        if (num === value) {
            count++;
        }
    }
    return count;
}

//Bai 03
export function removeDuplicates(arr) {
    return [...new Set(arr)];
}

//Bai 04
export function flattenArray(arr) {
    return arr.flat();
}

//Bai 05
export function isSymmetric(arr) {
    const reversedArr = [...arr].reverse();
    return arr.join() === reversedArr.join();
}

// Bai 06
export function findSecondLargest(arr) {
    arr.sort((a, b) => b - a);
    return arr[1];
}

//Bai 7
export function sortProductsByPrice(products) {
    return [...products].sort((a, b) => a.price - b.price);
}

// Bài 8
export function findMostExpensiveProduct(products) {
    let mostExpensiveProduct = products[0];

    for (let product of products) {
        if (product.price > mostExpensiveProduct.price) {
            mostExpensiveProduct = product;
        }
    }

    return mostExpensiveProduct;
}

//Bai 9
export function groupByType(arr) {
    const out = {};
    for (let item of arr) {
        if (!out[item.type]) {
            out[item.type] = [];
        }
        out[item.type].push(item.name);
        console.log("item:", item, "| out:", out);
    }
    return out;
}


// //Bài 10 
// export function isSubset(sub, main) {
//     for (let i = 0; i < main.length - sub.length; i++) {
//         let check = true;
//         for (let j = 0; j < sub.length; j++) {
//             if (main[i + j] !== sub[j]) {//
//                 check = false;
//                 break;
//             }
//         }
//         if (check) {
//             return true;
//         }
//     }
//     return false;
// }

//Bài 10
export function isSubset(arr1, arr2) {
    return arr2.every(item => { return arr1.includes(item) });
}


//Bai 11
export function findMaxKey(obj) {
    let maxKey = null;
    let maxValue = -Infinity;
    for (let key in obj) {
        if (obj[key] > maxValue) {
            maxValue = obj[key];
            maxKey = key;
        }
    }
    return maxKey;
}

//bài 12

export function mergeObjectsSumValues(obj1, obj2) {
    const mergedObj = { ...obj1 };
    for (let key in obj2) {
        if (mergedObj.hasOwnProperty(key)) {
            mergedObj[key] += obj2[key];
        } else {
            mergedObj[key] = obj2[key];
        }
    }
    return mergedObj;
}

//Bài 13
export function countElements(arr) {
    let count = {};
    for (let item of arr) {
        if (count[item]) {
            count[item]++;
        } else {
            count[item] = 1;
        }
    }
    return count;
}





