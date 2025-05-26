const obj = {a:10, b:20};
obj.c = 30;
console.log(obj);

const students = [];
const student1 = {no:1, name:"George", score:80};
const student2 = {no:1, name:"James", score:780};
const student3 = {no:1, name:"Hanna", score:90};
students.push(student1);
students.push(student2);
students.push(student3);

console.log(students);

students.splice(1, 1);

console.log(students);

{
    const v = 10;
    console.log(v);
    
}
{
    const v = 10;
    console.log(v);
}

function f(c) {
    let l = 10;
    // function inner() {
    //     return l + c;
    // }
    // let inner = function() {
    //     return l + c;
    // }
    return function () {
        return l + c;
    }
    // return inner;
}

const ret = f(10);
console.log(ret);
const result = ret();
console.log(result);

console.log(f(20)());

function f3(c) {
    c();
}

f3(function() {
    console.log("callback")
});

const arr = [3,41,5,4,2,1];
arr.sort(function(a, b) {
    return b - a;
});
console.log(arr);

