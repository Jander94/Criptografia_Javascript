const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let opcao;
let texto;
let numero;
let textoCriptografado;
const alfabeto = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
rl.question("1 - Criptografar \n2 - Descriptografar\n", (opt) => {
  opcao = opt;
  if (opcao == 1) {
    rl.question("Digite o texto: ", (txt) => {
      texto = txt;
      rl.question(
        "Digite um número de 0 a 20 para criptografar a mensagem: ",
        (num) => {
          numero = num;
          criptografar();
          rl.close();
        }
      );
    });
  } else if (opcao == 2) {
    rl.question("Digite o texto: ", (txt) => {
      texto = txt;
      rl.question(
        "Digite o número para descriptografar a mensagem: ",
        (num) => {
          numero = num;
          descriptografar();
          rl.close();
        }
      );
    });
  } else {
    console.log("Opção inválida");
    rl.close();
  }
});

const criptografar = () => {
  let arrayMsg = texto.split("");
  let arrayCritp = [];
  arrayMsg.map((l) => {
    if (l == " ") {
      arrayCritp.push(l);
    } else {
      let posicao = alfabeto.indexOf(l);
      arrayCritp.push(alfabeto[parseInt(posicao) + parseInt(numero)]);
    }
  });
  textoCriptografado = arrayCritp.join("");
  console.log("Texto criptografado:\n\n", textoCriptografado, "\n\n");
};

const descriptografar = () => {
  let arrayMsg = texto.split("");
  let arrayCritp = [];
  arrayMsg.map((l) => {
    if (l == " ") {
      arrayCritp.push(l);
    } else {
      let posicao = alfabeto.indexOf(l);
      arrayCritp.push(alfabeto[parseInt(posicao) - parseInt(numero)]);
    }
  });
  textoCriptografado = arrayCritp.join("");
  console.log("Texto descriptografado:\n\n", textoCriptografado, "\n\n");
};
