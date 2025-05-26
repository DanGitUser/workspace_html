// var num = 10;
// str = "Legolas";
function f() {
    // console.log(num);
    num = 20;
    // var num = 20;
    console.log(num);   
}
f();
// console.log(num);
// console.log(str);

// var keyword
// 선언적함수는 hoisting의 대상, 함수 레벨 scope

(function () {
    for (var i = 0 ; i < 10 ; i++) {
    
    
    }
    console.log(i);
})();
// console.log(i);

if(true) {
    let test = 10;
}
// console.log(test);

let str = "abcde";
// let str = "abcdef";

const obj = {a:10, b:20};
obj.c = 30;
console.log(obj);
