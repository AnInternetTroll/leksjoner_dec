#!/usr/bin/env -S deno run
/**
 * A function that logs 100 numbers
 * @returns {void} Logs numbers
 */
export function opp1(): void {
	let i = 0;
	while (i < 100) {
		console.log(i);
		i++;
	}
}
/**
 * Log `arg` amount of numbers
 * @param {number} arg How many munbers to log
 * @returns {void} Logs to the console
 */
export function opp2(arg = 100): void {
	let i = 0;
	while (i < arg) {
		console.log(i);
		i++;
	}
}
/**
 * Log all numbers between `min` and `max`
 * @param {number} min Between `min`
 * @param {number} max and `max`
 * @returns {void} Logs to the console
 */
export function opp3(min = 0, max = 100): void {
	while (min < max) {
		console.log(min);
		min++;
	}
}
// @ts-ignore Deno feature and kind of node feature
// See https://github.com/nodejs/modules/issues/274 for node
if (import.meta.main) {
	opp1();
	opp2(20);
	opp3(5, 15);
}
export default {
	opp1,
	opp2,
	opp3,
};
