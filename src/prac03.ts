import { Todo } from "./types";
import { isTaskOverdue } from "./utils/isTaskOverdue";
import { printTodo } from "./utils/printTodo";
export {};

// Todo型のオブジェクトを作成
const todo1: Todo = {
    name: 'TypeScriptの勉強',
    priority: 3,
    isDone: false,
    deadline: new Date(2024, 9, 20, 11, 45),
}

// Todo型のオブジェクトを作成
const todo2: Todo = {
    name: "基礎物理3の宿題",
    priority: 1,
    isDone: true,
    deadline: new Date(2024, 9, 10, 16, 0),
};

printTodo(todo1);
console.log(isTaskOverdue(todo1));
printTodo(todo2);
console.log(isTaskOverdue(todo2));