import dayjs from 'dayjs';
import {Todo} from '../types';

export const isTaskOverdue = (todo: Todo): boolean => {
    const { deadline, isDone } = todo;
    const now = dayjs();
    if (now > dayjs(deadline) && !isDone) {
        return true;
    } else {
        return false;
    }
};