import dayjs from 'dayjs';
import {Todo} from '../types';

export const isTaskOverdue = (todo: Todo): void => {
    const { deadline, isDone, name} = todo;
    const now = dayjs();
    const timeDiff = dayjs(deadline).diff(now, 'hour');
    if (isDone) {
        console.log(`【完】${name}`);
    } else if (timeDiff < 0) {
        console.log(`【未】${name}(期限を${timeDiff * -1}時間超過)`);
    } else if (timeDiff > 0) {
        console.log(`【未】${name}(期限まであと${timeDiff}時間)`);
    }
};