var obj1 = 2 && null;
var obj2 = 2 && 0;
var obj3 = 2 && 3;
var obj4 = 2 == 3;

var o = {a:10};
console.log(o.b);

if(obj1) {
    console.log('if true, print');
} else {
    console.log('if false, print');
}

if(obj2) {
    console.log('if true, print');
} else {
    console.log('if false, print');
}

if(obj3) {
    console.log('if true, print');
} else {
    console.log('if false, print');
}

if(obj4) {
    console.log('if true, print');
} else {
    console.log('if false, print');
}