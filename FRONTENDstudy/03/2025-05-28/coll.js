let arr = [1,2,3,4];
let obj = {a:1, b:1};
const map = new Map();
map.set("a", 1);
map.set("b", 2);

console.log(map);
console.log(map.get("a"));
console.log(map.has("a"));
console.log(map.has("c"));

const key = map.keys();
console.log(key);

for (let i of key) {
    console.log(i);
    
}

for (let i of map.values()) {
    console.log(i);
    
}

for (let i of map.entries()) {
    console.log(i);
}

//Iterable Array, List, Set
for (let i of arr) {
    console.log(i);   
}
// for (let i of obj) {
//     console.log(i);   
// }