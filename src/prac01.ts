export {};
import dayjs from 'dayjs';
import 'dayjs/locale/ja';

dayjs.locale('ja');
const dtFmt = 'YYYY/MM/DD(dd) HH:mm';
const deadline: Date = new Date(2024, 9, 10, 11, 45);
const createdAt: Date = new Date();

const str = `期限 ${dayjs(deadline).format(dtFmt)}` +
            ` 作成日 ${dayjs(createdAt).format(dtFmt)}`;
console.log(str);