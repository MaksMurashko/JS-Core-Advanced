/*
ВАРИАНТ: 1
Напишите функцию, которая использует
async/await для загрузки данных с удаленного
сервера (например, с помощью API) и
возвращает полученный результат.
*/

async function fetchBookData(apiKey, query) {
	try {
		const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`);
		if (!response.ok) {
			throw new Error(`HTTP error ${response.status}`);
		}
		const data = await response.json();
		if (data.totalItems === 0) {
			console.log('Извините, не удалось найти ни одной книги по вашему запросу.');
		} else {
			return data;
		}
	} catch (error) {
		console.error('Ошибка при загрузке данных:', error);
		throw error;
	}
  }
  
async function main() {
	try {
		const bookData = await fetchBookData('AIzaSyCI_B28-8QZokqkrYuq-nwnG1NzXL9E6g8','javascript programming');
		if (bookData) {
		const bookTitles = bookData.items.slice(0, 10).map(item => item.volumeInfo.title);
		console.log(bookTitles);
		}
	} catch (error) {
		console.error('Ошибка:', error);
	}
}
  
main();
