const BASE_API = "";

export default {
    //funcao remporaria responsavel por simular o retorno de uma requisicao.
    //a ideia inicial eh passar o nome de uma cidade (Garanhuns) e retornar as empresas, linhas, paradas e horarios
    getTransporteUrbanoMunicipal(){
        const empresas = [
            {
                id: 0,
                nome: "Abc 1"
            },
            {
                id: 1,
                nome: "Abc 2"
            },
            {
                id: 3,
                nome: "Abc 3"
            }
        ];
        const linhas = [
            {
                empresa_id: 0,
                linha: "Brasília",
                numero: "015",
                valor: "3,90",
                tempoDeEspera: 20,
            },
            {
                empresa_id: 1,
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
                rua:"Ponto C",
                latitude: "0",
                longitude: "0",
            },
            {
                rua:"Ponto D",
                latitude: "0",
                longitude: "0",
            },
            {
                rua:"Ponto E",
                latitude: "0",
                longitude: "0",
            },
            {
                rua:"Ponto F",
                latitude: "0",
                longitude: "0",
            },
        ];
        const linha_parada = [
            {
                linha_id: 0,
                parada_id: 0,
            },
            {
                linha_id: 0,
                parada_id: 3,
            },
            {
                linha_id: 1,
                parada_id: 0,
            },
            {
                linha_id: 1,
                parada_id: 1,
            },
            {
                linha_id: 1,
                parada_id: 2,
            },
        ];
        const horario = [
        {
            linha_id: 0,
            dia:0, //util
            horarioBairro: "6:30",
            horarioCentro: "6:50",
        },
        {
            linha_id: 1,
            dia:0, //util
            horarioBairro: "6:35",
            horarioCentro: "6:59",
        },
        ]
        const dados = {empresas, linhas, paradas, horario, linha_parada};
        let status = true;
        let cidade = "Garanhuns/PE";
        let dataAtualizacao = "06/03/2022"
        let versaoSystema = "1.0"
        const body ={
            dados, status, cidade, dataAtualizacao, versaoSystema
        }
        
        return body;
    }
}