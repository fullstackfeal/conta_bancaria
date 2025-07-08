import readlinesync = require("readline-sync");
import { colors } from "./src/util/colors";
import { Conta } from "./src/model/conta";

export function main() {

let opcao: number;

const conta: Conta = new Conta(1, 123, 1, "Adraiana", 10000);
conta.visualizar();
conta.sacar(10500);
conta.visualizar();
conta.depositar(5000);
conta.visualizar();

while (true) {
    console.log(colors.bg.cyanbright, colors.fg.crimson,
                "_________________________________________________________________");
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
    colors.reset);
    console.log(" Entre com a opção desejada: ");

    opcao = readlinesync.questionInt("");

    if (opcao == 9) {
        console.log(colors.fg.cyan, 
            "\nBankEnd - Conta digital do jeitinho que você programa!");
        sobre();
        console.log(colors.reset, "");
        process.exit(0);
    }

    switch (opcao) {
        case 1:
            console.log(colors.fg.whitestrong, "\n\nCriar Conta\n\n", colors.reset);
            keyPress()
            break;
        case 2:
            console.log(colors.fg.whitestrong,"\n\nListar todas as Contas\n\n", colors.reset);
            keyPress()
            break;
        case 3:
            console.log(colors.fg.whitestrong,"\n\nConsultar dados da Conta - por número\n\n", colors.reset);
            keyPress()
            break;
        case 4:
            console.log(colors.fg.whitestrong,"\n\nAtualizar dados da Conta\n\n", colors.reset);
            keyPress()
            break;
        case 5:
            console.log(colors.fg.whitestrong,"\n\nApagar uma Conta\n\n", colors.reset);
            keyPress()
            break;
        case 6:
            console.log(colors.fg.whitestrong,"\n\nSaque\n\n"), colors.reset;
            keyPress()
            break;
        case 7:
            console.log(colors.fg.whitestrong,"\n\nDepósito\n\n", colors.reset);
            keyPress()
            break;
        case 8:
            console.log(colors.fg.whitestrong,"\n\nTransferência entre Contas\n\n", colors.reset);
            keyPress()
            break;
        default:
            console.log(colors.fg.redstrong,"\nOpção Inválida!\n", colors.reset);
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
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();