factorial = (n) => {
    let result = 1;
    if (n == 0) {
        return result;
    } else {
        return result *= n * factorial(n-1);
    }
}

// factorial = (n) => {
//     let result = 1;
//     if (n == 0) {
//         return result;
//     } else {
//         return result *= n * factorial(n-1);
//     }
// }

// protocol // domain : port / path /file ? query string # anchor
// http://localhost:5500/03/25-05-26/test.html?colo=#002345&name=Bluey
// http://localhost:5500/03/25-05-26/test.html?colo=%2345

console.log(factorial(5));

let url = 'http://localhost:5500/03/25-05-26/test.html?color=#002345&name=밴디비';
console.log(url)
console.log(encodeURI(url));
console.log(encodeURIComponent(url));

console.log(decodeURIComponent(encodeURIComponent(url)));

// parseInt
// parseFLoat

let str = "123.456가나다"
console.log(parseInt(str));
console.log(parseFloat(str));

str = "ff";
console.log(parseInt(str, 16));

let s = String.fromCharCode(65,66);
console.log(s);
console.log(s.charCodeAt(1));


