/* Задача 1 */

function enterNumbers (x,y) {
  while (true) {
    x = +prompt('Введите первое число');
    if (!x) {
      alert("первый ввод – не число");
      return;
    }
    y = +prompt('Введите второе число');
    if (!y) {
      alert("второй ввод – не число");
      return;
    }
    compareNumbers(x, y);
  }
  function compareNumbers(x,y){
    if (x < y) {
      alert("первое число меньше");
    } else if (x > y) {
      alert("второе число меньше");
    } else {
      alert("числа равны");
    } 
  };
}
enterNumbers();


/* Задача 2 */

function getEntrance() {
  function isCheck(minNumber, maxNumber, value) {
    return (
      minNumber &&
      maxNumber &&
      value &&
      value >= minNumber &&
      value <= maxNumber
    );
  }

  var floorQuantity, entranceQuantity, flatQuantity;

  while (true) {
    floorQuantity = +prompt("Введите колличество этажей от 1 до 25");
    if (isCheck(1, 25, floorQuantity)) break;
    alert("Введите корректное значение");
  }

  while (true) {
    entranceQuantity = +prompt("Введите колличество подъездов от 1 до 10");
    if (isCheck(1, 10, entranceQuantity)) break;
    alert("Введите корректное значение");
  }

  while (true) {
    flatQuantity = +prompt(
      "Введите колличество квартир на лестничной площадке от 01 до 20"
    );
    if (isCheck(1, 20, flatQuantity)) break;
    alert("Введите корректное значение");
  }

  var flatCount = floorQuantity * entranceQuantity * flatQuantity;

  while (true) {
    var flatNumber = +prompt("Введите номер квартиры");
    if (flatNumber > flatCount || !flatNumber)
      alert("Вы ввели не допустимое значение");
    break;
  }

  for (entrance = 1; entrance <= entranceQuantity; entrance++) {
    if (flatNumber <= floorQuantity * flatQuantity * entrance) {
      alert("Ваша квартира находится в подъезде " + entrance);
      break;
    }
  }
}
getEntrance();

/* Задача 3 */

function getNumber(num1, num2) {
  if (num1 % 2 === 0 && num2 % 2 === 0) {
    return num1 * num2;
  } else if (num1 % 2 !== 0 && num2 % 2 !== 0) {
    return num1 + num2;
  } else {
    return num1 % 2 ? num1 : num2;
  }
}


/* Задача 4 */

function checkRectangle() {
  var x1, x2, x3, x4, y1, y2, y3, y4;

  x1 = +prompt("Введите значение x1:");
  y1 = +prompt("Введите значение y1:");
  x2 = +prompt("Введите значение x2:");
  y2 = +prompt("Введите значение y2:");
  x3 = +prompt("Введите значение x3:");
  y3 = +prompt("Введите значение y3:");
  x4 = +prompt("Введите значение x4:");
  y4 = +prompt("Введите значение y4:");

  function isRectangle(x1, x2, x3, x4, y1, y2, y3, y4) {
    return x1 === x4 && y1 === y2 && x2 === x3 && y3 === y4;
  }

  isRectangle(x1, x2, x3, x4, y1, y2, y3, y4)
    ? alert("Фигура - прямоугольник")
    : alert("Не прямоугольник");
}
checkRectangle();

/* Задача 5 */
function getSequence(start, step) {
  start = start || 0;
  step = step || 1;
  return function createGenerator() {
    return (start = start + step);
  };
}
var test = getSequence(5, 10);
console.log(test());
console.log(test());
console.log(test());