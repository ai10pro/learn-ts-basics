import dayjs from "dayjs";
import { Todo } from "../types";

export const printTodo = (todo: Todo) => {
    const { name, priority, deadline } = todo; // 分割代入
    const todoSummary =
    `(優先度: ${priority}) ${name}` +
    ` 期日: ${dayjs(deadline).format("YYYY/MM/DD HH:mm")}`;
    console.log(todoSummary);
};

