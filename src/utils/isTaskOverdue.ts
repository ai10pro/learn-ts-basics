import dayjs from 'dayjs';
import {Todo} from '../types';

export const isTaskOverdue = (todo: Todo): void => {
    const { deadline, isDone, name} = todo;
    const now = dayjs();
    const timeDiff = dayjs(deadline).diff(now, 'hour');
    const diffDays = dayjs(deadline).diff(now, 'day');
    let overTimes: string = '';

    if (diffDays < 0) {
        overTimes = (diffDays * -1) + "日"+(timeDiff %24 * -1)+"時間";
    } else if (diffDays > 0) {
        overTimes = (diffDays) + "日"+(timeDiff %24)+"時間";
    } else if (timeDiff < 0) {
        overTimes = (timeDiff * -1)+"時間";
    } else if (timeDiff > 0) {
        overTimes = (timeDiff * -1)+"時間";
    }

    if (isDone) {
        console.log(`【完】${name}`);
    } else if (timeDiff < 0) {
        console.log(`【未】${name}(期限を${overTimes}超過)`);
    } else if (timeDiff > 0) {
        console.log(`【未】${name}(期限まであと${overTimes})`);
    }
};