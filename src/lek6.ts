#!/usr/bin/env -S deno run
/**
 * Returns the argument
 * @param {string | number | boolean} arg
 * @returns {string | number | boolean} Returns the argument
 */
export function opp1(
	arg: string | number | boolean = "I'm an argument... or am I a parameter?",
): string | number | boolean {
	return arg;
}
/**
 * Checks the type of arg
 * @param {string | number | boolean} arg
 * @returns {string} Returns the type
 */
export function opp2(
	arg: string | number | boolean = "It's just a string silly",
): string {
	return typeof arg;
}
/**
 * Checks if `input`'s type is `expected`
 * @param {string} expected
 * @param {string | number | boolean} input
 * @returns {void} Logs the result to the console
 */
export function opp3(
	expected = "string",
	input: string | number | boolean = "Just a string",
): void {
	console.log(`Expected: ${expected}, actual type ${typeof input}`);
}
/**
 * Typechecking but worse
 * @param {"string" | "number" | "boolean"} expected
 * @param {string | number | boolean} input
 * @returns {void} Logs the result to the console
 */
export function opp4(
	expected: "string" | "number" | "boolean" = "string",
	input: string | number | boolean = "Just a string",
): void {
	if (expected === typeof input) {
		console.log("Typechecked correct");
	} else {
		console.log("Typecheck failed");
	}
}
/**
 * Adds x with y
 * @param {number} x
 * @param {number} y
 * @returns {number} Returns the result
 */
export function opp5(num1 = 2, num2 = 2): number {
	if (typeof num1 === "number" && typeof num2 === "number") {
		return num1 + num2;
	} else {
		throw new Error("Argument provided is not a number");
	}
}
/**
 * Divides y from x
 * @param {number} x
 * @param {number} y
 * @returns {number} Returns the result
 */
export function opp6(num1 = 2, num2 = 2): number {
	if (typeof num1 === "number" && typeof num2 === "number") {
		return num1 / num2;
	} else {
		throw new Error("Argument provided is not a number");
	}
}
/**
 * Multiplies x with y
 * @param {number} x
 * @param {number} y
 * @returns {number} Returns the result
 */
export function opp7(num1 = 2, num2 = 2): number {
	if (typeof num1 === "number" && typeof num2 === "number") {
		return num1 * num2;
	} else {
		throw new Error("Argument provided is not a number");
	}
}
/**
 * Subtract y from x
 * @param {number} x
 * @param {number} y
 * @returns {number} Returns the result
 */
export function opp8(num1 = 2, num2 = 2): number {
	if (typeof num1 === "number" && typeof num2 === "number") {
		return num1 - num2;
	} else {
		throw new Error("Argument provided is not a number");
	}
}
/**
 * Multiplies all elements in the array
 * @param {number[]} array
 * @returns {number} Returns the result
 */
export function arrayMultiplikasjon(numbers: number[] = [1, 2, 3]): number {
	if (Array.isArray(numbers)) {
		let output = numbers[0];
		for (let i = 1; i < numbers.length; i++) {
			output = output * numbers[i];
		}
		return output;
	} else {
		throw new Error("Argument provided is not a number");
	}
}
/**
 * Adds all elements in the array
 * @param {number[]} array
 * @returns {number} Returns the result
 */
export function arrayAddisjon(numbers: number[] = [1, 2, 3]): number {
	if (Array.isArray(numbers)) {
		let output = numbers[0];
		for (let i = 1; i < numbers.length; i++) {
			output = output + numbers[i];
		}
		return output;
	} else {
		throw new Error("Argument provided is not a number");
	}
}
/**
 * Subtracts all elements in the array
 * @param {number[]} array
 * @returns {number} Returns the result
 */
export function arraySubtraksjon(numbers: number[] = [1, 2, 3]): number {
	if (Array.isArray(numbers)) {
		let output = numbers[0];
		for (let i = 1; i < numbers.length; i++) {
			output = output - numbers[i];
		}
		return output;
	} else {
		throw new Error("Argument provided is not a number");
	}
}

/**
 * Divides all elements in the array
 * @param {number[]} array
 * @returns {number} Returns the result
 */
export function arrayDivisjon(numbers: number[] = [1, 2, 3]): number {
	if (Array.isArray(numbers)) {
		let output = numbers[0];
		for (let i = 1; i < numbers.length; i++) {
			output = output / numbers[i];
		}
		return output;
	} else {
		throw new Error("Argument provided is not a number");
	}
}
/**
 * Uses fn on all elements in the array
 * @param {number[]} array
 * @param {(a: number, b: number) => number} fn
 * @returns {number} Returns the result
 */
export function extreme(
	array: number[] = [1, 2, 3],
	fn = (a: number, b: number): number => a + b,
): number {
	let output = array[0];
	if (Array.isArray(array) && typeof fn === "function") {
		for (let i = 1; i < array.length; i++) {
			output = fn(output, array[i]);
		}
	} else {
		throw new Error("Argument provided is not an array or a function");
	}
	return output;
}
// @ts-ignore Deno feature and kind of node feature
// See https://github.com/nodejs/modules/issues/274 for node
if (import.meta.main) {
	console.log(opp1());
	console.log(opp2());
	opp3();
	console.log(opp5());
	console.log(opp6());
	console.log(opp7());
	console.log(opp8());
	console.log(arrayAddisjon());
	console.log(arrayDivisjon());
	console.log(arrayMultiplikasjon());
	console.log(arraySubtraksjon());
	console.log(extreme());
}
/**
 * @var tasks Default export consistent with all other modules
 */
export default {
	opp1,
	opp2,
	opp3,
	opp4,
	opp5,
	opp6: opp6,
	opp7: opp7,
	opp8: opp8,
	opp9: { arrayAddisjon, arrayDivisjon, arrayMultiplikasjon, arraySubtraksjon },
	opp10: extreme,
};
