'use strict'
//!ЗАДАНИЕ 1
// var num = 1;
// num += 12;
// num -= 14;
// num *= 5;
// num /= 7;
// num++;
// num--;
// alert(num);

//!Задание 2
// let arr = ['a', 'b', 'c', 'd'];
// for (let i = 0; i < arr.length; i += 2) {
//     console.log(arr[i] + arr[i + 1]);
// }

//!3
// let a = [2, 5, 3, 9];
// let result = a[0] * a[1] + a[2] * a[3];
// console.log(result);
//!4
// var obj = { a: 1, b: 2, c: 3 };
// console.log(obj['c']);
// console.log(obj.c);
//!5
// var obj = { Коля: '1000', Вася: '500', Петя: '200' };
// console.log(obj.Коля);
// console.log(obj.Петя);
//!6
// let week = {
//     1: 'Monday',
//     2: "Tuesday",
//     3: "Wednesday",
//     4: 'Thursday',
//     5: 'Friday',
//     6: 'Saturday',
//     7: 'Sunday',
// };

// let day = prompt('введите цифрой какой сегодня день недели');
// alert("Today is " + week[day]);
//!7
// let arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// console.log(arr[1][0]);
//!8
// let obj = {
//     js: ['jQuery', 'Angular'],
//     php: 'hello',
//     css: 'world'
// };
// console.log(obj.js[1]);
//!9
// let arr = {
//     ru: ["пн", "вт", "ср", "чт", "пт", "сб", "вс"],
//     en: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"],
// };
// console.log(arr.ru[0], arr.en[3]);
//!10
// let lang = prompt('На каком языке?');
// let day = prompt('введите цифрой какой сегодня день недели');
// if (lang == 'ru') {
//     alert(arr.ru[day])
// } else
//     alert(arr.en[day]);
//!11
// function getRandomFloat(min, max) {
//     return Math.random() * (max - min) + min;
// }
// let a = getRandomFloat(1, 31);
// if (a < 11) {
//     alert("первая декада");
//     console.log(a.toFixed(1));
// } else if (a >= 11 && a <= 21) {
//     alert("вторая декада");
//     console.log(a.toFixed(1));
// } else if (a > 21) {
//     alert("третья декада");
//     console.log(a.toFixed(1));
// }
//!12
// let str = 'dbcdc';
// if (str[0] == 'a')
//     alert('nice');
// else alert('bad');
//!13
// let str = '144324';
// let a = +str[0] + +str[1] + +str[2];
// let b = +str[3] + +str[4] + +str[5];
// console.log(a, b);
// if (a == b)
//     alert('good');
// else
//     alert('bad');
//!While/for
//!14
// let i = 0,
//     sum = 0;
// while (i < 100) {
//     if (i % 2 == 0)
//         console.log(i);
//     sum += i;
//     i++;
// }
// console.log("sum = " + sum);
//!15
// let arr = [1, 2, 3, 4, 5];
// let result = 0;
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//     result += arr[i];
// }
// console.log(result);
//!16
// var obj = {
//     green: 'зеленый',
//     red: 'красный',
//     blue: 'голубой'
// };
// for (let color in obj) {
//     console.log(color + ":" + obj[color]);
// }
//!17
// let obj = {
//     Коля: 200,
//     Вася: 500,
//     Петя: 1000,
// };
// for (let name in obj) {
//     console.log(name + " зарплата " + obj[name] + " долларов");
// }
//!18 Вывести только числа начинающиеся с определенного
// let arr = [10, 20, 30, 500, 235, 3000, 7432, 41, 42, 300, 64, 11];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i].toString()[0] == '1' || arr[i].toString()[0] == '2' || arr[i].toString()[0] == '5') {
//         console.log(arr[i]);
//     }
// }
//ANCHOR
// console.log(arr.filter(num => ['1', '2', '5'].includes(num.toString()[0])));//функция определяющая с какой цифры начинается число
//!19 Вывести числа через '-'
// let str = ' ';
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i < arr.length; i++) {
//     str += arr[i] + "-";
// }
// console.log(str);
//!20 Выходные дни выделить жирным
// let out = document.querySelector('.out');

// let a = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

// for (let i = 0; i < a.length; i++) {
//     // out.innerHTML = `${a.slice(0, 5)},<strong>${a.slice(5, 7)}</strong>`
//     if (i > 4)
//         out.innerHTML += a[i].bold() + " ";
//     else
//         out.textContent += a[i] + " ";
// }
//!21 Выделить сегодняшний день курсивом
// let out = document.querySelector('.out');

// let a = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];


// let day = prompt("Какой сегодня день?");

// for (let i = 0; i < a.length; i++) {
//     if (a[i] == day)
//         out.innerHTML += a[i].italics() + " ";
//     else out.innerHTML += a[i] + " ";
// }

//!21
// let n = 1000,
//     num;
// for (let i = 0; n > 50; i++) {
//     n /= 2;
//     num = n;
// }
// console.log(num);

//!22 Математические функции

// let a = 99,
//     b = 99;
// let result = Math.pow(a, b);
// let result1 = a ** b;
// console.log(result);
// console.log(result1);
// console.log(Math.sqrt(245));

//!23
// let sum = 0,
//     sum2 = 0,
//     count = 0;
// let arr = [4, 2, 5, 19, 13, 0, 10];
// for (let i = 0; i < arr.length; i++) {
//     sum += Math.pow(arr[i], 3);
//     console.log(sum);
// }
// console.log(Math.sqrt(sum));
// console.log(Math.sqrt(379).toFixed(3));
// console.log(Math.max(91, 35, 43, 23, 12, 53, 134, 112, 43, 99));
// console.log(Math.min(91, 35, 43, 23, 12, 53, 134, 112, 43, 99));
// let min = 0,
//     max = 500;
// console.log(Math.round(Math.random(min, max) * (max - min + 1)) + min);

// let a = 17,
//     b = 52,
//     c = 0;
// c = a - b;
// console.log(Math.abs(c));

// for (let i = 0; i < arr.length; i++) {
//     sum2 += arr[i];
// }
// console.log(sum2 / arr.length);

//!24 
// let arr = [];
// for (let i = 0; i < 10; i++) {
//     arr[i] = Math.round(Math.random() * 100);
//     console.log(arr[i]);
// }

//!25 Найти факториал числа
// let fact = 1;
// let a = +prompt('Введите число');
// let count = a;
// for (let i = 1; i < a; i++) {
//     fact *= count--;
//     console.log('fact: ' + fact + ' count: ' + count);
// }

// function factorial(n) {
//     return (n != 1) ? n * factorial(n - 1) : 1;
// }
// alert(factorial(a));

//!26 Работа с регистром
// let str = "javascript";
// alert(str.toUpperCase());
// alert(str.toLowerCase());

//!27 Количество символов + вырежьте
// let str = 'я учу javascript!';
// console.log(str.length); //17
// console.log(str.substr(2, 3));
// console.log(str.substring(6, 16));
// console.log(str.slice(5, -7));

// let result;
// if (str.length > 10) {
//     result = str.slice(0, 10) + "...";
//     console.log(result);
// }
//!28 replace, split
// let str = 'я-учу-javascript';
// console.log(str.replace(/-/g, '!')); //глобальная замена '-' на '!'
// let arr = str.split("-");
// console.log(arr);
// let arr1 = str.split("");
// console.log(arr1);
// //
// let data = '2025-12-31';
// data = data.split('-');
// let newdata = data[2] + '.' + data[1] + '.' + data[0];
// console.log(newdata);
// //
// console.log(arr.join('+'))

//!29 каждый элемент массива с большой буквы
// let str = 'hello my friend';
// console.log(str[0].toUpperCase() + str.slice(1, 6) + str[6].toUpperCase() + str.slice(7, 9) + str[9].toUpperCase() + str.slice(10));
// //
// let st = 'var_new_dsa_dsa_fs_fgr';
// st = st.split('_');
// console.log(st);
// for (let i = 0; i < st.length; i++) {
//     let res = st[i];
//     res = res[0].toUpperCase() + res.slice(1);
//     st[i] = res;
//     console.log(st[i]);
// }
// let a = st.join('');
// console.log(a);

//!30 Объдинить массивы
let a = ['1', '2', '3'];
let b = ['6', '5', '4'];
let c = b.concat(a);
console.log(c);
c.reverse();
console.log(c); //3 2 1 4 5 6

a.push(1, 2, 3);
b.unshift(9, 8, 7);
console.log(a, b);

let arr = ['js', 'css', 'jq'];
let first = arr.shift();
console.log(first);
let last = arr.pop();
console.log(last);

let d = c.slice(0, 3);
console.log(d);
c.splice(1, 4);
console.log(c);

let arr1 = [1, 2, 3, 4, 5];
arr1.splice(3, 4, 'a', 'b', 'c'); //удаляет + добавляет
console.log(arr1);

let arr2 = [4, 2, 5, 1, 3, 7];
arr2.sort();
console.log(arr2); //!сортируется по первой цифре 1=13=154; 2=233=24

let obj = {
    a: 123,
    b: 13,
    c: 'hi'
};
console.log(Object.keys(obj)); //массив ключей объекта