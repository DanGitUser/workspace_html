console.log(10, 20, 30)


var num = 10;
let str = '20';
const name = '새똥이';

num = 30;
str = 40;
// name = 5;

console.log(num, str, name);

class Student {

}

var rand = `A1` - 2;

var student = new Student();
console.log(student);
console.log(rand);

console.log(typeof num);
num=String(num);
console.log(typeof num);
num=Boolean(num);
console.log(typeof num);

// 1 => true, 0 => false
// string => number

var str1 = "abcde";
str1 = Number(str1);
console.log(typeof str1, str1);
var n = NaN;
console.log(NaN == NaN);
console.log(isNaN(n));

console.log(Number.MAX_VALUE);

console.log(0 / 0, 3 / 0);

console.log(isFinite(3), isFinite(Number.POSITIVE_INFINITY));

var fn = function(a, b) {
    return a + b;
}

var ret = fn(10, 20);
console.log(ret);


