"use strict";
class Pessoa {
    constructor(nome, renda) {
        this.nome = nome;
        this.renda = renda; // Corrigido de "this.renda?=renda" para "this.renda = renda"
    }
    dizOi() {
        return `${this.nome} disse oi`;
    }
}
class ContaBancaria {
    constructor(numeroConta) {
        this.saldo = 0;
        this.numeroConta = numeroConta;
    }
    static retornaNumeroBanco() {
        return 123;
    }
    getSaldo() {
        return this.saldo;
    }
    depositar(valor) {
        this.saldo += valor;
    }
}
class ContaBancariaCPF extends ContaBancaria {
    depositar(valor) {
        this.saldo = valor * 2;
    }
}
const ContaCarlos = new ContaBancariaCPF(12345);
ContaBancaria.retornaNumeroBanco();
