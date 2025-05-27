// Number
const num1 = 10;
const num2 = new Number(20);

console.log(num1, num2);
console.log(num1 + num2);
console.log(typeof num1, typeof num2);
console.log(typeof num1 + typeof num2);

console.log(num1.toFixed(3));
console.log(num1.toFixed(2));

const str1 = 'CharArray';
const str2 = new String("CharArray");

console.log(str1, str2);
console.log(str1 + str2);

console.log(str1.length);

for (let i = 0 ; i < str1.length ; i++) {
    console.log(str1[i], str1.charAt(i));
}
// for (let i = 0 ; i < str1.length ; i++) {
//     Math.random(str1[i]), Math.random(str1.charAt(i));
// }

str1.includes("a");

const str3 = "abcd1234abc";
console.log(str3.substring(3, 5));
console.log(str3.substr(3, 5));
console.log(str3.slice(3, 5));

const reg1 = new RegExp("[A-Z]");
const reg2 = /[A-Z]/; // regex literal

console.log(reg1, reg2);

const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);

console.log(arr1, arr2);
console.log(/[A-Z]/.test("abcdABCD"));
console.log(/[A-Z]/.test("abcd1234"));

console.log(
    "abcdefabcdefABCDEABCDE".replace(/a/gim, 'abcde')
);

[].sort();

