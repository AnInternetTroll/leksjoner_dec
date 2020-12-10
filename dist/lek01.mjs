#!/usr/bin/env -S deno run
export function helloWorld() {
	console.log("Hello, world!");
}
var fu = "FU!";
export function foo() {
	console.log(fu);
}
export function localFu() {
	const foo = "Fu";
	console.log(foo);
}
export function argFunc(arg = "Hello, arg!") {
	console.log(arg);
}
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
export function argFunc2(arg = "Hello, arg!") {
	console.log(arg);
}
export function welcomeName(arg = "John") {
	console.log(`Welcome, ${arg}`);
}
export function welcomeDouble(name1 = "Lara", name2 = "Croft") {
	welcomeName(name1);
	welcomeName(name2);
}
if (import.meta.main) {
	helloWorld();
	foo();
	localFu();
	argFunc("Boop");
	welcomeName("Jason");
	welcomeDouble("Andreas", "Geir");
}
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
