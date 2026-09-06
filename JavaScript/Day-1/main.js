let x = "global";

function test() {
    let x = "local";
    console.log(x);
}

test();
console.log(x);

let a =10;
let b =5;

function calc(num, num2, unit) {
	console.log(`square area is : ${num*num2}${unit}`);
};

calc(a, b, "m²");
