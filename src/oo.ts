class Pessoa {
    nome: string;
    renda?: number;

    constructor(nome: string, renda?: number) {
        this.nome = nome;
        this.renda = renda; // Corrigido de "this.renda?=renda" para "this.renda = renda"
    }

    dizOi(): string {
        return `${this.nome} disse oi`;
    }
}


class ContaBancaria {
    protected saldo: number = 0;
    public numeroConta: number;

    constructor(numeroConta: number) {
        this.numeroConta = numeroConta;
    }
static retornaNumeroBanco() {
    return 123;
}


    private getSaldo() {
        return this.saldo;

    }
    depositar(valor: number) {
        this.saldo += valor;
    }
}
class ContaBancariaCPF extends ContaBancaria {
    depositar(valor: number): void {
        this.saldo = valor * 2;
    }
}


const ContaCarlos = new ContaBancariaCPF(12345)

ContaBancaria.retornaNumeroBanco()
