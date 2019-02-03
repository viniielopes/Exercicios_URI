var readline = require("readline");

var leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let a = 0;
let b = 0;

leitor.question("", primeirovalor => {
  a = parseInt(primeirovalor);

  leitor.question("", segundovalor => {
    b = parseInt(segundovalor);
    console.log(`SOMA = ${a + b}`);

    leitor.close();
  });
});
