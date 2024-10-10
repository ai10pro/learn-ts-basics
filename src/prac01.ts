export {};
import { date2str } from "./date2str";

const deadline: Date = new Date(2024, 9, 10, 11, 45);
const createdAt: Date = new Date();

let str = `期限:${date2str(deadline)},
作成日:${date2str(createdAt)}`;
console.log(str);