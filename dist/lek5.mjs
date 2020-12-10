#!/usr/bin/env -S deno run
export function opp1(i = 10) {
	if (typeof i === "number") {
		for (let j = 0; j < i; j++) {
			console.log(`This is the ${j} iteretion`);
		}
	} else {
		throw new Error("Wrong type provided, please check your inputs");
	}
}
function opp2(array = [1, "lul", true]) {
	if (Array.isArray(array)) {
		for (let i = 0; i < array.length; i++) {
			console.log(`Index ${i}: ${array[i]}`);
		}
	} else {
		throw new Error("Wrong type provided, please check your inputs");
	}
}
function printArray(array = [1, "lul", true], isPrintBackwards = false) {
	if (Array.isArray(array)) {
		if (typeof isPrintBackwards != "boolean") {
			isPrintBackwards = true;
		}
		if (isPrintBackwards) {
			const reversed = [];
			for (let i = 0; i < array.length; i++) {
				reversed[i] = array[array.length - i - 1];
			}
			console.log(reversed);
		} else {
			console.log(array);
		}
	} else {
		throw new Error("Wrong type provided, please check your inputs");
	}
}
function sortNumbers(array = [3, 2, 5], isAscending = false) {
	if (Array.isArray(array)) {
		if (typeof isAscending != "boolean") {
			isAscending = true;
		}
		for (const i in array) {
			if (typeof array[i] != "number") {
				throw new Error("Wrong type provided, please check your inputs");
			}
		}
		if (isAscending) {
			for (let i = 0; i < array.length; i++) {
				for (let item = 0; item < array.length; item++) {
					let temp;
					if (array[item] > array[item + 1]) {
						temp = array[item + 1];
						array[item + 1] = array[item];
						array[item] = temp;
					}
				}
			}
			console.log(array);
		} else {
			console.log(array);
		}
	} else {
		throw new Error("Wrong type provided, please check your inputs");
	}
}
if (import.meta.main) {
	opp1(50);
	opp2([1, 2, "Geir", 5, "Luca"]);
	printArray([1, 2, 3], true);
	sortNumbers([9, 12, 5, 8, 0, 43, 23, 54], true);
	sortNumbers([1, 6, 8, 4, 6, 4, 7, 9, 3, 4, 2, 99], true);
}
export default {
	opp1,
	opp2,
	opp3: printArray,
	opp4: sortNumbers,
};
