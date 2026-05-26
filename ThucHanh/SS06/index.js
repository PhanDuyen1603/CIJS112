const DATA_URL = 'https://raw.githubusercontent.com/khoatranpc/Code-IntensiveT12.2024/refs/heads/main/lesson%206';

async function fetchAllData() {
    const response = await fetch(DATA_URL);

    if(!response.ok) {
        throw new Error(`Lỗi: ${response.status}`);
        console.log(response.status);
    }

    return response.json();
}

async function fetchUsers() {
    const data = await fetchAllData();
    return data.users;
}

async function fetchTasksStatus() {
    const data = await fetchAllData();
    return data.taskStatus;
}

async function fetchFlags() {
    const data = await fetchAllData();
    return data.flags;
}

async function fetchTasks() {
    const data = await fetchAllData();
    return data.tasks;
}

async function main() {
    const users = await fetchUsers();
    console.log("Users:", users);
    const tasksStatus = await fetchTasksStatus();
    console.log("Tasks Status:", tasksStatus);
    const flags = await fetchFlags();
    console.log("Flags:", flags);
    const tasks = await fetchTasks();
    console.log("Tasks:", tasks);
}

main();