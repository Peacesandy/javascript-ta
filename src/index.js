// complete the function
function prime (num) {
  


 num = parseInt(prompt("Enter a number greater than one: "));
let primenumber = true;


if (num === 1) {
    console.log("1 is not a prime number.");
}


else if (num > 1) {

    
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            primenumber = false;
            break;
        }
    }

    if (primenumber) {
        console.log(`${num} is a prime number`);
    } else {
        console.log(`${num} is a not prime number`);
    }
}


else {
    console.log("The number is not a prime number.");
}
}

function solution (arg) {
  return prime(arg);
}

if (typeof require !== "undefined" && require.main === module) {
  if (process.argv.length <= 2) {
    throw Error("Require argument");
  }

  const arg = process.argv[2];
  console.log(solution(arg));
}

module.exports = { solution };
