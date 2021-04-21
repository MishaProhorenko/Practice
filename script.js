'use strict'

//#1
//Запросите у пользователя число, возведите это число во
// 2-ю степень и выведите на экран.
// let a = (requestNumber,) => {
//     requestNumber = +prompt('Enter number');
//     return requestNumber ** 2
// }
// console.log(a())


//Запросите у пользователя 2 числа и выведите среднее арифметическое этих чисел.

//#2

// let a = (numberOne, numberTwo) => {
//     numberOne = +prompt('Enter number');
//     numberTwo = +prompt('Enter number');
//     return (numberOne + numberTwo) / 2
// }
// console.log(a())

//#3
//Запросите у пользователя длину стороны квадрата и выведите площадь такого квадрата.

// let a = (sideSquare) => {
//     sideSquare = +prompt('Enter length side Square');
//     return sideSquare ** 2
// }
// console.log(a())



//#4
// Реализуйте конвертор из километров в мили (пользователь
//     вводит километры, программа выводит мили). 1 км = 0,621371
//     миль. Это значение укажите в коде как константу

// let converter = (km) => {
//     const mile = 0.621371;
//     km = +prompt('enter km', 125);
//     return km * mile
// }

// console.log(converter())


//#5

// Реализуйте калькулятор. Пользователь вводит два числа,
// а программа выводит результаты действий + - * / между
// этими числами.


// let culc = (numberOne, numberTwo) => {
//     numberOne = +prompt('enter first number');
//     numberTwo = +prompt('enter second number');
//     let sum = numberOne + numberTwo;
//     let minus = numberOne - numberTwo;
//     let multi = numberOne * numberTwo;
//     return ` sum: ${sum},  minus: ${minus},  multi: ${multi} `
// }

// console.log(culc())

// #6

// Пользователь вводит значения a и b для формулы a * x + b = 0,
// а программа считает и выводит значение x.

//x = -b/a


// let aaa = (a, b) => {
//     a = +prompt('Enter number');
//     b = +prompt('Enter number');
//     let x = -b/a;
//     return x
// }
// console.log(aaa())

//#7

//  Запросите у пользователя текущее время (часы и минуты)
// и выведите, сколько часов и минут осталось до следующего
// дня.


//#8
// Запросите у пользователя трехзначное число и выведите
// вторую цифру этого числа. Для решения задачи используйте
// оператор %

// let requestNumber = (number) => {
//     number = +prompt('enter number', 123)
//    return Math.trunc((number / 10) % 10)

// }
// console.log(requestNumber())

//#9
// Запросите у пользователя пятизначное число и переместите последнюю цифру в начало (из числа 12345 должно
//     получиться число 51234).

// let requestNumber = () => {
//     let number = prompt('enter number', 12345);
//     let result = number[number.length - 1] + number.slice(0, number.length - 1)
//     return +result
// }
// console.log(requestNumber())

//#10
// Зарплата работника составляет $250 + 10% от продаж.
// Запросите общую сумму продаж за месяц и посчитайте
// зарплату. 


// let salary = () => {
// let sal = 250;
// let requestSum = +prompt('enter sum sale')
// sal = sal + (requestSum * 0.1)
// return `Salary: ${sal}$.`
// }

// console.log(salary())



//=======================================================================



// 1. Запросить у пользователя число и определить, оно положительное, отрицательное или ноль.


// let requestNumberFromUser = (number) => {
//     number = +prompt('enter number');
//     if (number > 0) {
//         return 'positive'
//     } else if (number < 0) {
//         return 'negative'
//     } else if (number == 0) {
//         return 'enter 0'
//     }
// }

// console.log(requestNumberFromUser())



//2. Запросить у пользователя его возраст и проверить корректность введенных данных (0–120 лет).

// let requestAgeFromUser = (age) => {
//     age = +prompt('enter your age');
//     if(age > 120 || age < 0){
//         console.log('ERROR')
//         age = +prompt('enter your age');
//         if(age < 120 || age > 0){
//             return `Your age: ${age}`
//         }
//     } else{
//         return `Your age: ${age}`
//     }
// }
// console.log(requestAgeFromUser())

//3.Запросить у пользователя число и вывести его модуль
// (|7| = 7, |-7| = 7).

// let requestNumber = (number) => {
//     number = +prompt('enter number');
//     return Math.abs(number)
// }
// console.log(requestNumber())

//4. Запросить у пользователя время (часы, минуты, секунды)
// и проверить корректность введенных данных

// let requestTime = (hour, minute, second) => {
//     hour = +prompt('enter hour');
//     if (hour > 24 || hour < 0) {
//         return `Неверно введены часы`
//     } else {
//         minute = +prompt('enter minute');
//         if (minute >= 60 || minute < 0) {
//             return `Неверно введены минуты`
//         } else {
//             second = +prompt('enter second');
//             if (second >= 60 || second < 0) {
//                 return `Неверно введены секунды`
//             } else {
//                 return `сейчас: ${hour}:${minute}:${second}`
//             }
//         }
//     }
// }

// console.log(requestTime())

//5.Запросить у пользователя номер месяца и вывести на экран
// его название.

// let numberMonth = (number) => {
//     number = +prompt('enter number month');
//     switch (number) {
//         case 1:
//             console.log('1')
//             break;
//         case 2:
//             console.log('2')
//             break;
//         case 3:
//             console.log('3')
//             break;
//         case 4:
//             console.log('4')
//             break;
//         case 5:
//             console.log('5')
//             break;
//         case 6:
//             console.log('6')
//             break;
//         case 7:
//             console.log('7')
//             break;
//         case 8:
//             console.log('8')
//             break;
//         case 9:
//             console.log('9')
//             break;
//         case 10:
//             console.log('10')
//             break;
//         case 11:
//             console.log('11')
//             break;
//         case 12:
//             console.log('12')
//             break;
//         default:
//             console.log('ERROR')
//     }
// }
// numberMonth()

//6. Запросить 2 числа и вывести большее из них

// let requestTwoNumber = (numberOne, numberTwo)=>{
//     numberOne = +prompt('enter first number');
//     numberTwo = +prompt('enter second number');
//     numberOne > numberTwo ? console.log(numberOne): console.log(numberTwo)
// }

// requestTwoNumber()

// 7. Запросить 1 число и проверить, оно кратно 5 или нет

// let checkNumber = (number) => {
//     number = +prompt('enter number')
//     number % 5 === 0 ? console.log('кратно 5') : console.log('error')
// }

// checkNumber()

//8.Запросить у пользователя название планеты. Если пользователь ввел «Земля» или «земля», то вывести «Привет,
// землянин!», в остальных случаях вывести «Привет, инопланетянин!». 

// let checkHuman = (planet) => {
//     planet = prompt('enter your planet');
//     planet === 'Земля' || planet === 'земля' ? console.log('Привет,землянин!') :
//     console.log('Привет,инопланетянин!')
// }

// checkHuman()


//======================================================================

//1. Вывести # столько раз, сколько указал пользователь.

// let showResult = (number) => {
//     number = +prompt('enter number');
//     for (let i = 0; i < number; i++){
//         console.log('#')
//     }
// }
// showResult()


// 2. Пользователь ввел число, а на экран вывелись все числа
// от введенного до 0.

// let range = (number) => {
//     number = +prompt('enter number');      
//     for (let i = 0; i <= number; number--) {
//         console.log(number)        
//     }
// }
// range()

//3. Запросить число и степень. Возвести число в указанную
// степень и вывести результат.

// let requestNumberAndLevel = (number, level) => {
//     number = +prompt('enter number');
//     level = +prompt('enter level');
//     return number ** level
// }
// console.log(requestNumberAndLevel())

//4.Предлагать пользователю решить пример 2 + 2 * 2 до тех
// пор, пока он не решит его правильно.

// let result = (answer) => {
//     answer = +prompt('enter answer 2 + 2 * 2', 6)
//     for(;;){
//         if(answer === 6){
//            return 'Good'            
//         } else{
//             answer = +prompt('enter answer 2 + 2 * 2', 6)
//         }
//     }
// }

// console.log(result())

//5. Делить число 1000 на 2 до тех пор, пока не получится число
// меньше 50. Вывести это число и сколько делений произвели.



// let result = 1000; 
// let count = 0;
// while (result > 50) {
//     result = result / 2
//     count++    
// }
// console.log(`Произвели ${count} делений, последнее число: ${result}`)

//6. Вывести все числа от 1 до 100, которые кратные указанному
// пользователем числу

// let rangeNumbers = (numberFromUser)=>{
//     numberFromUser = +prompt('enter number')
//     for (let i = 1; i < 100; i++) {
//         if(i % numberFromUser === 0){
//             console.log(i)
//         }        
//     }
// }
// rangeNumbers()

//7.Вывести каждый 4-й элемент из указанного пользователем
// диапазона. Пользователь указывает минимальное и мак-
// симальное значения диапазона.

// let rangeCycle = (min, max) => {
//     let count = 0;
//     min = +prompt('enter start range cycle')
//     max = +prompt('enter end range cycle')
//     for (let i = min; min < max; i++) {
//         count++
//         if (count % 4 === 0) {
//             console.log(i)
//         }
//     }
// }
// rangeCycle()

//====================================================

// 1. Написать функцию, которая принимает 2 числа и возвращает меньшее из них

// let minNumber = (numberOne, numberTwo) => {
//      if(numberOne > numberTwo){
//          return numberTwo
//      }
//      if(numberOne < numberTwo){
//         return numberOne
//     }
// }
// console.log(minNumber(100,50))

//2.Написать функцию, которая возводит переданное число
// в указанную степень.

// let numberInLevel = (number, level) => {
//     return number ** level
// }
// console.log(numberInLevel(2,2))

//3. Написать функцию, которая принимает 2 числа и знак
// (+ - * /), считает пример и возвращает результат.

// let resultExpression = (numberOne, numberTwo, operator) => {
//     if (operator == '+') {
//         return numberOne + numberTwo
//     }
//     if (operator == '-') {
//         return numberOne - numberTwo
//     }
//     if (operator == '*') {
//         return numberOne * numberTwo
//     }
//     if (operator == '/') {
//         return numberOne / numberTwo
//     }
// }
// console.log(resultExpression(25,2,'/'))


//5.Написать функцию, которая принимает число и выводит
// таблицу умножения для этого числа. Вызовите функцию
// для всех чисел от 2 до 9.

// let tableMulti = (number) => {
//     for (let i = 1; i <= 9; i++){
//         console.log(`${number} * ${i} = ${number * i}`)
//     }
// }
// tableMulti(2)
// tableMulti(3)
// tableMulti(4)
// tableMulti(5)
// tableMulti(6)
// tableMulti(7)
// tableMulti(8)
// tableMulti(9)

//6.Написать функцию, которая принимает от 1 до 5 чисел и
// возвращает их сумму.
// let resultSum = (numberOne = 0, numberTwo = 0, numberThree = 0, numberFour = 0, numberFive = 0) => {
//     return numberOne + numberTwo + numberThree + numberFour + numberFive
// }
// console.log(resultSum(2,10,100))

//7.Написать функцию, которая принимает от 1 до 5 чисел и
// возвращает большее из них.
// let maxNumber = (a,b,c,d,e) => {
// return Math.max(+a,+b,+c,+d,+e)
// }
// console.log(maxNumber(10,5,111111,15,1000))

//8.Написать функцию, которая выводит все четные или не-
// четные числа, в указанном пользователем диапазоне. Какие
// числа выводить, определяется третьим параметром типа
// b o ol ( true – четные, false – нечетные).
// let positiveOrNegativeNumbers = (start, end, bool) => {
//     if (bool === false) {
//         for (let i = start; i < end; i++) {
//             if (i % 2 !== 0) {
//                 console.log(i)
//             }
//         }
//     } else if (bool === true) {
//         for (let i = start; i < end; i++) {
//             if (i % 2 === 0) {
//                 console.log(i)
//             }
//         }
//     }
// }
// positiveOrNegativeNumbers(10, 50, false)

//9.Написать функцию, которая принимает дату (день, месяц,
// год) и возвращает дату следующего дня в виде строки
// «дд.мм.гггг». Проверку на високосный год желательно
// написать отдельной функцией.

// let result = (date, month, year) => {
//     let newDate = +date + 1
// return `${newDate}.${month}.${year}`
// }
// console.log(result('23','03','1996'))


//===================================

// let offset = 0;
// function move() {
//     document.querySelector('.block').style.margin = offset + 'px';
//     offset = offset + 5;
//     if(offset > 100){
//         return true
//     }
//     setTimeout(move , 300);
//     ;
// }

// document.querySelector('button').onclick = move;
//=====================================================

const arrayRandomNumbers = [2, 4, 6, 12, 89123, 56, 87, 23, 111, 678]

//1. Функция принимает массив и выводит его на экран.

// let showArray = (arr) => {
//   alert(arr)
// }
// showArray(arrayRandomNumbers)

//2. Функция принимает массив и выводит только четные
// элементы.

// let showEvenElement = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     if(arr[i] % 2 === 0){
//       console.log(arr[i])
//     }    
//   }
// }
// showEvenElement(arrayRandomNumbers)

//3. Функция принимает массив и возвращает сумму всех
// элементов массива.

// let sumAllElement = (arr) => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     sum = sum + element
//   }
//   return sum
// }

// console.log(sumAllElement(arrayRandomNumbers))

//4.Функция принимает массив и возвращает его максималь-
// ный элемент.


//===============================================
//tasks from learn .js

// const styles = ['Джаз','Блюз'];
// console.log(styles)

// styles.push('Rock-n-roll')
// console.log(styles)

// styles[Math.floor((styles.length - 1) / 2)] = 'Классика';
// console.log(styles)

// styles.shift(styles[0])
// console.log(styles)

// styles.unshift('Рэп', 'Регги')
// console.log(styles)

// Напишите функцию sumInput(), которая:

// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

// let sumInput = () => {
//   let requestForUser;
//   let array = []
//   for (; ;) {
//     requestForUser = prompt('enter numbers');
//     if (requestForUser !== null && requestForUser !== '' && isFinite(requestForUser)) {
//       array.push(+requestForUser)
//     } else {
//       break
//     }
//   }
//   let sum = 0
//   for (let val of array) {
//     sum += val
//   }
//   return sum
// }

// console.log(sumInput())
// Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.

// Функция getMaxSubSum(arr) должна возвращать эту сумму.

// let array = [1, -2, 3, 4, -9, 6]
// //некорректно
// let getMaxSubSum1 = (arr) => {
//   let newArr = [];
//   let sum = 0;
//   for (let number of arr) {
//     if (number >= 0) {
//       newArr.push(number)
//     }
//   }
//   for (let val of newArr) {
//     sum += val
//   }
//   return sum
// }

// alert( getMaxSubSum1([100, -9, 2, -3, 5]) )

// //корректно
// function getMaxSubSum2(arr) {
//   let maxSum = 0;
//   let partialSum = 0;

//   for (let item of arr) { // для каждого элемента массива
//     partialSum += item; // добавляем значение элемента к partialSum
//     maxSum = Math.max(maxSum, partialSum); // запоминаем максимум на данный момент
//     if (partialSum < 0) partialSum = 0; // ноль если отрицательное
//   }

//   return maxSum;
// }
// alert( getMaxSubSum2([100, -9, 2, -3, 5]) )

// let arr = [1, 3, 4, 6, 10, 123]

// function addErrorClass(elementId) {
//     let element = document.getElementById(elementId);
//     element.className = 'error-input';
// }

// function addErrorClasssToAllInput() {
//     addErrorClass('first-name');
//     addErrorClass('last-name');
//     addErrorClass('address');
// }


// function addDefaultStyleInput(elementId) {
//     let element = document.getElementById(elementId);
//     element.className = 'default-input'
// }

// function AddDefault() {
//     addDefaultStyleInput('first-name')
// }


// // addErrorClass('last-name')

// // setTimeout(addErrorClasssToAllInput, 1000);

// // addErrorClasssToAllInput;

// let sendButton = document.getElementById('send-button');

// sendButton.addEventListener('click', addErrorClasssToAllInput )


// let sendButton2 = document.getElementById('send-button2')

// sendButton2.addEventListener('click', addDefaultStyleInput)



let arrayOfButtons = document.getElementsByClassName('operation-button')

console.log(arrayOfButtons)

let number1 = document.getElementById('number1');
let number2 = document.getElementById('number2');


let makeOperation = (operator) => {
    let getNumber1 = +number1.value;
    let getNumber2 = +number2.value;
    let result;
    if (operator == '+') {
        result = +getNumber1 + +getNumber2;
    } else if (operator == '-') {
        result = +getNumber1 - +getNumber2;
    } else if (operator == '*') {
        result = +getNumber1 * +getNumber2;
    } else if (operator == '/') {
        result = +getNumber1 / +getNumber2;
    }

    let getIdResult = document.getElementById('resultCalulators');
    getIdResult.innerHTML = result;
}

let onOperationButtonClick = (eventObject) => {

    let clicketElement = eventObject.currentTarget;
    let operation = clicketElement.innerHTML
    makeOperation(operation)
}

let addCommonEventListener = (i) => {
    arrayOfButtons[i].addEventListener('click', onOperationButtonClick);
}

for (let i = 0; i < arrayOfButtons.length; i++) {
    addCommonEventListener(i);
}







