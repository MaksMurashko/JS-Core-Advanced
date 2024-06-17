/*
ВАРИАНТ: 1
Создайте класс под названием «Человек» со
свойствами имени, возраста и страны.
Включите метод для отображения сведений о
человеке. Создайте два экземпляра класса
«Человек» и отобразите их сведения.
*/

class Person {
	constructor(name, age, country) {
	  this.name = name;
	  this.age = age;
	  this.country = country;
	}
  
	displayInfo() {
	  console.log(`Name: ${this.name}, Age: ${this.age}, Country: ${this.country}`);
	}
}
  
const person1 = new Person("Anthony", 20, "UK");
const person2 = new Person("Павел", 21, "Беларусь");

person1.displayInfo();
person2.displayInfo();
