export{};
import { initTodos } from "./initTodos";

const updateTodo = initTodos.filter((todo) => !todo.isDone);
console.log("未完了のTODOリスト");
console.log(updateTodo);

const targetId = 2;
const deleteTodo = initTodos.filter((todo) => todo.id !== targetId);
console.log("IDが2のTODOを削除");
console.log(deleteTodo);