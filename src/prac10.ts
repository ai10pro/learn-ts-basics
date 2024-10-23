export {};
import dayjs from "dayjs";
import { Todo } from "./types";
import { initTodos } from "./initTodos";
const dtFmt = "YYYY/MM/DD HH:mm";

const listItemsTodos: string[] = initTodos
  .filter((todo) => !todo.isDone)
  .sort((a, b) => a.deadline.getTime() - b.deadline.getTime())
  .sort((a, b) => a.priority - b.priority)
  .map(
    (todo) =>
      `<li>優先度[${todo.priority}] ${todo.name}` +
      `...期限${dayjs(todo.deadline).format(dtFmt)}</li>`
  );

const deleteTodoById = (todos: Todo[], id: number): Todo[] => {
  if (!Number.isInteger(id) || id <= 0) {
    return todos;
  }
  return todos.filter((todo) => todo.id !== id);
};

const stringifyTodos = (todos: Todo[]): string[] =>
  todos.map(
    (todo) =>
      `id=${todo.id} ${todo.name} ` +
      `期限 ${dayjs(todo.deadline).format(dtFmt)}`
  );

const todo = [...initTodos];
const updatedTodos = deleteTodoById(todo, 3);

console.log("削除前");
console.log(stringifyTodos(todo));
console.log("削除後");
console.log(stringifyTodos(updatedTodos));