let even = 0;
let odd = 0;

for (let i = 0; i < 100; i++) {
    if (i % 2 == 0) {
        even += i;
    } else {
        odd += i;
    } 
}
console.log("even " + even);
console.log("odd " + odd);  
