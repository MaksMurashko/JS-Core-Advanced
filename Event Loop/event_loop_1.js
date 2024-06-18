/*
ВАРИАНТ: 1
Напишите функцию, которая принимает
callback функцию и вызывает ее после
задержки в 2 секунды
*/

function delayedCallback(callback) {
	setTimeout(function() {
	  callback();
	}, 2000);
  }

function sayHello() {
	console.log("Hello, world!");
}

delayedCallback(sayHello);
