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