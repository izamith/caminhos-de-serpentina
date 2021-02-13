/* caminhos de serpentina, 2021
piscinadepixel, Isabela Zamith */

/* FAZER O GETROUTE E O DESENHO DO MAPA */

console.log('javascript ok')

//variáveis globais

//armazenamento de dados da tabela
let blocos = []
let rotaInicio = []
let rotaFim = []
let table


let blocoConjunto = []
var fieldsIn 

//carrega os dados em variaveis
async function getData() {
    //carrega a tabela do arquivo csv
    const response = await fetch('docs/data.csv');
    //nome,inicio,fim
    const data = await response.text();
    //debug
        //console.log(data);

    //pega cada linha da tabela até onde acaba (enter), pode ser
    //'\n' ou '\r', vai depender da tabela, checar antes
    //como tá gerando os csv
    //.slice "corta" o cabeçalho do array (row[0]), pq
    //coloquei pra começar no 1
    table = data.split('\r').slice(1);

    //debug
        //console.log(table);
    console.log('csv carregado')
    dataCollection()
   
}

function dataCollection(){
    //pegar cada elemento(elt) de cada linha(row)
    //loop
    table.forEach(row=> {
        //pega cada linha até onde vai ","
        //coluna
        const columns = row.split(',');
        //elemento 0 da linha
        const nomeBloco = columns[0];
        //coloca cada area numa array "xareas"
        blocos.push(nomeBloco);

        //elemento 1 da linha
        const inicioBloco = columns[1];
        rotaInicio.push(inicioBloco);
        // ...
        const fimBloco = columns[2];
        rotaFim.push(fimBloco);
       
        //debug
            //console.log(blocos,rotaInicio,rotaFim);
           
        });

    //passar por todos os blocos
    for (var i = 0; i<blocos.length; i++) {
        var blocoi
        //formato da rota de inicio e fim no csv está [LONG LAT]
        //primeiro precisa remover os [] (primeiro e ultimos caracteres)
        var j = (rotaInicio[i])
        var resultInicial = j.substring(1, j.length-1);
        
    
        //DIVIDIR EM DOIS INICIAL
        //divide no espaço e coloca no array fields
        var fieldsIn = resultInicial.split(' ');
            //console.log(fieldsIn)

        //transformar em número pq era string
        var fieldsNumIn = []
        fieldsNumIn.push(parseFloat(fieldsIn[0]))
        fieldsNumIn.push(parseFloat(fieldsIn[1]))
            //console.log(fieldsNumIn)

        var k = (rotaFim[i])
        var resultFinal 
            //alguns não tem final e ficam undefined na tabela
            if (typeof k !=='undefined') {
                 resultFinal = k.substring(1, k.length-1);
                 //DIVIDIR EM DOIS FINAL
                //divide no espaço e coloca no array fields
                var fieldsFi = resultFinal.split(' ');

                //transformar em numero pq era string
                var fieldsNumFi = []
                fieldsNumFi.push(parseFloat(fieldsFi[0]))
                fieldsNumFi.push(parseFloat(fieldsFi[1]))


                //cada bloco é um objeto com nome e coordenadas iniciais e finais
                blocoi = new Bloco(blocos[i],fieldsNumIn,fieldsNumFi)
            }
            else {
                 //cada bloco é um objeto com nome e coordenadas iniciais e finais
                 blocoi = new Bloco(blocos[i],fieldsNumIn,fieldsNumIn)
            }
            blocoConjunto.push(blocoi)
                // console.log(blocoi)    
        //console.log('O bloco '+ blocos[i]+ ' sai de ' + rotaInicio[i] + ' e vai até ' + rotaFim[i])
    }
    console.log('blocos criados')
    //console.log(blocoConjunto)
}

//funcao construtora de objetos BLOCO
function Bloco(nome, posInicial, posFinal) {
    this.nome = nome;
    this.posInicial = posInicial;
    this.posFinal = posFinal;
  }


async function Start() {
    await getData();
    
    //mapping();
}