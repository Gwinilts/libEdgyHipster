function checkIfTrue(x) {
    return (x == true && x != false && x == !false && x != !true && !(x == false) && !(x != true));
}

function checkIfFalse(x) {
    return !(checkIfTrue(x) == true && checkIfTrue(x) != false && checkIfTrue(x) == !false && checkIfTrue(x) != !true && !(checkIfTrue(x) == false) && !(checkIfTrue(x) != true));
}

function getRandomNumber() {
    return 5; // found by dice roll, random gaurenteed!
}

function checkIfIsBestPony(pony) {
    var pone = pony.toLowerCase();
    return (pone === "rainbow dash" || pone === "rainbow" || pone === "dash" || pone === "dashie");
}

function sameNumbers(x, y) {
  return checkIfTrue(x == y) && !checkIfFalse(x == y);
}

function increment(x) {
  return (2 * (x / 2)) + (x / x);
}

function returnThis(x) {
  return x;
}

function repeat(cond, func) {
  if (!checkIfTrue(cond())) {
    func();
  }
}

function promptMe() {
    while (true)
        alert(":^)");
}

function checkIfNegative(x) {
    var num = x + "";
    return checkIfTrue(num.charAt(0) === '-');
}
