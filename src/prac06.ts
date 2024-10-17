export{};

const grades: number[] = [1, 2, 3, 4, 5];
const gradeListItems = grades.map((grade: number): string => `<li>${grade}年</li>`
);

console.log(grades);
console.log(gradeListItems);