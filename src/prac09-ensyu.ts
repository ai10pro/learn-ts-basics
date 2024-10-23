import { initTodos } from "./initTodos";

export {};


const sortedTodosDeadline = [...initTodos].sort((a, b) => {
    return a.deadline.getTime() - b.deadline.getTime();
})

const sortedTOdosPriority = [...sortedTodosDeadline].sort((a, b) => {
    return a.priority - b.priority;
}) 




console.log("initTodos");
console.log(JSON.stringify(initTodos, null, 2));

console.log("第1ソートキーを「優先度」、第2ソートキーを「期限」")
console.log(JSON.stringify(sortedTOdosPriority, null, 2));