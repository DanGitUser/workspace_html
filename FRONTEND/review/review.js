// let nums = [100, 200, 300, 400, 500];

// nums.pop();
// nums.pop();

// console.log(nums);


// let arr = [200, 100, 300];
// console.log(arr);
// arr.splice(2, 0, 1000);
// arr.join();
// console.log(arr);




let arr = [1, 2, 3]
for (item of arr) {
  console.log(item)
}
console.log("========");

let arr1 = [1, 2, 3]
for (idx in arr1) {
  console.log(idx)
}
console.log("========");

let arr2 = [1, 2, 3]
for (idx in arr1) {
  console.log(arr2[idx])
};
console.log("========");

let obj = {a:1, b:2, c:3}
for (item in obj) {
  console.log(item)
};
console.log("========");

let obj1 = {a:1, b:2, c:3}
for (item in obj1) {
  console.log(obj1[item])
};
console.log("========");

function removeOdds(arr) {
    return arr.filter(function(i, v) { 
       return v % 2 === 0
    });
};

let nums = [100, 200, 300, 400, 500];
const result = removeOdds(nums);
console.log(result);
//==========================================
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const people = new Person("지유", 22);
console.log(people);

// =========================================
function Dog(breed) {
  this.breed = breed;
  this.bark = function() {
    console.log("Woof! 멍멍! I am a " + this.breed);
  };
}

const dog1 = new Dog("말티즈");
dog1.bark();

const abcd = "a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p";
console.log(abcd.split(/[\s,]+/));

function counter() {
  let count = 0;

  return {
    increment: function () {
      count++;
      console.log(count);
    },
    getCount: function () {
      return count;
    }
  };
}

const c = counter();
c.increment(); // 1
c.increment(); // 2
// console.log(count);
console.log(c.getCount()); // 2

const output = void 101010;
console.log(output);

void function() {
  console.log("bam");
}();

('a')('.a')