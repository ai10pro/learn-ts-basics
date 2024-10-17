import dayjs from "dayjs";
import { Todo } from "../types";

export const printTodo = (todo: Todo) => {
    const { name, priority, isDone, deadline } = todo; // 分割代入
    let todoSummary =
    `(優先度: ${priority}) ${name}` +
    ` 期日: ${dayjs(deadline).format("YYYY/MM/DD HH:mm")}`;
    if (isDone) {
        todoSummary += "(完了)";
    } else {
        todoSummary += "(未完了)";
    }
    console.log(todoSummary);
};

