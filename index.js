import {Cliente} from "./Cliente.js";
import {Conta} from "./Conta.js";

const cliente1 = new Cliente("Vitor Martins Lyra", 43034459831);
const c1 = new Conta(2, cliente1);
c1.depositar(500);

console.log(c1);
console.log("Numero total de contas: ", Conta.numeroDeContas);