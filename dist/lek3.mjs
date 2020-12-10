#!/usr/bin/env -S deno run
export function opp1() {
	let i = 0;
	while (i < 100) {
		console.log(i);
		i++;
	}
}
export function opp2(arg = 100) {
	let i = 0;
	while (i < arg) {
		console.log(i);
		i++;
	}
}
export function opp3(min = 0, max = 100) {
	while (min < max) {
		console.log(min);
		min++;
	}
}
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
