const empresas = [
    {
        id: 1,
        nome: "Abc 1"
    },
    {
        id: 2,
        nome: "Abc 2"
    },
    {
        id: 3,
        nome: "Abc 3"
    }
];
const linhas = [
    {
        empresa_id: 1,
        linha: "Brasília",
        numero: "015",
        valor: "3,90",
        tempoDeEspera: 20,
    },
    {
        empresa_id: 2,
        linha: "Cidade das Flores",
        numero: "017",
        valor: "3,90",
        tempoDeEspera: 16,
    },
];
const paradas = [
    {
        rua:"Ponto A",
        latitude: "0",
        longitude: "0",
    },
    {
        rua:"Ponto B",
        latitude: "0",
        longitude: "0",
    },
    {
        rua:"Ponto A",
        latitude: "0",
        longitude: "0",
    },
    {
        rua:"Ponto C",
        latitude: "0",
        longitude: "0",
    },
];
const linha_parada = [
    {
        linha_id: 1,
        parada_id: 1,
    },
    {
        linha_id: 1,
        parada_id: 2,
    },
    {
        linha_id: 2,
        parada_id: 1,
    },
    {
        linha_id: 2,
        parada_id: 4,
    },
];
const horario = [
{
    linha_id: 1,
    dia:0, //util
    horarioBairro: "6:30",
    horarioCentro: "6:50",
},
{
    linha_id: 2,
    dia:0, //util
    horarioBairro: "6:35",
    horarioCentro: "6:59",
},
]
var temp = 10;
// const dados = {empresas, linhas, paradas, horario, linha_parada};
// var cidade = "Garanhuns/PE";
// var dataAtualizacao = "06/03/2022"
// var versaoSystema = "1.0"
// const body ={
//     dados, cidade, dataAtualizacao, versaoSystema
// };