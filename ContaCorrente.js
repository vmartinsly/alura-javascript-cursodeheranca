import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0;
    agencia;
    cliente;
    _saldo = 0;

    set cliente(novoCliente) {
        if(novoCliente instanceof Cliente) {        
            this.cliente = novoCliente;
        }
    }

    constructor(agencia, cliente) {
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas++;
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
