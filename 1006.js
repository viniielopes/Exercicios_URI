var readline = require("readline");

var leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const peso1Numero = 2.0;
const peso2Numero = 3.0;
const peso3numero = 5.0;

leitor.question("", (primeironumero) => {
  leitor.question("", (segundonumero) => {
    leitor.question("", (terceironumero) => {
      const media =
        (parseFloat(primeironumero).toFixed(2) * peso1Numero +
          parseFloat(segundonumero).toFixed(2) * peso2Numero +
          parseFloat(terceironumero).toFixed(2) * peso3numero) /
        (peso1Numero + peso2Numero + peso3numero);
      console.log("MEDIA =", parseFloat(media).toFixed(1));
      leitor.close();
    });
  });
});
