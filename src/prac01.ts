import { json } from "stream/consumers";

export{};
// const userName: string = "Bob";
// console.log(`Hi ${userName}!`);

let name: string = "TypeScriptの勉強";
let priority: number = 3;

console.log(name,priority);
console.log(`タスク名：${name}、優先度：${priority}`);

// Data型の変数 deadlineの宣言と初期化
let deadline: Date = new Date(2024, 10, 3, 10, 25);
console.log(deadline);

// オブジェクト定義
const todo = {
    name: "TypeScriptの勉強",
    priority: 3,
    deadline: new Date(2024, 10, 3, 10, 25)
}
console.log(todo);
console.log(JSON.stringify(todo, null, 2));