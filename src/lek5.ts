#!/usr/bin/env -S deno run
/**
 * A for loop example
 * @param {number} i
 * @returns {void} Logs `i` iteretions
 */
export function opp1(i = 10): void {
	if (typeof i === "number") {
		for (let j = 0; j < i; j++) {
			console.log(`This is the ${j} iteretion`);
		}
	} else {
		throw new Error("Wrong type provided, please check your inputs");
	}
}
/**
 * Iterate through an array and log each item
 * @param {array: (string | number | boolean)[]} array
 * @returns {void} Logs each item in the array
 */
function opp2(array = [1, "lul", true]): void {
	if (Array.isArray(array)) {
		for (let i = 0; i < array.length; i++) {
			console.log(`Index ${i}: ${array[i]}`);
		}
	} else {
		throw new Error("Wrong type provided, please check your inputs");
	}
}
/**
 * Iterate through an array and log each item
 * @param {(string | number | boolean)[]} array The array that should be logged through
 * @param {boolean} isPrintBackwards Should the array be printed backwards?
 * @returns {void} Logs each item in the array
 */
function printArray(array = [1, "lul", true], isPrintBackwards = false): void {
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
/**
 * Iterate through an array and log each item
 * @param {number[]} array The array that should be logged through
 * @param {boolean} isAscending Should the array be sorted?
 * @returns {void} Logs each item in the array
 */
function sortNumbers(array: number[] = [3, 2, 5], isAscending = false): void {
	if (Array.isArray(array)) {
		if (typeof isAscending != "boolean") {
			isAscending = true;
		}
		for (const i in array) {
			if (typeof array[i] != "number") {
				throw new Error("Wrong type provided, please check your inputs");
			}
		}

		for (let i = 0; i < array.length; i++) {
			for (let item = 0; item < array.length; item++) {
				let temp: number;
				if (array[item] > array[item + 1]) {
					temp = array[item + 1];
					array[item + 1] = array[item];
					array[item] = temp;
				}
			}
		}
		if (isAscending) {
			console.log(array);
		} else {
			const reversed: number[] = [];
			for (let i = 0; i < array.length; i++) {
				reversed[i] = array[array.length - i - 1];
			}
			console.log(reversed);
		}
	} else {
		throw new Error("Wrong type provided, please check your inputs");
	}
}
// See https://github.com/nodejs/modules/issues/274 for node
// @ts-ignore Deno feature and kind of node feature
if (import.meta.main) {
	opp1(50);
	opp2([1, 2, "Geir", 5, "Luca"]);
	printArray([1, 2, 3], true);
	sortNumbers([9, 12, 5, 8, 0, 43, 23, 54], true);
	sortNumbers([1, 6, 8, 4, 6, 4, 7, 9, 3, 4, 2, 99], false);
}
export default {
	opp1,
	opp2,
	opp3: printArray,
	opp4: sortNumbers,
};
