#!/usr/bin/env -S deno run
const dwarves = ["Ori", "Kili", "Fili", "Thorin", "Bombur"];
export function logArray(array = dwarves) {
	if (Array.isArray(array)) {
		let i = 0;
		while (i < array.length) {
			console.log(array[i]);
			i++;
		}
		console.log(array.length);
		const reversed = [];
		let j = 0;
		while (j < array.length) {
			reversed[j] = array[array.length - j - 1];
			j++;
		}
		console.log(reversed);
	} else {
		console.log("THIS IS NOT AN ARRAY");
	}
}
if (import.meta.main) {
	logArray(dwarves);
	logArray("lel");
	logArray(123);
}
export default {
	opp1: logArray,
};
