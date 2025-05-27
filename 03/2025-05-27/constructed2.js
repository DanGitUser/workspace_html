// doubled n배
const doubled = [1,2,3].map(v => v * 2); // 두(2)배
console.log(doubled);

// filter 걸러내기
const evens = [1,2,3,4].filter(v => v % 2 === 0); // 짝수 걸러내기
console.log(evens);

//find 찾기 
const firstEven = [1,3,4,6].find(v => v % 2 === 0) //짝수 조건
console.log(firstEven); // 4

// reduce(fn, 초기값)
const sum = [1,2,3,4].reduce((prev, cur) => prev + cur, 0);
console.log(sum); // 1 + 2 + 3 + 4 = 10

// some, every >> boolean
console.log([1,2,3].some(v => v === 0)); // 일부가 짝수인지
console.log([1,2,3].every(v => v === 0)); // 전부가 짝수인지

// includes 포함
console.log([1,2,3].includes(1));
console.log([1,2,3].includes(4));


// 연습하기
// users 배열
const users = [
    {name: '새똥이', age:14},
    {name: '게똥이', age:24},
    {name: '소똥이', age:34}
];

// 20세이상인 사람들의 이름만 추출 (.filer / .map 공부하기)
// filer() 걸러내기
// map() 타입 변경에 쓰임

//추가 연습:
// 나이만 추출
// 둘다 깔끔하게 추출

console.log(users.filter(v => v.age > 20).map(v => v.name));
console.log(users.filter(v => v.age > 20).map(v => v.age));
console.log(users.filter(v => v.age > 20).map(v => v.name + " " + v.age + "살"));

// 여기서 외 forEach 가 undefied일까?
const arr = [1, 2, 3];
const result = arr.forEach(v => v * 2);
console.log(result);

// 이 배열을 가지고 짝수만 골라서 제곱으로 이루어진 배열을 반환
const numbers = [1,2,3,4,5,6,7];
// 답:
console.log(numbers.filter(v => v % 2 === 0).map(v => v * v));

// cart에 들은 상품들의 총합 계산 reduce
const cart = [
    {item: "감자", count: 3, price: 1000},
    {item: "고구마", count: 2, price: 1500},
    {item: "양파", count: 5, price: 500}
];
// 답:
// const ret = cart.reduce((prev, curr) => prev + curr.qty * curr.price, 0);
const ret = cart.reduce((prev, curr) => {
    return prev + curr.qty * curr.price
}, 0);
console.log(ret);

// find
// 300패이지가 넘는 첵의 의름을 조회
const books = [
    {title: "JavaScript 기초", pages: 120},
    {title: "ES6 완벽 가이드", pages: 350},
    {title: "CSS 디자인", pages: 200},
    {title: "HTML5", pages: 400}
];
// 답:
// console.log(books.find(v => v.pages > 300).map(v => v.title));
const result2 = books.find(v => v.pages > 300);
console.log(result2.title + "은 300패이지가 넘는다");

//reduce 가장 고가의 상품
const products = [
    {name: "노트북", price: 1200000},
    {name: "키보드", price: 150000},
    {name: "마우스", price: 50000},
    {name: "모니터", price: 300000}
];
// 답:
// products.reduce((prev, curr) => prev > curr, 0)
console.log(products.reduce((prev, curr) => { return prev.price > curr.price ? prev.price : curr.price}, 0).name);

for(let i = 0 ; i < 10 ; i++) {

};
const obj = {a:1, b:2};
for (let i in obj) {
    console.log(obj[i]);
};
const arr3 = [10, 20, 30];
for (let i of arr3) {
    console.log(i);
};
for (let i in arr3) {
    console.log(i, arr3[i]);
};

const now = new Date();
console.log(now);
console.log(now.toString());
console.log(now.getDay());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getFullYear());
console.log(now.toDateString());