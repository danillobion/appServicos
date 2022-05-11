const empresas = [
    {
        id: 1,
        nome: "Abc 1"
    },
    {
        id: 2,
        nome: "Abc 2"
    },
];
const linhas = [
    {
        id: 1,
        empresa_id: 1,
        nome: "Brasília",
        numero: "015",
        valor: "3,90",
        tempo_de_espera: 20,
    },
    {
        id: 2,
        empresa_id: 2,
        nome: "Cidade das Flores",
        numero: "017",
        valor: "3,90",
        tempo_de_espera: 16,
    },
];
const paradas = [
    {
        id:1,
        rua:"Ponto A",
        latitude: "0",
        longitude: "0",
    },
    {
        id:2,
        rua:"Ponto B",
        latitude: "0",
        longitude: "0",
    },
];
const linha_parada = [
    {
        ordem:1,
        linha_id: 1,
        parada_id: 1,
    },
    {
        ordem:2,
        linha_id: 1,
        parada_id: 2,
    },
    {
        ordem:3,
        linha_id: 2,
        parada_id: 1,
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
    dia:1, //sabado
    horarioBairro: "6:35",
    horarioCentro: "6:59",
},
{
    linha_id: 2,
    dia:2, //domingo
    horarioBairro: "6:35",
    horarioCentro: "6:59",
},
]
const dados = {empresas, linhas, paradas, horario, linha_parada};
var cidade = "Garanhuns/PE";
var dataAtualizacao = "01/05/2022"
var versaoSystema = "1.0"

const body ={dados, cidade, dataAtualizacao, versaoSystema};