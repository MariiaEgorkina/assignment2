
let score = parseInt(prompt("Collect the number between 1 and 100"));

console.log("Only numbers between 1 and 100 are accepted.");

    if (score >= 60 && score <= 69) {
console.log("You received a D.");
    }
else if (score >= 70 && score <= 79) {
    console.log("You recieved a C.");

}

else if (score >=80 && score <= 89) {
    console.log("You recieved a B.");
}
else if (score >= 90 && score <= 100) {
    console.log("You recieved an A.");
}
else if (score < 60) {
    console.log("You recieved a F.")
}