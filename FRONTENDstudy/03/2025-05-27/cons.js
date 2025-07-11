// prototype
// studno 

function Student (no, name, kor, eng, mat) {
            this.no = no;
            this.name = name;
            this.kor = kor;
            this.eng = eng;
            this.mat = mat;
        };
        
// Student.prototype.total = () => this.kor + this.eng + this.mat;
// Student.prototype.avg = () => parseInt(this.total () / 3);
Student.prototype.total = function() {return this.kor + this.eng + this.mat};
Student.prototype.avg = function() {return parseInt(this.total () / 3)};

const s = new Student(1, "Greg", 80, 70, 80);
console.log(s.total());
Student.prototype.test = 10;
Student.test = 20;
Student.fn = function() {
    return "HI";
}

console.log(s.test);
console.log(new Student().test);
console.log(Student.test);
console.log(Student.fn());

const arr = [1,2,3,4];
Array.prototype.size = function() {
    return this.length;
}
console.log(arr.size());

Object.prototype.fn = function() {
    return 10;
}

console.log({}.fn());
const num = 10;
console.log(num.toFixed());




