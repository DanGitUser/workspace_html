let obj = {
    name: '길똥이',
    age: 20,
    printOut: function() {

    }
};

console.log(obj);
console.log(obj.name);

// Object related operators

obj.tel = "010-1111-1122"
console.log(obj);

delete obj.age;
console.log(obj);

// property check
console.log("tel" in obj);
console.log("age" in obj);


//spread operator (전개 연산)

const obj1 = {a:1, b:2};
const obj2 ={"obj1":obj1, c:3};
console.log(obj2);

const num = 10;
const obj3 = {"a":1, "b":2, 'num':num, "abc-def":10};
const obj4 = {...obj1, c:3};

console.log(obj3["abc-def"]);
console.log(obj4);

function fn (p1, p2, ...a) {
    let sum = 0;
    for(let i = 0 ; i < a.length ; i++) {
        sum += a[i];
    }
    return sum;
}

fn("gap1","gap2", 10, 20, 30);

console.log(fn);

Math.random();