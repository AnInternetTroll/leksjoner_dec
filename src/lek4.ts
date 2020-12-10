#!/usr/bin/env -S deno run
// Opp1
const dwarves: string[] = ["Ori", "Kili", "Fili", "Thorin", "Bombur"];
/**
 * An all in one function
 * @param {string[]} array The array that should be used for the task
 * @returns {void} Logs all items
 */
export function logArray(array: string[] = dwarves): void {
	// Opp3
	// Check if array
	if (Array.isArray(array)) {
		// Opp2
		// Iterate through Array
		let i = 0;
		while (i < array.length) {
			console.log(array[i]);
			i++;
		}

		// Opp5
		// Log the length of the array
		console.log(array.length);

		// Log the array reversed
		// console.log(array.reverse());

		// Opp6
		// More complicated
		const reversed: string[] = [];
		// For loop
		/*
		for (let i: number = 0; i < array.length; i++) {
			reversed[i]= array[array.length - i - 1];
			// reversed.push(array[array.length - i - 1]);
		}
		*/
		// While loop
		let j = 0;
		while (j < array.length) {
			reversed[j] = array[array.length - j - 1];
			j++;
		}
		console.log(reversed);
	} else {
		// Mean response
		console.log("THIS IS NOT AN ARRAY");
	}
}
// @ts-ignore Deno feature and kind of node feature
// See https://github.com/nodejs/modules/issues/274 for node
if (import.meta.main) {
	logArray(dwarves);
	// @ts-ignore Both of the following are required by the task
	logArray("lel");
	// @ts-ignore So we have to tell typescript to ignore this error
	logArray(123);
}
export default {
	opp1: logArray,
};
