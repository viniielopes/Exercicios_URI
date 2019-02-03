var readline = require("readline");

var leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var raio = 1.25;
var area = 1.25;

leitor.question("", resposta => {
  raio = parseFloat(resposta).toFixed(2);
  area = parseFloat(raio * raio * 3.14159);
  console.log(`A=${parseFloat(area).toFixed(4)}`);
  leitor.close();
});
