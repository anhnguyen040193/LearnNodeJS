const students = [
  {
    name: 'Nam',
    age: 24,
    gender: 'male',
  },
  {
    name: 'Mai',
    age: 22,
    gender: 'female',
  },
  {
    name: 'Trang',
    age: 23,
    gender: 'female',
  },
  {
    name: 'An',
    age: 20,
    gender: 'male',
  },
  {
    name: 'Thien',
    age: 27,
    gender: 'male',
  },
];
let countMale = [];
let countFemale = [];
students.forEach((student) => {
  if (student.gender === 'male') {
    countMale.push(student);
  } else {
    countFemale.push(student);
  }
});
console.log('array Male:', countMale.length);
console.log('array Female:', countFemale.length);

const getName = students.map((value) => {
  return value.name;
});
console.log('Array Name: ', getName);
