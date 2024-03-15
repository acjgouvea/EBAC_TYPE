class Conta {
    numeroConta: number;
    saldo: number = 0;

    constructor(numeroConta: number) {
        this.numeroConta = numeroConta;
    }
}

class ContaSalario extends Conta {
    depositar(valor: number) {
        this.saldo += valor; 
    }
}

interface ITransacional {
    transferir: (valor: number, destinatario: Conta) => boolean;
    TaxaTransferencia: number;
}

class ContaCorrente extends Conta implements ITransacional {
    transferir(valor: number, destinatario: Conta) {
        destinatario.saldo += (valor - this.TaxaTransferencia);
        return true;
    };
    TaxaTransferencia: number = 0;
}