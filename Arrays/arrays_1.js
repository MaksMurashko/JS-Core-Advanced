/*
ВАРИАНТ: 1
Напишите функцию, которая принимает массив с числами 
и увеличивает каждое число из массива на 10 процентов.
*/ 

function increaseByTenPercent(arr) {
	var result = [];
  
	for (var i = 0; i < arr.length; i++) {
		var increasedValue = arr[i] * 1.1; // Увеличиваем значение на 10 процентов
		var roundedValue = increasedValue.toFixed(2); // Округляем до 2 знаков после запятой
		result.push(parseFloat(roundedValue)); // Преобразуем обратно в число и добавляем в массив
	}
  
	return result;
}

// Проверка функции increaseByTenPercent
function testIncreaseByTenPercent() {
	var numbers = [1, 2, 3, 4, 5];
	var expected = [1.1, 2.2, 3.3, 4.4, 5.5];
	var result = increaseByTenPercent(numbers);
  
	// Проверяем длину массивов
	if (result.length !== expected.length) {
		console.log('Тест не пройден: неправильная длина массива');
		return;
	}
  
	// Проверяем каждый элемент массива
	for (var i = 0; i < result.length; i++) {
		if (result[i] !== expected[i]) {
		console.log('Тест не пройден: неправильное значение элемента');
		return;
		}
	}
  
	console.log('Тест пройден: все значения увеличены на 10 процентов');
}
  
// Вызываем тестовую функцию
testIncreaseByTenPercent();
