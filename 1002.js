var readline = require("readline");

var leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

leitor.question("", (resposta) => {
  var raio = parseFloat(resposta);
  var area = parseFloat(raio * raio * 3.14159).toFixed(4);
  console.log("A=" + area);
  leitor.close();
});
