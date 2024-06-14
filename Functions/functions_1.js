/*
ВАРИАНТ: 1
Напишите функцию, которая многократно
выполняет заданную операцию через
фиксированный интервал, используя
setInterval().
*/


function repeatOperation(operation, interval, repetitions) {
	var counter = 0;
	var intervalId;
  
	// Функция, которая будет вызывать заданную операцию
	function executeOperation() {
		operation();
		counter++;

		// Если достигнуто заданное количество повторений, останавливаем интервал
		if (counter === repetitions) {clearInterval(intervalId);}
	}
  
	// Запускаем интервал, вызывая функцию executeOperation через заданный интервал
	intervalId = setInterval(executeOperation, interval);
}

function printMessage() {console.log("Hello, world!");}

// Выполнять операцию 'printMessage' каждые 2 секунды, 5 раз
repeatOperation(printMessage, 2000, 5);
