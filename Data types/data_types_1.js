/*
ВАРИАНТ:1
Напишите функцию для сравнения двух объектов, чтобы определить, 
содержит ли первый из них эквивалентные значения свойств по сравнению со вторым
*/ 

function areObjectsEqual(obj1, obj2) {
	// Сравниваем количество свойств в объектах
	if (Object.keys(obj1).length !== Object.keys(obj2).length) {
		return false;
	}

	// Проверяем каждое свойство
	for (let prop in obj1) {
		// Если значения свойств не эквивалентны, возвращаем false
		if (obj1[prop] !== obj2[prop]) {return false;}
	}
	// Если все свойства эквивалентны, возвращаем true
	return true;
}

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { a: 1, b: 2, c: 3 };
const obj3 = { a: 1, b: 2, c: 4 };

console.log(areObjectsEqual(obj1, obj2)); // true
console.log(areObjectsEqual(obj1, obj3)); // false
