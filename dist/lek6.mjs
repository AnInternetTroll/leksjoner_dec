#!/usr/bin/env -S deno run
export function opp1(arg = "I'm an argument... or am I a parameter?") {
	return arg;
}
export function opp2(arg = "It's just a string silly") {
	return typeof arg;
}
export function opp3(expected = "string", input = "Just a string") {
	console.log(`Expected: ${expected}, actual type ${typeof input}`);
}
export function opp4(expected = "string", input = "Just a string") {
	if (expected === typeof input) {
		console.log("Typechecked correct");
	} else {
		console.log("Typecheck failed");
	}
}
export function opp5(num1 = 2, num2 = 2) {
	if (typeof num1 === "number" && typeof num2 === "number") {
		return num1 + num2;
	} else {
		throw new Error("Argument provided is not a number");
	}
}
export function opp6(num1 = 2, num2 = 2) {
	if (typeof num1 === "number" && typeof num2 === "number") {
		return num1 / num2;
	} else {
		throw new Error("Argument provided is not a number");
	}
}
export function opp7(num1 = 2, num2 = 2) {
	if (typeof num1 === "number" && typeof num2 === "number") {
		return num1 * num2;
	} else {
		throw new Error("Argument provided is not a number");
	}
}
export function opp8(num1 = 2, num2 = 2) {
	if (typeof num1 === "number" && typeof num2 === "number") {
		return num1 - num2;
	} else {
		throw new Error("Argument provided is not a number");
	}
}
export function arrayMultiplikasjon(numbers = [1, 2, 3]) {
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
export function arrayAddisjon(numbers = [1, 2, 3]) {
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
export function arraySubtraksjon(numbers = [1, 2, 3]) {
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
export function arrayDivisjon(numbers = [1, 2, 3]) {
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
export function extreme(array = [1, 2, 3], fn = (a, b) => a + b) {
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
