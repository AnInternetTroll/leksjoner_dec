#!/usr/bin/env -S deno run
/** @var opp1 The first task's explenation */
export const opp1 = `/*
 * Yes or No
 * True or False
 * 1 or 0
 * Good or Bad
 * 
 * Only 2 choices
 */
`;
/** @var opp2 The second task's explenation */
export const opp2 = `
/*
 * false => false
 * "" => false
 * 0 => false
 * null => false
 *
 * true => true
 * "a" => true
 * 1< => true
 * [] => true
 * {} => true
 */
`;
/** @var opp3 I have no idea */
export const opp3 = "???";
// Typechecking for noobs
// Typescript ftw
/** @var opp4 Typescript is pretty cool */
export const opp4 = "To know what to expect";

/**
 * An example function from the task
 * @returns {void} The output is logged to the console
 */
export function opp5a(): void {
	var good = true;
	var bad = false;
	// @ts-ignore true == false will always be false so typescript throws an error
	// Take it up with the teacher
	if (good == bad) {
		console.log("That’s the problem with drugs!");
	} else {
		console.log("Stay away from temptation!");
	}
}
/**
 * An example function from the task
 * @returns {void} The output is logged to the console
 */
export function opp5b(): void {
	var isLifeOnOtherPlanets = true;
	if (isLifeOnOtherPlanets == true) {
		console.log("There is life!");
	} else {
		console.log("The universe is boring!");
	}
}

/**
 * If the value is true be happy, else be sad
 * @param {boolean} ice Ice cream or no ice cream
 * @returns {void} The output is logged to the console
 */
export function opp6(ice = true): void {
	if (ice) console.log("Jippii");
	else console.log("Yuck!");
}
/**
 * Check if `name1` is the same as `name2`
 * @param {string} name1 First name
 * @param {string} name2 Second name
 * @returns {void} The output is logged to the console
 */
export function opp7(name1 = "Jenny", name2 = "Johnny"): void {
	if (name1 == name2) console.log(`[${name1}] and [${name2}] are the same`);
	else console.log(`[${name1}] and [${name2}] are not the same`);
}
/**
 * Check if `name1`, `name2` and `name3` are the same
 * @param {string} name1 First name
 * @param {string} name2 Second name
 * @param {string} name3 Third name
 * @returns {void} The output is logged to the console
 */
export function opp8(name1 = "Betty", name2 = "Roger", name3 = "Jon"): void {
	if (name1 === name2)
		if (name2 === name3) console.log("All 3 names are the same");
		else console.log(`[${name1}] and [${name2}] are the same`);
	else if (name1 === name3)
		console.log(`[${name1}] and [${name3}] are the same`);
	else if (name2 === name3)
		console.log(`[${name2}] and [${name3}] are the same`);
	else console.log("No names are alike");
}
// @ts-ignore Deno feature and kind of node feature
// See https://github.com/nodejs/modules/issues/274 for node
if (import.meta.main) {
	opp5a();
	opp5b();
	opp6(false);
	opp6(true);
	opp7("Johnny", "Pappa");
	opp8();
}
export default {
	opp1,
	opp2,
	opp3,
	opp4,
	opp5: { opp5a, opp5b },
	opp6: opp6,
	opp7: opp7,
	opp8: opp8,
};
