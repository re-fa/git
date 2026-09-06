let x = "global";

function test() {
    let x = "local";
    console.log(x);
}

test();
console.log(x);
