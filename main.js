//////////////////////////////////ЗАДАНИЕ 1//////////////////////////////////

/* function convertSpeed(speed, convert) {
  speed = +prompt("Скорость = ", "");
  convert = +prompt("перевести в м/с(0), км/ч(1)", "");
  if (convert === 0) {
    console.log(`convertSpeed(${speed},'toMS'->'${speed / 3.6}'м/с `);
  } else {
    console.log(`convertSpeed(${speed},'toKMH'->'${speed * 3.6}'км/ч `);
  }
}
convertSpeed(); */

//////////////////////////////////ЗАДАНИЕ 2//////////////////////////////////

number = +prompt("Число", "")
const absValue = (num) =>{
if (num < 0){
    console.log(`absValue(${num}) -> ${num * -1 }`);
    return num*(-1)
} else{
    console.log(`absValue(${num}) -> ${num}`);
    return num;
}
}
rez = absValue(number);

//////////////////////////////////ЗАДАНИЕ 3//////////////////////////////////

let student = {
  group: 201,
  last_name: "Иванов",
  first_name: "Иван",
};

console.log(`Список свойств:`, Object.keys(student));
console.log(
  `Студент ${student.first_name} ${student.last_name} учится в ${student.group} группе`
);

//////////////////////////////////ЗАДАНИЕ 4//////////////////////////////////

min1 = +prompt("Введите минимальное значение", "")
max1 = +prompt("Введите максимальное значение", "")
const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
console.log(`randomNumber(${min1}, ${max1}) -> ${randomNumber(min1, max1)}`)

//////////////////////////////////ЗАДАНИЕ 5//////////////////////////////////

/* num = +prompt("Введите количество элементов массива", "");
mas = [];
for (let i = 0; i < num; i++) {
  mas.push(Math.round(Math.random() * 100));
}
let count = +prompt("Введите кол-во элементов для вывода");

const randArray = (count) => {
  let massiv = [];
  for (let j = 0; j < count; j++) {
    massiv.push(mas[randomNumber(0, mas.length)]);
  }
  return massiv;
};

console.log(`sampleArray([${mas}], ${count}) -> [${randArray(count)}])`); */
