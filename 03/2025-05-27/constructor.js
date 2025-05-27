let arr = [0,20,30,40,50,60,70];
console.log(arr.length);
console.log(arr[1]);
console.log(arr.slice(2,4));
console.log(arr.join("-"));
console.log(arr.concat("A", "B", "C"));


// array add

arr.push(1);
console.log(arr);
arr.unshift(10);
console.log(arr);
arr.pop();
arr.pop();
arr.pop();
console.log(arr);
arr.shift();
arr.shift();
arr.shift();
console.log(arr);

arr.splice(1, 0, 10)
console.log(arr);

arr.splice(2, 1);
console.log(arr);

arr.splice(0, 1, 20, 30,40);
console.log(arr);

arr.reverse();
console.log(arr);

arr.sort((a, b) => b - a);
console.log(arr);

// forEach, map, filter, find, some. every. reverse. includes, findIndex

arr.forEach(function(a, b, c) {
    console.log(a, b, c);
    
});
arr.forEach(function(a, b, c) {
    console.log(a, c[b]);
    
});
arr.forEach(function(a) {
    console.log(a);
    
});

arr.forEach(a => console.log(a));
// arr.forEach(console.log(a));
arr.forEach(console.log);

const doubled = [1,2,3].map(v => v * 2);
console.log(doubled);




