#!/usr/bin/env -S deno run
// @ts-nocheck This whole file will not be typechecked
// Due to diffrences between tsc and deno
// I decided to just not bother in this file
import lek1 from "./lek01.ts";
import lek2 from "./lek2.ts";
import lek3 from "./lek3.ts";
import lek4 from "./lek4.ts";
import lek5 from "./lek5.ts";
import lek6 from "./lek6.ts";

console.log("-----Leksjon 0 og 1-----");
lek1.opp1();
lek1.opp2();
lek1.opp3();
lek1.opp4();
console.log(lek1.opp5);
lek1.opp6();
lek1.opp7();
lek1.opp8();
console.log("-----Leksjon 2-----");
console.log(lek2.opp1);
console.log(lek2.opp2);
console.log(lek2.opp3);
console.log(lek2.opp4);
lek2.opp5.opp5a();
lek2.opp5.opp5b();
lek2.opp6();
lek2.opp7();
lek2.opp8();
console.log("-----Leksjon 3-----");
lek3.opp1();
lek3.opp2();
lek3.opp3();
console.log("-----Leksjon 4-----");
lek4.opp1();
console.log("-----Leksjon 5-----");
lek5.opp1();
lek5.opp2();
lek5.opp3();
lek5.opp4();
console.log("-----Leksjon 6-----");
console.log(lek6.opp1());
lek6.opp2();
lek6.opp3();
console.log(lek6.opp5());
lek6.opp6();
lek6.opp7();
lek6.opp8();
lek6.opp9.arrayAddisjon();
lek6.opp10();

console.log(lek6.opp10());
