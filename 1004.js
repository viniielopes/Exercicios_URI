var readline = require("readline");

var leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

leitor.question("", (primeironumero) => {
  leitor.question("", (segundonumero) => {
    var produto = parseInt(primeironumero) * parseInt(segundonumero);
    console.log("PROD =", produto);
    leitor.close();
  });
});
