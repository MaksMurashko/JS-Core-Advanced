/*
ВАРИАНТ: 1
Напишите функцию, которая принимает
число в качестве параметра и выдает
пользовательскую ошибку, если число не
является целым числом
*/

function checkInteger(num) {
	if (!Number.isInteger(num)) {
	  throw new Error("Ошибка: Введенное значение должно быть целым числом.");
	}
	return num;
  }

try {
	const result1 = checkInteger(10);
	console.log(result1); // Output: 10

	const result2 = checkInteger(3.14);
	console.log(result2);
} 
catch (error) {
	console.error(error.message);
}
