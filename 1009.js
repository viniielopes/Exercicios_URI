var readline = require("readline");

var leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

leitor.question("", (nomevendedor) => {
  leitor.question("", (salariofixo) => {
    leitor.question("", (montantetotal) => {
      const total = (
        parseFloat(salariofixo) +
        parseFloat(montantetotal) * (15 / 100)
      ).toFixed(2);

      console.log("TOTAL = R$", total);
      leitor.close();
    });
  });
});
