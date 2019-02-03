var readline = require("readline");

var leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let A = 0;
let B = 0;

leitor.question("", primeiro => {
  A = parseInt(primeiro);
  leitor.question("", segundo => {
    B = parseInt(segundo);
    console.log(`X = ${A + B}`);
    leitor.close();
  });
});
