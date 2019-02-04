var readline = require("readline");

var leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

leitor.question("", (a) => {
  leitor.question("", (b) => {
    leitor.question("", (c) => {
      leitor.question("", (d) => {
        const diferenca = parseInt(a) * parseInt(b) - parseInt(c) * parseInt(d);
        console.log("DIFERENCA =", diferenca);
        leitor.close();
      });
    });
  });
});
