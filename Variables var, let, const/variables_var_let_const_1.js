function testVariables() {
	// Блок кода
	{
		// var
		var varX = 1;
		console.log("Внутри блока (var):", varX); // 1

		// let
		let letX = 2;
		console.log("Внутри блока (let):", letX); // 2

		// const
		const constX = 3;
		console.log("Внутри блока (const):", constX); // 3
	}
  
	// Обращение к переменным снаружи блока
	
	try {
		console.log("Снаружи блока (var):", varX); // 1
	} catch (error) {
		console.log("Ошибка:", error.message);
	}

	try {
		console.log("Снаружи блока (let):", letX); // ReferenceError: letX is not defined
	} catch (error) {
		console.log("Ошибка:", error.message);
	}

	try {
		console.log("Снаружи блока (const):", constX); // ReferenceError: constX is not defined
	} catch (error) {
		console.log("Ошибка:", error.message);
	}
}
  
testVariables();
