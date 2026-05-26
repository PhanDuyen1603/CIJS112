// function A(){
//     console.log("A. Tôi đang làm việc A");
//     setTimeout(function(){
//         console.log("Tôi là function A");
//     }, 3000);
// }

// function B(){
//     console.log("B. Tôi đang làm việc B");
// }

// // function C(){
// //     console.log("C. Tôi đang làm việc C");
// // }

// // function D(){
// //     console.log("D. Tôi đang làm việc D");
// // }

// function execute(){
//     A();
//     B();
//     // C();
//     // D();
// }

// execute();

// const setPromise = new Promise((resolve, reject) => {
//     const check = true;
//     if(check){
//         resolve("Promise resolved");
//     } else {
//         reject("Promise rejected");
//     }
// });

// setPromise.then((value) => {
//     console.log(value);
// }).catch((error) => {
//         console.log(error);
//     });
// console.log("Sau khi promise");

// function functionC(result){
//     console.log("C. Tôi đang làm việc C");
//     console.log(result);
// }

// const setPromiseB = new Promise((resolve, reject) => {
//     let check = true;
//     const mockValue = {
//         data: {
//             name: "John",
//             age: 20,
//             job: "Developer",
//         }
//     }
//     if(check){
//         resolve(mockValue);
//     } else {
//         reject("Promise rejected");
//     }
// });

// async function execute(){
//     try {
//         console.log("----chay 1 ------");
//         const result = await setPromiseB;
//         console.log("----chay 2 ------");
//         console.log(result);
//         functionC(result);
//     } catch (error) {
//         console.log(error);
//     }
// }

// execute();

// //call API fetch with promise
const url = "https://jsonplaceholder.typicode.com/todos";
// fetch(url).then((response) => {
//     console.log(response);
//     return response.json();
// }).then((data) => {
//     console.log(data);
// });

// const data = fetchData();
// console.log(data);

//call API fetch with async/await
async function fetchData() {
    try {
        const response = await fetch(url);
        console.log(response);
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.log(error);
    }
}

fetchData();
const api = 'https://jsonplaceholder.typicode.com/todos';
async function createTodo() {
    try {
        const newTodo = {
            title: 'MindX School',
            completed: false,
            userId: 1
        };

        const response = await fetch(api, {
            // phương thức POST
            method: 'POST',
            headers: {
                // định nghĩa dữ liệu gửi lên
                'Content-Type': 'application/json',
            },
            // chuyển đổi dữ liệu sang JSON
            body: JSON.stringify(newTodo)
        });

        if (!response.ok) {
            throw new Error(`Lỗi: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Tạo todo thành công:', data);
    } catch (error) {
        console.error('Err Lỗi:', error.message);
    }
}

createTodo();
