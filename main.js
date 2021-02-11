/* caminhos de serpentina, 2021
piscinadepixel, Isabela Zamith */

//variáveis globais
//meu token mapbox


//armazenamento de dados da tabela
let blocos = []
let rotaInicio = []
let rotaFim = []

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
    const table = data.split('\r').slice(1);
    //pegar cada elemento(elt) de cada linha(row)
    //loop

    //debug
        //console.log(table);

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

    for (var i = 0; i<blocos.length; i++) {
        console.log('O bloco '+ blocos[i]+ ' sai de ' + rotaInicio[i] + ' e vai até ' + rotaFim[i])
    }
}





async function Start() {
    await getData();
}