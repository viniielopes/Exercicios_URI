var readline = require("readline");

var leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

leitor.question("", (numerofuncionario) => {
  leitor.question("", (quantidadehoratrabalhada) => {
    leitor.question("", (valorporhora) => {
      const salario = parseFloat(
        parseInt(quantidadehoratrabalhada) * parseFloat(valorporhora).toFixed(2)
      ).toFixed(2);
      console.log("NUMBER =", numerofuncionario);
      console.log("SALARY = U$", salario);
      leitor.close();
    });
  });
});
