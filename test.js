function clearConsoleAndGoNext() {
	alert("Следующее задание");
	console.clear();
}

// 1 задание
console.log(`1 задание - Вывести в консоль четное или нечетное`);
let x = prompt("Введите число", 0);
if (typeof x++ === "number" && typeof x !== "NaN") {
	x--;
	console.log(`${x} - ` + (x % 2 == 0 ? "четное" : "нечетное"));
} else {
	alert("Упс, кажется, вы ошиблись");
}

// 2 задание
clearConsoleAndGoNext();
console.log(
	`2 задание - вывести тип вводных данных, \nесли не boolean,number,string то Тип х не определен`
);

/* let values = [true, 0, "2", null, undefined];
let myTypes = ["boolean", "string", "number"];
for (let i = 0; i < values.length; i++) {
	let value = values[i];
	let valueType = typeof value;
	if (myTypes.includes(valueType)) {
		console.log(value + " - " + valueType);
	} else {
		console.log(value + " Тип x не определен");
	}
} */

function checkType(value) {
	let valueType = typeof value;
	let textValueType = "Тип x не определен";

	/* switch (valueType) {
		case "number":
			textValueType = valueType;
			break;
		case "string":
			textValueType = valueType;
			break;
		case "boolean":
			textValueType = valueType;
			break;
	} */

	//Мне кажется так эффективнее
	const types = ["number", "string", "boolean"];
	if (types.includes(valueType)) {
		textValueType = valueType;
	}

	return textValueType;
}

let valueToCheck = undefined;
console.log(checkType(valueToCheck));
/*
//3 задание
clearConsoleAndGoNext();
console.log(`3 задание - перевернуть строку Hello и вывести в консоль`);
function reverseStr(str) {
	let reverseStr = str.split("").reverse().join("");
	return reverseStr;
}

let initialStr = "Hello";
console.log(reverseStr(initialStr));

//4 задание
clearConsoleAndGoNext();
console.log(
	`4 задание - записать в переменную` +
		`\nслучайное число в диапазоне от 0 до 100`
);

// Решение которое мне понравилось в интернете
// function randomIntFromInterval(min, max) { // min and max included
// 	return Math.floor(Math.random() * (max - min + 1) + min)
// }

let randomNum = Math.floor(Math.random() * 101);
console.log(randomNum);

//5 задание
clearConsoleAndGoNext();
console.log(
	`5 задание - Дан произвольный массив.  ` +
		`\nНеобходимо вывести количество элементов массива,` +
		`\nзатем перебрать его и вывести в консоль каждый элемент массива.`
);

let elemArr = [1, 2, "Element", true];
console.log(
	`Количество элементов массива ${elemArr.length}` +
		`\nМассив [${elemArr.join(",")}]`
);

elemArr.map(function (item, index, array) {
	console.log(item);
});

//6 задание
clearConsoleAndGoNext();
console.log(
	`6 задание - Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль` +
		`\nРечь идёт не о двух рядом стоящих одинаковых элементах, а обо всех.` +
		`\nПроверить, все ли элементы в массиве одинаковые.`
);

let compareArrFirst = [1, 2, 3, null, "j", "k", "l"];
let compareArrSecond = [1, 3, 2, null, "j", "k", "l"];

function checkArrEqual(arr1, arr2, sort = false) {
	if (arr1 === arr2) return true;
	if (arr1 == null || arr2 == null) return false;
	if (arr1.length !== arr2.length) return false;

	let arr1Clone = [...arr1];
	let arr2Clone = [...arr2];

	if (sort !== false) {
		arr1Clone.sort();
		arr2Clone.sort();
	}
	for (var i = 0; i < arr1Clone.length; ++i) {
		if (arr1Clone[i] !== arr2Clone[i]) return false;
	}

	return true;
}

console.log(`Массив 1 - ${compareArrFirst.join(",")}`);
console.log(`Массив 2 - ${compareArrSecond.join(",")}`);
console.log(
	"Без сортировки " + checkArrEqual(compareArrFirst, compareArrSecond)
);
console.log(
	"С сортировкой " + checkArrEqual(compareArrFirst, compareArrSecond, true)
);

//7 задание
clearConsoleAndGoNext();
console.log(
	`7 задание - Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве.` +
		`\nЕсли в массиве есть нулевой элемент, то он учитывается и выводится отдельно.` +
		`\nПри выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.`
);

let elementArr = [
	1,
	2,
	3,
	"$",
	4,
	0,
	16,
	null,
	"null",
	typeof undefined,
	Boolean,
];

let oddValues = [];
let evenValues = [];
let zeroValues = [];
let otherValues = [];

elementArr.forEach((item, index, array) => {
	if (typeof item === "number") {
		if (item !== 0) {
			if (item % 2 === 0) {
				evenValues.push(item);
			} else {
				oddValues.push(item);
			}
		}

		if (item === 0) {
			zeroValues.push(item);
		}
	} else {
		otherValues.push(item);
	}
});

console.log(`Массив ` + elementArr.join(","));
console.log(`Нулевые ${zeroValues.length} шт. [${zeroValues.join(",")}]`);
console.log(`Нечетные ${oddValues.length} шт. [${oddValues.join(",")}]`);
console.log(`Четные ${evenValues.length} шт. [${evenValues.join(",")}]`);
console.log(`Другие ${otherValues.length} шт. [${otherValues.join(",")}]`);

//8 задание
clearConsoleAndGoNext();
console.log(
	`8 задание - Создайте произвольный массив Map. ` +
		`\nПолучите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».`
);

const map = new Map();
map.set("a", 1);
map.set("b", 2);
map.set("c", 3);

for (var [key, value] of map) {
	console.log(`Ключ — ${key}, значение — ${value}`);
}

Array.from(map, ([key, value]) => {
	console.log(`Ключ — ${key}, значение — ${value}`);
});
 */
