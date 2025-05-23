// Js DataType
// Number, String, Logic 

// undefined

var num = '20';
num = true;
console.log(typeof num);

var obj = {A:10, b:20};
var arr = [3,2,1,true,"가나다라"];
var fn = function () {};
var num = 6;

console.log(typeof obj);
console.log(typeof arr);
console.log(typeof fn);
console.log(typeof num);

console.log(obj.A);
console.log(arr[1]);

var str = `string ${obj.b} text` + "\nhello" + 70;
console.log(str);