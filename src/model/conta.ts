export abstract class Conta {

    private _numero: number;
    private _agencia: number;
    private _tipo: number;
    private _titular: string;
    protected _saldo: number;

    constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number){
        this._numero = numero;
        this._agencia = agencia;
        this._tipo = tipo;
        this._titular = titular;
        this._saldo = saldo;
    }
        public getNumero() {
        return this._numero;
    }
    public setNumero(numero: number) {
        this._numero = numero;
    }
    
    public getAgencia() {
        return this._agencia;
    }
    public setAgencia(agencia: number) {
        this._agencia = agencia;
    }

        public getTipo() {
        return this._tipo;
    }
    public setTipo(tipo: number) {
        this._tipo = tipo;
    }

        public getTitular() {
        return this._titular;
    }
    public setTitular(titular: string) {
        this._titular = titular;
    }

        public getSaldo() {
        return this._saldo;
    }
    public setSaldo(saldo: number) {
        this._saldo = saldo;
    }

    public sacar(valor: number) : boolean {
        if(this._saldo < valor) {
            console.log("\n Saldo Insuficiente");
            return false;
        }
        this._saldo = this._saldo - valor;
        return true;
    }

    public depositar(valor: number): void {
        this._saldo = this._saldo + valor;
    }

    public visualizar(): void {

        let tipo: string = "";

        switch(this._tipo) {
            case 1: 
                tipo = "Conta Corrente";
                break;
                case 2:
                    tipo = "Conta Poupança";
                    break;
        }

        console.log("\n\n*********************************************");
        console.log("Dados da Conta: ");
        console.log("*********************************************");
        console.log("Número da Conta: " + this._numero);
        console.log("Agência: "+ this._agencia);
        console.log("Tipo da Conta: " + tipo);
        console.log("Titular: " + this._titular);
        console.log("Saldo: " + this._saldo.toFixed(2));


    }
}