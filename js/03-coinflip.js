let coinFlip = Math.round(Math.random());

let choice = prompt("Select 'Heads' or 'Tails' ");

if (coinFlip === 0) {
    if (choice === "heads") {
        alert("The flip was tails and you chose heads...you lose!");
    } else {
        alert("The flip was tails and you chose tails...you win!");
    }
} else {
    if (choice === "heads") {
        alert("The flip was heads and you chose heads...you win!");
    } else {
        alert("The flip was heads and you chose tails...you lose!");
    }
}