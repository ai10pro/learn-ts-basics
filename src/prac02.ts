import { Todo } from './types';
// Todo型のオブジェクトを作成
const todo1: Todo = {
    name: 'TypeScriptの勉強',
    priority: 3,
    isDone: false,
    deadline: new Date(2024, 9, 10, 11, 45),
}

// Todo型のオブジェクトを作成
const todo2: Todo = {
    name: "基礎物理3の宿題",
    priority: 1,
    isDone: false,
    deadline: new Date(2024, 9, 10, 16, 0),
};