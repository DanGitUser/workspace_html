function max() {
    console.log(arguments);
    // it's an object that is used like an array
    var ret = arguments[0];
    for (var i = 0; i < arguments.length ; i++) {
       if (ret < arguments[i]) {
            ret = arguments[i];
        }
    }
    return ret;
}

console.log(max(10, 20, 30));

// function test(a, b) {
//     console.log(a, b);
// }
// Text();

var abs = function (a) {
    return a > 0 ? a : -a;
}

abs = (a) =>  a > 0 ? a : -a;

console.log(abs(-55));

//array

var arr = [3,2,1,5,4];
arr.sort((a, b) => b - a)
console.log(arr);
arr.forEach(a => console.log(`Internal value ${a}`));
arr.filter(a => a % 2 == 1).map(a => "값은" + a).forEach(a => console.log(a));

// scope

