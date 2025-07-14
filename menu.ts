import readlinesync = require("readline-sync");
import { Colors } from "./src/util/Colors";
import { Conta } from "./src/model/Conta";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { ContaController } from "./src/controller/ContaController";

export function main() {

    let contas: ContaController = new ContaController();
    let opcao, numero, agencia, tipo, saldo, limite, aniversario: number;
    let titular: string;
    const tiposContas = ['Conta Corrente', 'ContaPoupanca '];

    console.log("\nCriar Contas\n");

    let cc1: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 123, 1, "João da Silva", 1000, 100.0);
    contas.cadastrar(cc1);

    let cc2: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 124, 1, "Maria da Silva", 2000, 100.0);
    contas.cadastrar(cc2);

    let cp1: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Mariana dos Santos", 4000, 12);
    contas.cadastrar(cp1);

    let cp2: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Juliana Ramos", 8000, 15);
    contas.cadastrar(cp2);

    contas.listarTodas();

    while (true) {
        console.log(Colors.bg.cyanbright, Colors.fg.crimson,
            "__________________________________________________________________");
        console.log("                                                                   ");
        console.log("                               BANKEND                             ");
        console.log("___________________________________________________________________");
        console.log("                                                                   ");
        console.log("               1 - Criar conta                                     ");
        console.log("               2 - Listar todas as contas                          ");
        console.log("               3 - Buscar conta por número                         ");
        console.log("               4 - Atualizar dados da conta                        ");
        console.log("               6 - Sacar                                           ");
        console.log("               7 - Depositar                                       ");
        console.log("               8 - Transferir valores entre contas                 ");
        console.log("               9 - Sair                                            ");
        console.log("___________________________________________________________________");
        console.log("                                                                  ",
            Colors.reset);
        console.log(" Entre com a opção desejada: ");

        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log(Colors.fg.cyan,
                "\nBankEnd - Conta digital do jeitinho que você programa!");
            sobre();
            console.log(Colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(Colors.fg.whitestrong, "\n\nCriar Conta\n\n", Colors.reset);
                console.log("Digite o Número da agência: ");
                agencia = readlinesync.questionInt("");

                console.log("Digite o Nome do Titular da conta: ");
                titular = readlinesync.question("");

                console.log("\nDigite o tipo da Conta: ");
                tipo = readlinesync.keyInSelect(tiposContas, "", { cancel: false }) + 1;

                console.log("\nDigite o Saldo da conta (R$): ");
                saldo = readlinesync.questionFloat("");

                switch (tipo) {
                    case 1:
                        console.log("Digite o Limite da Conta (R$): ");
                        limite = readlinesync.questionFloat("");
                        contas.cadastrar(new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular,
                            saldo, limite));
                        break;
                    case 2:
                        console.log("Digite o Dia do aniversário da Conta Poupança: ");
                        aniversario = readlinesync.questionInt(""); contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia,
                            tipo, titular, saldo, aniversario));
                        break;
                }
                keyPress()
                break;

            case 2:
                console.log(Colors.fg.whitestrong, "\n\nListar todas as Contas\n\n", Colors.reset);
                contas.listarTodas();
                keyPress()
                break;
            case 3:
                console.log(Colors.fg.whitestrong, "\n\nConsultar dados da Conta - por número\n\n", Colors.reset);
                keyPress()
                break;
            case 4:
                console.log(Colors.fg.whitestrong, "\n\nAtualizar dados da Conta\n\n", Colors.reset);
                keyPress()
                break;
            case 5:
                console.log(Colors.fg.whitestrong, "\n\nApagar uma Conta\n\n", Colors.reset);
                keyPress()
                break;
            case 6:
                console.log(Colors.fg.whitestrong, "\n\nSaque\n\n"), Colors.reset;
                keyPress()
                break;
            case 7:
                console.log(Colors.fg.whitestrong, "\n\nDepósito\n\n", Colors.reset);
                keyPress()
                break;
            case 8:
                console.log(Colors.fg.whitestrong, "\n\nTransferência entre Contas\n\n", Colors.reset);
                keyPress()
                break;
            default:
                console.log(Colors.fg.redstrong, "\nOpção Inválida!\n", Colors.reset);
                keyPress()
                break;
        }
    }
}

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Felipe Alves - felipes@genstudents.org ");
    console.log("https://github.com/fullstackfeal/conta_bancaria.git");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(Colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();

function gerarNumero(): number {
    throw new Error("Function not implemented.");
}
