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

