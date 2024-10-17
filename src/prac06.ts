export{};

const grades:number[] = [1, 2, 3, 4, 5];

const gradeListItems = grades.map((grade:number):string => {
    return `<li>${grade}</li>`;
});

console.log(grades);
console.log(gradeListItems);