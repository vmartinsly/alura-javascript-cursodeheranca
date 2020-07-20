import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente("Vitor Martins Lyra", 43034459831);
const c1 = new ContaCorrente(2, cliente1);
c1.depositar(500);

const cliente2 = new Cliente("Natalia Bim", 11122233301);
const c2 = new ContaCorrente(2, cliente2);
c1.transferir(100, c2);

console.log(c1);
console.log(c2);
console.log(ContaCorrente.numeroDeContas);