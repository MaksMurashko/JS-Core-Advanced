/*
ВАРИАНТ: 1
Напишите функцию, выполняющую серию
асинхронных операций последовательно,
используя Promises
 */

function executeSequentialAsync(tasks) {
	return tasks.reduce((promise, task) => {
	  return promise.then(() => {
		return new Promise((resolve, reject) => {
		  task()
			.then(result => {
			  console.log(`Задача выполнена: ${result}`);
			  resolve();
			})
			.catch(error => {
			  console.error(`Ошибка: ${error}`);
			  reject(error);
			});
		});
	  });
	}, Promise.resolve());
  }

const tasks = [
	() => new Promise((resolve, reject) => {
		setTimeout(() => {
		resolve('Задача 1 выполнена');
		}, 2000);
	}),
	() => new Promise((resolve, reject) => {
		setTimeout(() => {
		resolve('Задача 2 выполнена');
		}, 1000);
	}),
	() => new Promise((resolve, reject) => {
		setTimeout(() => {
		reject(new Error('Задача 3 не выполнена'));
		}, 3000);
	}),
	() => new Promise((resolve, reject) => {
		setTimeout(() => {
		resolve('Задача 4 выполнена');
		}, 1500);
	})
];

executeSequentialAsync(tasks)

.then(() => {
	console.log('Все задачи выполнены успешно');
})
.catch(error => {
	console.error('Произошла ошибка:', error);
});
