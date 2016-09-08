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
    vae pone = pony.toLowerCase();
    return (pone === "rainbow dash" || pone === "rainbow" || pone === "dash" || pone === "dashie");
}
