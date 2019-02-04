var readline = require("readline");

var leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const peso1Numero = 3.5;
const peso2Numero = 7.5;

leitor.question("", (primeironumero) => {
  leitor.question("", (segundonumero) => {
    const media =
      (parseFloat(primeironumero).toFixed(1) * peso1Numero +
        parseFloat(segundonumero).toFixed(1) * peso2Numero) /
      (peso1Numero + peso2Numero);
    console.log("MEDIA =", parseFloat(media).toFixed(5));
    leitor.close();
  });
});
