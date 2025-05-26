// function add() {
//     let n = 0;
//     return function () {
//         return ++n;
//     }
// }
add = _ => {
    let n = 0;
    return () => {
        return ++n;
    }
};
const increase = add();
console.log(increase());
console.log(increase());
console.log(increase());

const increase2 = add();
console.log(increase());
console.log(increase());
console.log(increase());
