// this : the adress of future objects
function Student (
    no, 
    name = "Gawain", 
    score = 100
) {
    this.no = no;
    this.name = name;
    this.score = score;
}

const student = new Student(
    1, "Soji", 90
);

console.log(student);
console.log(student.name);

const students = [];
students.push(student);
students.push(
    new Student(
        2, 'PooFace', 80
    )
);
students.push(
    new Student(
        3
    )
);
students.push(
    new Student(
        4,
        undefined,
        100
    )
);

console.log(students);
