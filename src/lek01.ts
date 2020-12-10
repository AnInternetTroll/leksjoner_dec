#!/usr/bin/env -S deno run
/** @returns {void} Hello world! */
export function helloWorld(): void {
	console.log("Hello, world!");
}
var fu = "FU!";
/** @returns {void} Logs a global variable */
export function foo(): void {
	console.log(fu);
}
/** @returns {void} Log a local variable */
export function localFu(): void {
	const foo = "Fu";
	console.log(foo);
}
/**
 * Log the argument
 * @param {string | number | boolean} arg What to log
 * @returns {void} Logs `arg` to the console
 */
export function argFunc(arg: string | number | boolean = "Hello, arg!"): void {
	console.log(arg);
}
/** @var opp5 Sloppy explentation about what a scope is */
export const opp5 = `{
	let varName: string = "Hello";
	console.log(varName);
}
console.log(varName); // Error, varName not found
{
	var varName: string = "Hello";
	console.log(varName);
}
console.log(varName); // Not an error
`;
/**
 * Log the argument
 * @param {string | number | boolean} arg What to log
 * @returns {void} Logs `arg` to the console
 */
export function argFunc2(arg: string | number | boolean = "Hello, arg!"): void {
	console.log(arg);
}
/**
 * Welcome a person
 * @param {string} arg A name
 * @returns {void} Logs the greeting
 */
export function welcomeName(arg = "John"): void {
	console.log(`Welcome, ${arg}`);
}
/**
 * Double greets
 * @param {string} name1 First person to greet
 * @param {string} name2 Second person to greet
 * @returns {void} Logs the greetings
 */
export function welcomeDouble(name1 = "Lara", name2 = "Croft"): void {
	welcomeName(name1);
	welcomeName(name2);
}
// @ts-ignore Deno feature and kind of node feature
// See https://github.com/nodejs/modules/issues/274 for node
if (import.meta.main) {
	helloWorld();
	foo();
	localFu();
	argFunc("Boop");
	welcomeName("Jason");
	welcomeDouble("Andreas", "Geir");
}

// Opp8
// I suck
export default {
	opp1: helloWorld,
	opp2: foo,
	opp3: localFu,
	opp4: argFunc,
	opp5,
	opp6: argFunc2,
	opp7: welcomeName,
	opp8: welcomeDouble,
};
