import { Cliente } from "./Cliente.js";

export class Conta {
    constructor(agencia, cliente) {
        this._agencia = agencia;
        this._cliente = cliente;
        this._saldo = 0;
        Conta.numeroDeContas++;
    }
    static numeroDeContas = 0;
    
    set cliente(novoCliente) {
        if(novoCliente instanceof Cliente) {        
            this.cliente = novoCliente;
        }
    }

    get cliente() {
        return this.cliente;
    }

    get saldo() {
        return this._saldo;
    }
    
    depositar(valor) {
        if(valor <= 0) return;
        this._saldo += valor;
    }

    sacar(valor) {
        if(valor <= 0) return;
        this._saldo -= valor;
    }

    transferir(valorATransferir, contaDestino) {
        this.sacar(valorATransferir);
        contaDestino.depositar(valorATransferir);
    }
}
