console.log(max(3,4));
// console.log(min(3,4)); not a function, but a variable, so it doesn't get hoisted to the sky
console.log(min);



// 함수 function
// 1. 선언적 함수
function max (a, b) {
    return a > b ? a : b;
}
// 2. 익명 함수
var min = function (a, b ) {
    return a < b ? a : b;
}

console.log(max(10, 5));
console.log(min(10, 5));


console.log(typeof max);
console.log(typeof min);

// 선언적 함수로 두수의 곱을 반환하는 함수의 정의 (함수명 : mul)
// 익명 함수로 두수의 차이를 반환하는 함수의 정의 (함수명 : sub) (반드시 양수로 반환)

function mul (a, b) {
    return a * b;
}

var sub = function (a, b) {
    if(!(typeof a === "number" && typeof b === "number")) return NaN;
    // return (a > b ? a : b) - (a < b ? a : b);
    return a > b ? a - b : a + b;
}

console.log(mul(10, 5));
console.log(sub(10, 5));

// hoist : var로 선언한 변수, 선언적 함수는 끌어올려짐.
// var can be repeated

console.log(num);
var num = 10;
var num = 20;
console.log(num);


// 함수 내애서 선언하는 변수 ? 지역변수
// 익명함수 ==== 함수리터랄

// {} : object literal
// function() {} : function literal


console.log("abcdef".substring(3,5));
console.log([10, 20, 30][1]);
console.log([[10, 20, 30][0], [10, 20, 30][1], [10, 20, 30][2]][0]);
console.log([
    [[
        [10, 20, 30][0], 
        [10, 20, 30][1], 
        [10, 20, 30][2]
    ][0], [
        [10, 20, 30][0], 
        [10, 20, 30][1], 
        [10, 20, 30][2]
    ][1], [
        [10, 20, 30][0], 
        [10, 20, 30][1], 
        [10, 20, 30][2]
    ][2]][0], 
    [[
        [10, 20, 30][0], 
        [10, 20, 30][1], 
        [10, 20, 30][2]
    ][0], [
        [10, 20, 30][0], 
        [10, 20, 30][1], 
        [10, 20, 30][2]
    ][1], [
        [10, 20, 30][0], 
        [10, 20, 30][1], 
        [10, 20, 30][2]
    ][2]][1],   
    [[
        [10, 20, 30][0], 
        [10, 20, 30][1], 
        [10, 20, 30][2]
    ][0], [
        [10, 20, 30][0], 
        [10, 20, 30][1], 
        [10, 20, 30][2]
    ][1], [
        [10, 20, 30][0], 
        [10, 20, 30][1], 
        [10, 20, 30][2]
    ][2]][2]
][0]
);
console.log({a:10, b:20}.a);

// IIFE : one time use (immediately-invoked function expression)
(function(a) { console.log('value of parameter : ' + a)})(30);


// javascript function is a type
obj = {no:1, name:"새똥이", score:80, getScore : function() {
    return this.score; // you need to call the "score" using this ".score"
}};

console.log(obj);
console.log(obj.score);
console.log(obj.getScore);

function max2 (a, b, c) {
    // return a > b && a > c ? a : b > a && b > c ? b : c > a && c > b ? c : a;
    if (a > b && a > c) {
        return a;
    } else if (b > c) {
        return b;
    } else {
        return c;
    }
}

console.log(max2(133, 21, 322));

function max3 (a, b, c) {
    return max(max(a, b), c);
}
console.log(max3(12,5,22));


function max4(a, b, c) {
    console.log(arguments);
}

max4(10, 20, 30);