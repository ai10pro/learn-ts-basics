import { initTodos } from "./initTodos";

export {};

const sortedTodos = [...initTodos].sort((a, b) => {
    return a.priority - b.priority;
}) 

console.log("initTodos");
console.log(JSON.stringify(initTodos, null, 2));
console.log("sortedTodos");
console.log(JSON.stringify(sortedTodos, null, 2));