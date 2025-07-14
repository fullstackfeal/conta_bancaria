import readlinesync = require("readline-sync");
import { Colors } from "./src/util/colors";
import { Conta } from "./src/model/conta";
export function main() {

let opcao: number;

while (true) {
    console.log(Colors.bg.cyanbright, Colors.fg.crimson,
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
            keyPress()
            break;
        case 2:
            console.log(Colors.fg.whitestrong,"\n\nListar todas as Contas\n\n", Colors.reset);
            keyPress()
            break;
        case 3:
            console.log(Colors.fg.whitestrong,"\n\nConsultar dados da Conta - por número\n\n", Colors.reset);
            keyPress()
            break;
        case 4:
            console.log(Colors.fg.whitestrong,"\n\nAtualizar dados da Conta\n\n", Colors.reset);
            keyPress()
            break;
        case 5:
            console.log(Colors.fg.whitestrong,"\n\nApagar uma Conta\n\n", Colors.reset);
            keyPress()
            break;
        case 6:
            console.log(Colors.fg.whitestrong,"\n\nSaque\n\n"), Colors.reset;
            keyPress()
            break;
        case 7:
            console.log(Colors.fg.whitestrong,"\n\nDepósito\n\n", Colors.reset);
            keyPress()
            break;
        case 8:
            console.log(Colors.fg.whitestrong,"\n\nTransferência entre Contas\n\n", Colors.reset);
            keyPress()
            break;
        default:
            console.log(Colors.fg.redstrong,"\nOpção Inválida!\n", Colors.reset);
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