#!/usr/bin/env -S deno run
export const opp1 = `/*
 * Yes or No
 * True or False
 * 1 or 0
 * Good or Bad
 * 
 * Only 2 choices
 */
`;
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
export const opp3 = "???";
export const opp4 = "To know what to expect";
export function opp5a() {
	var good = true;
	var bad = false;
	if (good == bad) {
		console.log("That’s the problem with drugs!");
	} else {
		console.log("Stay away from temptation!");
	}
}
export function opp5b() {
	var isLifeOnOtherPlanets = true;
	if (isLifeOnOtherPlanets == true) {
		console.log("There is life!");
	} else {
		console.log("The universe is boring!");
	}
}
export function opp6(ice = true) {
	if (ice) {
		console.log("Jippii");
	} else {
		console.log("Yuck!");
	}
}
export function opp7(name1 = "Jenny", name2 = "Johnny") {
	if (name1 == name2) {
		console.log(`[${name1}] and [${name2}] are the same`);
	} else {
		console.log(`[${name1}] and [${name2}] are not the same`);
	}
}
export function opp8(name1 = "Betty", name2 = "Roger", name3 = "Jon") {
	if (name1 === name2) {
		if (name2 === name3) console.log("All 3 names are the same");
		else console.log(`[${name1}] and [${name2}] are the same`);
	} else if (name1 === name3) {
		console.log(`[${name1}] and [${name3}] are the same`);
	} else if (name2 === name3) {
		console.log(`[${name2}] and [${name3}] are the same`);
	} else console.log("No names are alike");
}
if (import.meta.main) {
	opp5a();
	opp5b();
	opp6(false);
	opp6(true);
	opp7("Johnny", "Pappa");
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
