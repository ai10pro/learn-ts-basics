import { initTodos } from "./initTodos";

export {};

const sortedTodos = [...initTodos].sort((a, b) => {
    return a.priority - b.priority;
}) 

const sortedTodos2 = [...initTodos].sort((a, b) => {
    return b.priority - a.priority;
})

console.log("initTodos");
console.log(JSON.stringify(initTodos, null, 2));
console.log("昇順");
console.log(JSON.stringify(sortedTodos, null, 2));
console.log("降順");
console.log(JSON.stringify(sortedTodos2, null, 2));