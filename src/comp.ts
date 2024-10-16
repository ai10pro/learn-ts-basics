export{};
import { Todo } from "./types";
import { deepEqual } from "./utils/deepEqual";

// Todo型のオブジェクトを作成
const todo1: Todo = {
    name: 'TypeScriptの勉強',
    priority: 3,
    isDone: false,
    deadline: new Date(2024, 9, 10, 11, 45),
}

// Todo型のオブジェクトを作成
const todo2: Todo = {
    name: 'TypeScriptの勉強',
    priority: 3,
    isDone: false,
    deadline: new Date(2024, 9, 10, 11, 45),
}

console.log(todo1 === todo2); // false
console.log(deepEqual(todo1, todo2)); // true