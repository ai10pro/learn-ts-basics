export {};
const deadline: Date = new Date(2024, 9, 10, 11, 45);

// 年、月、日、時、分を取得してフォーマット
const year = deadline.getFullYear();
const month = String(deadline.getMonth() + 1).padStart(2, '0'); // 月は0から始まるため +1
const day = String(deadline.getDate()).padStart(2, '0');
const hours = String(deadline.getHours()).padStart(2, '0');
const minutes = String(deadline.getMinutes()).padStart(2, '0');

// フォーマットした文字列をコンソールに出力
console.log(`${year}/${month}/${day} ${hours}:${minutes}`);