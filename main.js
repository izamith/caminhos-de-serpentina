/* caminhos de serpentina, 2021
piscinadepixel, Isabela Zamith */

//variáveis globais
//meu token mapbox


//armazenamento de dados da tabela
let blocos = []
let rotaInicio = []
let rotaFim = []
let table



console.log('javascript ok')


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

        //formato da rota de inicio e fim no csv está [LONG LAT]
        //primeiro precisa remover os [] (primeiro e ultimos caracteres)
        var j = (rotaInicio[i])
        var resultInicial = j.substring(1, j.length-1);

        //DIVIDIR EM DOIS INICIAL
        //divide no espaço e coloca no array fields
        var fields = resultInicial.split(' ');
        var long = fields[0];
        var lat = fields[1];

            //console.log('LATITUDE IS '+ lat + ' AND LONGITUDE IS '+ long)

        var k = (rotaFim[i])
        var resultFinal 
            //alguns não tem final e ficam undefined na tabela
            if (typeof k !=='undefined') {
                 resultFinal = k.substring(1, k.length-1);
            }
        
        //DIVIDIR EM DOIS FINAL
        
    /**********************************************************/    
            //PAREI AQUI 
            //DIVIDIR O RESULTADO FINAL EM DOIS
            //DEPOIS COLOCAR NO OBJETO BLOCO 
    /**********************************************************/        



        //cada bloco é um objeto com nome e coordenadas iniciais e finais
        var bloco = new Bloco(blocos[i])
            //console.log(bloco)
       
        //console.log('O bloco '+ blocos[i]+ ' sai de ' + rotaInicio[i] + ' e vai até ' + rotaFim[i])
    }
}


//funcao construtora de objetos BLOCO
function Bloco(nome, longInicial, latInicial, longFinal, latFinal) {
    this.nome = nome;
    this.longInicial = longInicial;
    this.latInicial = latInicial;
    this.longFinal = longFinal;
    this.latFinal = latFinal;
  }




async function Start() {
    await getData();
}