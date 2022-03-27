const BASE_API = "";

export default {
    //funcao remporaria responsavel por simular o retorno de uma requisicao.
    //a ideia inicial eh passar o nome de uma cidade (Garanhuns) e retornar as empresas, linhas, paradas e horarios
    getTransporteUrbanoMunicipal(){
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
                {
                    empresa_id: 3,
                    linha: "Cohab 1",
                    numero: "001",
                    valor: "3,90",
                    tempoDeEspera: 10,
                },
                {
                    empresa_id: 4,
                    linha: "Cohab 2",
                    numero: "005",
                    valor: "3,90",
                    tempoDeEspera: 14,
                },
                {
                    empresa_id: 5,
                    linha: "Cohab 3",
                    numero: "006",
                    valor: "3,90",
                    tempoDeEspera: 20,
                },
                {
                    empresa_id: 6,
                    linha: "Fênix L1",
                    numero: "004",
                    valor: "3,50",
                    tempoDeEspera: 15,
                },
                {
                    empresa_id: 7,
                    linha: "Garoinha",
                    numero: "020",
                    valor: "4,00",
                    tempoDeEspera: 24,
                },
                {
                    empresa_id: 8,
                    linha: "Indiano",
                    numero: "003",
                    valor: "3,90",
                    tempoDeEspera: 15,
                },
                {
                    empresa_id: 9,
                    linha: "JM Dourado",
                    numero: "009",
                    valor: "3,90",
                    tempoDeEspera: 20,
                },
                {
                    empresa_id: 10,
                    linha: "Liberdade",
                    numero: "016",
                    valor: "3,90",
                    tempoDeEspera: 20,
                },
                {
                    empresa_id: 11,
                    linha: "Parque Fênix",
                    numero: "004",
                    valor: "3,90",
                    tempoDeEspera: 18,
                },
                {
                    empresa_id: 12,
                    linha: "Quartel",
                    numero: "002",
                    valor: "3,90",
                    tempoDeEspera: 18,
                },
                {
                    empresa_id: 13,
                    linha: "Manoel Camelo",
                    numero: "014",
                    valor: "3,90",
                    tempoDeEspera: 18,
                },
                {
                    empresa_id: 14,
                    linha: "Várzea",
                    numero: "008",
                    valor: "3,90",
                    tempoDeEspera: 15,
                },
                {
                    empresa_id: 15,
                    linha: "Papa-Terra",
                    numero: "009",
                    valor: "3,90",
                    tempoDeEspera: 20,
                },
                {
                    empresa_id: 16,
                    linha: "Mundaú",
                    numero: "011",
                    valor: "3,90",
                    tempoDeEspera: 15,
                },
                {
                    empresa_id: 17,
                    linha: "João da Mata",
                    numero: "012",
                    valor: "3,90",
                    tempoDeEspera: 15,
                },
                {
                    empresa_id: 18,
                    linha: "Paulista",
                    numero: "002",
                    valor: "3,90",
                    tempoDeEspera: 20,
                },
                {
                    empresa_id: 19,
                    linha: "São Vincente",
                    numero: "009",
                    valor: "3,90",
                    tempoDeEspera: 20,
                },
            ];
        const paradas = [
                {
                    linha_id: 1,
                    rua:"Terminal Brasília",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 1,
                    rua:"Rua Capitão Pedro Rodrigues",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 1,
                    rua:"Rua Coronel Antônio Souto",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 1,
                    rua:"Rua São Domingos",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 1,
                    rua:"Rua Coronel Antônio Victor",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 1,
                    rua:"Praça Mestre Dominguinhos",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 1,
                    rua:"Praça Tiradentes | Mosteiro de São Bento",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 1,
                    rua:"Rua Dantas Barreto",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 1,
                    rua:"Av. Santo Antônio | Lojas Americanas",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 1,
                    rua:"Rua Doutor José Mariano | Colégio XV de Novembro",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 1,
                    rua:"Rua Ernesto Dourado",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 1,
                    rua:"Av. Euclides Dourado",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 2,
                    rua:"Terminal Centro",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 2,
                    rua:"Av. Santo Antônio",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 2,
                    rua:"Lojas Americanas",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 2,
                    rua:"Rua Doutor José Mariano",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 2,
                    rua:"Av. Rui Barbosa | Hotel Tavares Correa",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 2,
                    rua:"Avenida Santa Rosa",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 2,
                    rua:"Rua da Liberdade",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 2,
                    rua:"Rua Voluntários da Pátria",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 2,
                    rua:"Rua Cristóvão Colombo",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 2,
                    rua:"Rua Chico Mendes",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 2,
                    rua:"Rua Mendes",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 2,
                    rua:"Rua Um",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 2,
                    rua:"Rua Sargento Evandro Marcílio",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 2,
                    rua:"Rua Sebastião Paes de Melo",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 2,
                    rua:"Rua João Pedro da Silva",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 3,
                    rua:"Terminal Centro",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 3,
                    rua:"Av. Santo Antônio | Lojas Americanas",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 3,
                    rua:"Rua Doutor José Mariano",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 3,
                    rua:"Colégio XV de Novembro",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 3,
                    rua:"Hotel Tavares Correia",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 3,
                    rua:"Av. Rui Barvosa",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 3,
                    rua:"Av. Pedro Cavalcante",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 3,
                    rua:"Av. Duque de Caxias",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 3,
                    rua:"Rua Um",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 3,
                    rua:"Rua Sargento Evandro Marcílio",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 3,
                    rua:"Rua Ernesto Nazarem",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 3,
                    rua:"Rua Ataúlfo Alves",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 3,
                    rua:"Rua Três",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 3,
                    rua:"Rua Um",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 3,
                    rua:"Terminal Cohab 1",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 4,
                    rua:"Terminal Centro",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 4,
                    rua:"Praça Dom Pedro II",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 4,
                    rua:"Av. José Leitão",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 4,
                    rua:"Av. Sul",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 4,
                    rua:"Av. Deolinda Silvestre Valença",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 4,
                    rua:"Av. Manoel Alves Machado",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 4,
                    rua:"Rua Antônio Machado",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 4,
                    rua:"Av. Florêncio Rodrigues",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 4,
                    rua:"Rua Pedro Lima",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 4,
                    rua:"Rua Altinho",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 4,
                    rua:"Rua Paraguai",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 4,
                    rua:"Rua Prof. Mario Matos",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 4,
                    rua:"Av. Manoel Alves Machado",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 4,
                    rua:"Terminal Cohab 2",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 5,
                    rua:"Terminal Antônio Cordeiro",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 5,
                    rua:"Rua Radialista Flauberto Elias",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 5,
                    rua:"Rua João Henrique Araujo",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 5,
                    rua:"Rua Dois",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 5,
                    rua:"Rua Quinze",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 5,
                    rua:"Rua Arlindo Ouro Preto",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 5,
                    rua:"Rua Três",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 5,
                    rua:"Rua Dois",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 5,
                    rua:"Rua Frei Damião",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 5,
                    rua:"BR-424",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 5,
                    rua:"Av. Sátiro Ivo",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 5,
                    rua:"Rua Darcy Medeiros",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 5,
                    rua:"Rua Julião Cavalcante",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 5,
                    rua:"Rua Sete de Setembro",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 5,
                    rua:"Terminal Centro",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 6,
                    rua:"Terminal Centro",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 6,
                    rua:"Av. Santo Antônio | Lojas Americanas",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 6,
                    rua:"Rua Doutor José Mariano",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 6,
                    rua:"Colégio XV de Novembro",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 6,
                    rua:"Rua Ernesto Dourado",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 6,
                    rua:"Av. Pedro Cavalcante",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 6,
                    rua:"Rua Agostinho Branco",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 6,
                    rua:"Rua Trinta e Um de Março",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 6,
                    rua:"Rua Coelho Neto",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 6,
                    rua:"Rua Cristovão Colombo",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 6,
                    rua:"Rua Chico Mendes",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 6,
                    rua:"Rua Um",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 6,
                    rua:"Rua Sargento Evandro Marcílio",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 6,
                    rua:"Rua Jaime Pinheiro de Souza",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 6,
                    rua:"Rua José Cardoso",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 6,
                    rua:"Rua Terminal Parque Fênix",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 6,
                    rua:"Rua Min. Dilson Funaro",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 6,
                    rua:"Rua Sebastião Paes de Melo",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 7,
                    rua:"Terminal Cohab 1",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 7,
                    rua:"Av. Duqye de Caxias",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 7,
                    rua:"Rua Francisco Gueiros",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 7,
                    rua:"Av. Pedro Cavalcante",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 7,
                    rua:"Praça Tavares Correia",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 7,
                    rua:"Av. Rui Barbosa",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 7,
                    rua:"Av. Simoa Gomes | Hospital Dom Moura",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 7,
                    rua:"Av. Caruaru",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 7,
                    rua:"Rua Coronel Antônio Victor",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 7,
                    rua:"Praça Mestre Dominguinhos",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 7,
                    rua:"Praça Tiradentes | Mosteiro de São Bento",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 7,
                    rua:"Rua Dantas Barreto",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 7,
                    rua:"Terminal Centro",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 7,
                    rua:"Praça Dom Pedro II",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 7,
                    rua:"Av. José Leitão",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 7,
                    rua:"Av. Sul",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 7,
                    rua:"Av. Dolinda Silvestre Valença",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 7,
                    rua:"Av. Manoel Alves Machado",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 7,
                    rua:"Terminal Cohab 2",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 8,
                    rua:"Terminal Indiano",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 8,
                    rua:"Rua Prof. Cecília Rodrigues",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 8,
                    rua:"Rua Padre Agobar Valença",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 8,
                    rua:"Rua Francisco Paes De Melo",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 8,
                    rua:"Rua Manoel Pessoa Juvenal",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 8,
                    rua:"Rua Agobar Valença",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 8,
                    rua:"Rua Manoel Cipriano da Cruz",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 8,
                    rua:"Rua Abílio Camilo Valença",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 8,
                    rua:"Av. Tavares Correia",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 8,
                    rua:"Av. Júlio Brasileiro",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 8,
                    rua:"Av. Oliveira Lima",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 8,
                    rua:"Av. Caruaru",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 8,
                    rua:"Rua Coronel Antônio Victor",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 8,
                    rua:"Praça Mestre Dominguinhos",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 8,
                    rua:"Praça Tiradentes | Mosteiro De São Bento",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 8,
                    rua:"Rua Dantas Barreto",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 8,
                    rua:"Terminal Centro",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 9,
                    rua:"Terminal Centro",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 9,
                    rua:"Av. Santo Antônio | Lojas Americanas",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 9,
                    rua:"Av. Afonso Pena",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 9,
                    rua:"Av. Caruaru",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 9,
                    rua:"FAGA/AESGA",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 9,
                    rua:"Av. Simoa Gomes",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 9,
                    rua:"Av. Júlio Brasileiro",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 9,
                    rua:"Praça Tavares Correia",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 9,
                    rua:"BR-423",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 9,
                    rua:"Rua da Luís Rodão de Araújo",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 9,
                    rua:"Rua Capitão Valdemar Viana",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 9,
                    rua:"Av. Monsenhor Arruda Câmara",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 9,
                    rua:"Rua Josenildo Hnerique Saraiva dos Santos",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 9,
                    rua:"Estrada de São Pedro",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 9,
                    rua:"Rua José Bezerra Lins",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 9,
                    rua:"Terminal Viana & Moura",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 10,
                    rua:"Terminal Brasília",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 10,
                    rua:"Rua Capitão Pedro Rodrigues",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 10,
                    rua:"Rua Coronel Antônio Souto",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 10,
                    rua:"Rua São Domingos",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 10,
                    rua:"Rua Coronel Antônio Victor",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 10,
                    rua:"Praça Mestre Dominguinhos",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 10,
                    rua:"Praça Tiradentes | Mosteiro de São Bento",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 10,
                    rua:"Rua Dantas Barreto",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 10,
                    rua:"Terminal Centro",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 10,
                    rua:"Av. Santo Antônio | Lojas Americanas",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 10,
                    rua:"Av. Afonso Pena",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 10,
                    rua:"Av. Caruaru",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 10,
                    rua:"FAGA/AESGA",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 10,
                    rua:"Av. Simoa Gomes",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 10,
                    rua:"Av. Rui Barbosa",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 10,
                    rua:"Av. Santa Rosa",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 10,
                    rua:"Av. Pedro Cavalcante",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 10,
                    rua:"Rua Agostinho Branco",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 10,
                    rua:"Rua Trinta e Um de Março",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 10,
                    rua:"Rua Mauro de Souza Lima Filho",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 10,
                    rua:"Rua Trinta e Um de Março",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 10,
                    rua:"Rua da Liberdade",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 10,
                    rua:"Rua dos Operários",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 11,
                    rua:"Terminal Parque Fênix",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 11,
                    rua:"Rua Min. Mario Andreazza",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 11,
                    rua:"Rua José Cardoso",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 11,
                    rua:"Rua Jaime Pinheiro de Souza",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 11,
                    rua:"Rua Sargento Evandro Marcílio",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 11,
                    rua:"Rua Chico Mendes",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 11,
                    rua:"Rua Cristovão Colombo",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 11,
                    rua:"Rua Brás Cubas",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 11,
                    rua:"Rua Mauro de Souza Lima Filho",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 11,
                    rua:"Rua Trinta e Um de Março",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 11,
                    rua:"Rua Felipe Camarão",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 11,
                    rua:"Rua Agostinho Branco",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 11,
                    rua:"Av. Pedro Cavalcante",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 11,
                    rua:"Praça Tavares Correia",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 11,
                    rua:"Av. Rui Barbosa",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 11,
                    rua:"Rua Quinze de Novembro | Praça Souto Filho",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 11,
                    rua:"Rua Quinze de Novembro",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 11,
                    rua:"Rua Dantas Barreto | Praça Dom Moura",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 11,
                    rua:"Terminal Centro",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 12,
                    rua:"Terminal Centro",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 12,
                    rua:"Av. Santo Antônio | Lojas Americanas",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 12,
                    rua:"Av. Afonso Pena",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 12,
                    rua:"Av. Caruaru",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 12,
                    rua:"FAGA/AESGA",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 12,
                    rua:"Av. Simoa Gomes",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 12,
                    rua:"Av. Júlio Brasileiro",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 12,
                    rua:"Praça Tavares Correia",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 12,
                    rua:"BR-423",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 12,
                    rua:"PE-177",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 12,
                    rua:"Av. Irga",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 12,
                    rua:"Rua Bom Conselho",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 12,
                    rua:"Av. Saloá",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 12,
                    rua:"Av. São João",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 12,
                    rua:"Rua Caetés",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 12,
                    rua:"Rua Vital Brasil",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 12,
                    rua:"Av. Carlos Chagas",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 12,
                    rua:"Terminal Quartel",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 13,
                    rua:"Terminal Quartel",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 13,
                    rua:"Praça Dom Pedro II",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 13,
                    rua:"Av. José Leitão",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 13,
                    rua:"Av. Sul",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 13,
                    rua:"Av. Deolinda Silvestre Valença",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 13,
                    rua:"Rua João Tiago Filho",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 13,
                    rua:"Rua Ivaldo de Almeida",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 13,
                    rua:"Av. Deolinda Silvestre Valença",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 13,
                    rua:"Av. Manoel Camelo",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 13,
                    rua:"Terminal Residencial Manoel Camelo",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 14,
                    rua:"Terminal Centro",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 14,
                    rua:"Av. Santo Antônio | Lojas Americanas",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 14,
                    rua:"Rua Dantas Barreto | Praça Dom Moura",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 14,
                    rua:"Rua Pascoal Lopes",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 14,
                    rua:"Av. Sátiro Ivo",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 14,
                    rua:"Rua Serra Branca",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 14,
                    rua:"Rua Oscar Francisco da Silva",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 14,
                    rua:"Terminal Várzea",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 15,
                    rua:"Terminal Centro",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 15,
                    rua:"Av. Santo Antônio | Lojas Americanas",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 15,
                    rua:"Av. Afonso Pena",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 15,
                    rua:"Rua São Vicente",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 15,
                    rua:"Rua São Domingos",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 15,
                    rua:"Rua Coronel Antônio Souto",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 15,
                    rua:"Av. Barão de Nazaré",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 15,
                    rua:"BR-423",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 15,
                    rua:"Rua Paulo Afonso",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 15,
                    rua:"Rua Getulio Jobby Jr.",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 15,
                    rua:"Rua São Vincente",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 15,
                    rua:"BR-423",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 15,
                    rua:"Rua da Luís Rodão de Araújo",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 15,
                    rua:"Rua Prof. Ageu Viêira",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 15,
                    rua:"Rua Marechal Rondol Lot Jd Monte Sinai",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 15,
                    rua:"Av. Monsenhor Arruda Câmara",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 15,
                    rua:"Rua Josenildo Henrique Saraiva dos Santos",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 15,
                    rua:"Estrada de São Pedro",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 15,
                    rua:"Rua José Bezerra Lins",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 15,
                    rua:"Terminal Viana & Moura",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 15,
                    rua:"Rua Jornalista Almir Alves",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 15,
                    rua:"Estrada de São Pedro",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 15,
                    rua:"Entrada do Aeroporto (Terminal)",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 16,
                    rua:"Terminal Mundaú",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 16,
                    rua:"Rua Luíz Buros",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 16,
                    rua:"Rua Maceió",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 16,
                    rua:"Rua São Miguel",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 16,
                    rua:"Praça Dom Pedro",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 16,
                    rua:"Rua Dom José",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 16,
                    rua:"Av. Santo Antônio",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 16,
                    rua:"Lojas Americanas",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 16,
                    rua:"Rua Dantas Barreto",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 16,
                    rua:"Praça Dom Moura",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 16,
                    rua:"Terminal Centro",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 17,
                    rua:"Terminal Centro",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 17,
                    rua:"Rua Júlio de Melo",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 17,
                    rua:"Rua Capitão João Leite",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 17,
                    rua:"Rua Tiradentes",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 17,
                    rua:"Rua Estácio de Sá",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 17,
                    rua:"Rua José do Patrocínio",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 17,
                    rua:"Rua Luíz Burgos",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 17,
                    rua:"Av. Profa. Júlia Brasileiro",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 17,
                    rua:"Rua Florianópolis",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 17,
                    rua:"Rua Cuiaba",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 17,
                    rua:"Terminal João da Mata",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 18,
                    rua:"Terminal Centro",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 18,
                    rua:"Av. Santo Antônio | Lojas Americanas",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 18,
                    rua:"Av. Afonso Pena",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 18,
                    rua:"Av. Caruaru",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 18,
                    rua:"FAGA/AESGA",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 18,
                    rua:"Av. Simoa Gomes",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 18,
                    rua:"Av. Júlio Brasileiro",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 18,
                    rua:"Praça Tavares Correia",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 18,
                    rua:"BR-423",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 18,
                    rua:"PE-177",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 18,
                    rua:"Av. Saloá",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 18,
                    rua:"Av. São João",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 18,
                    rua:"Rua Caetés",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 18,
                    rua:"Rua Vital Brasil",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 18,
                    rua:"Av. Carlos Chagas",
                    latitude: "0",
                    longitude: "0",
                },
                {
                    linha_id: 18,
                    rua:"Terminal Quartel",
                    latitude: "0",
                    longitude: "0",
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
                linha_id: 1,
                dia:0, //util
                horarioBairro: "7:20",
                horarioCentro: "7:35",
            },
            {
                linha_id: 1,
                dia:0, //util
                horarioBairro: "8:00",
                horarioCentro: "8:40",
            },
            {
                linha_id: 1,
                dia:0, //util
                horarioBairro: "9:15",
                horarioCentro: "9:30",
            },
            {
                linha_id: 1,
                dia:0, //util
                horarioBairro: "10:00",
                horarioCentro: "10:15",
            },
            {
                linha_id: 1,
                dia:0, //util
                horarioBairro: "11:00",
                horarioCentro: "11:15",
            },
            {
                linha_id: 1,
                dia:0, //util
                horarioBairro: "12:00",
                horarioCentro: "12:15",
            },
            {
                linha_id: 1,
                dia:0, //util
                horarioBairro: "13:00",
                horarioCentro: "13:15",
            },
            {
                linha_id: 1,
                dia:0, //util
                horarioBairro: "14:00",
                horarioCentro: "14:15",
            },
            {
                linha_id: 1,
                dia:0, //util
                horarioBairro: "15:00",
                horarioCentro: "15:15",
            },
            {
                linha_id: 1,
                dia:0, //util
                horarioBairro: "16:00",
                horarioCentro: "16:15",
            },
            {
                linha_id: 1,
                dia:0, //util
                horarioBairro: "17:00",
                horarioCentro: "17:15",
            },
            {
                linha_id: 1,
                dia:0, //util
                horarioBairro: "18:00",
                horarioCentro: "18:15",
            },
            {
                linha_id: 1,
                dia:0, //util
                horarioBairro: "19:00",
                horarioCentro: "19:15",
            },
            {
                linha_id: 1,
                dia:1, //sabado
                horarioBairro: "6:30",
                horarioCentro: "6:50",
            },
            {
                linha_id: 1,
                dia:1, //sabado
                horarioBairro: "7:20",
                horarioCentro: "7:35",
            },
            {
                linha_id: 1,
                dia:1, //sabado
                horarioBairro: "8:00",
                horarioCentro: "8:40",
            },
            {
                linha_id: 1,
                dia:1, //sabado
                horarioBairro: "9:15",
                horarioCentro: "9:30",
            },
            {
                linha_id: 1,
                dia:1, //sabado
                horarioBairro: "10:00",
                horarioCentro: "10:15",
            },
            {
                linha_id: 1,
                dia:1, //sabado
                horarioBairro: "11:00",
                horarioCentro: "11:15",
            },
            {
                linha_id: 1,
                dia:1, //sabado
                horarioBairro: "12:00",
                horarioCentro: "12:15",
            },
            {
                linha_id: 1,
                dia:1, //sabado
                horarioBairro: "13:00",
                horarioCentro: "13:15",
            },
            {
                linha_id: 1,
                dia:1, //sabado
                horarioBairro: "14:00",
                horarioCentro: "14:15",
            },
            {
                linha_id: 1,
                dia:1, //sabado
                horarioBairro: "--:--",
                horarioCentro: "14:30",
            },
            {
                linha_id: 1,
                dia:1, //sabado
                horarioBairro: "14:45",
                horarioCentro: "16:00",
            },
            {
                linha_id: 1,
                dia:1, //sabado
                horarioBairro: "16:15",
                horarioCentro: "17:30",
            },
            {
                linha_id: 1,
                dia:1, //sabado
                horarioBairro: "17:45",
                horarioCentro: "19:00",
            },
            {
                linha_id: 1,
                dia:1, //sabado
                horarioBairro: "19:15",
                horarioCentro: "--:--",
            },
            {
                linha_id: 1,
                dia:2, //domingo
                horarioBairro: "7:50",
                horarioCentro: "8:15",
            },
            {
                linha_id: 1,
                dia:2, //domingo
                horarioBairro: "9:30",
                horarioCentro: "9:45",
            },
            {
                linha_id: 1,
                dia:2, //domingo
                horarioBairro: "11:00",
                horarioCentro: "11:15",
            },
            {
                linha_id: 1,
                dia:2, //domingo
                horarioBairro: "12:30",
                horarioCentro: "12:45",
            },
            {
                linha_id: 1,
                dia:2, //domingo
                horarioBairro: "14:00",
                horarioCentro: "14:15",
            },
            {
                linha_id: 1,
                dia:2, //domingo
                horarioBairro: "15:30",
                horarioCentro: "15:45",
            },
            {
                linha_id: 1,
                dia:2, //domingo
                horarioBairro: "17:00",
                horarioCentro: "17:15",
            },
            {
                linha_id: 1,
                dia:2, //domingo
                horarioBairro: "18:30",
                horarioCentro: "18:45",
            },
            {
                linha_id: 2,
                dia:0, //util
                horarioBairro: "5:45",
                horarioCentro: "6:20",
            },
            {
                linha_id: 2,
                dia:0, //util
                horarioBairro: "6:50",
                horarioCentro: "7:40",
            },
            {
                linha_id: 2,
                dia:0, //util
                horarioBairro: "8:30",
                horarioCentro: "9:10",
            },
            {
                linha_id: 2,
                dia:0, //util
                horarioBairro: "10:10",
                horarioCentro: "10:50",
            },
            {
                linha_id: 2,
                dia:0, //util
                horarioBairro: "11:50",
                horarioCentro: "12:30",
            },
            {
                linha_id: 2,
                dia:0, //util
                horarioBairro: "13:30",
                horarioCentro: "14:10",
            },
            {
                linha_id: 2,
                dia:0, //util
                horarioBairro: "15:10",
                horarioCentro: "15:50",
            },
            {
                linha_id: 2,
                dia:0, //util
                horarioBairro: "16:50",
                horarioCentro: "17:30",
            },
            {
                linha_id: 2,
                dia:1, //util
                horarioBairro: "6:50",
                horarioCentro: "7:40",
            },
            {
                linha_id: 2,
                dia:1, //util
                horarioBairro: "8:30",
                horarioCentro: "9:10",
            },
            {
                linha_id: 2,
                dia:1, //util
                horarioBairro: "10:10",
                horarioCentro: "10:50",
            },
            {
                linha_id: 2,
                dia:1, //util
                horarioBairro: "11:50",
                horarioCentro: "12:30",
            },
            {
                linha_id: 2,
                dia:1, //util
                horarioBairro: "13:30",
                horarioCentro: "14:10",
            },
            {
                linha_id: 3,
                dia:0, //util
                horarioBairro: "5:00",
                horarioCentro: "5:20",
            },
            {
                linha_id: 3,
                dia:0, //util
                horarioBairro: "5:45",
                horarioCentro: "6:10",
            },
            {
                linha_id: 3,
                dia:0, //util
                horarioBairro: "6:30",
                horarioCentro: "6:55",
            },
            {
                linha_id: 3,
                dia:0, //util
                horarioBairro: "6:45",
                horarioCentro: "7:10",
            },
            {
                linha_id: 3,
                dia:0, //util
                horarioBairro: "7:00",
                horarioCentro: "7:25",
            },
            {
                linha_id: 3,
                dia:0, //util
                horarioBairro: "7:15",
                horarioCentro: "7:40",
            },
            {
                linha_id: 3,
                dia:0, //util
                horarioBairro: "7:30",
                horarioCentro: "7:55",
            },
            {
                linha_id: 3,
                dia:0, //util
                horarioBairro: "7:45",
                horarioCentro: "8:10",
            },
            {
                linha_id: 3,
                dia:0, //util
                horarioBairro: "8:00",
                horarioCentro: "8:25",
            },
            {
                linha_id: 3,
                dia:0, //util
                horarioBairro: "8:16",
                horarioCentro: "8:41",
            },
            {
                linha_id: 3,
                dia:0, //util
                horarioBairro: "8:32",
                horarioCentro: "8:57",
            },
            {
                linha_id: 3,
                dia:0, //util
                horarioBairro: "8:48",
                horarioCentro: "9:13",
            },
            {
                linha_id: 3,
                dia:0, //util
                horarioBairro: "9:04",
                horarioCentro: "9:29",
            },
            {
                linha_id: 3,
                dia:0, //util
                horarioBairro: "9:20",
                horarioCentro: "9:45",
            },
            {
                linha_id: 3,
                dia:0, //util
                horarioBairro: "9:36",
                horarioCentro: "10:01",
            },
            {
                linha_id: 3,
                dia:0, //util
                horarioBairro: "9:52",
                horarioCentro: "10:17",
            },
            {
                linha_id: 3,
                dia:0, //util
                horarioBairro: "10:08",
                horarioCentro: "10:33",
            },
            {
                linha_id: 3,
                dia:0, //util
                horarioBairro: "10:24",
                horarioCentro: "10:49",
            },
            {
                linha_id: 3,
                dia:0, //util
                horarioBairro: "10:40",
                horarioCentro: "11:05",
            },
            {
                linha_id: 3,
                dia:0, //util
                horarioBairro: "10:56",
                horarioCentro: "11:21",
            },
            {
                linha_id: 3,
                dia:0, //util
                horarioBairro: "11:12",
                horarioCentro: "11:37",
            },
            {
                linha_id: 3,
                dia:0, //util
                horarioBairro: "11:28",
                horarioCentro: "11:53",
            },
            {
                linha_id: 3,
                dia:0, //util
                horarioBairro: "11:44",
                horarioCentro: "12:09",
            },
            {
                linha_id: 3,
                dia:0, //util
                horarioBairro: "12:00",
                horarioCentro: "12:25",
            },
            {
                linha_id: 3,
                dia:0, //util
                horarioBairro: "12:16",
                horarioCentro: "12:41",
            },
            {
                linha_id: 3,
                dia:0, //util
                horarioBairro: "12:32",
                horarioCentro: "12:57",
            },
            {
                linha_id: 3,
                dia:0, //util
                horarioBairro: "12:48",
                horarioCentro: "13:13",
            },
            {
                linha_id: 3,
                dia:0, //util
                horarioBairro: "13:04",
                horarioCentro: "13:29",
            },
            {
                linha_id: 3,
                dia:0, //util
                horarioBairro: "13:20",
                horarioCentro: "13:45",
            },
            {
                linha_id: 3,
                dia:0, //util
                horarioBairro: "13:36",
                horarioCentro: "14:01",
            },
            {
                linha_id: 3,
                dia:0, //util
                horarioBairro: "13:52",
                horarioCentro: "14:17",
            },
            {
                linha_id: 3,
                dia:0, //util
                horarioBairro: "14:08",
                horarioCentro: "14:33",
            },
            {
                linha_id: 3,
                dia:0, //util
                horarioBairro: "14:24",
                horarioCentro: "14:49",
            },
            {
                linha_id: 3,
                dia:0, //util
                horarioBairro: "14:40",
                horarioCentro: "15:05",
            },
            {
                linha_id: 3,
                dia:0, //util
                horarioBairro: "14:56",
                horarioCentro: "15:21",
            },
            {
                linha_id: 3,
                dia:0, //util
                horarioBairro: "15:12",
                horarioCentro: "15:37",
            },
            {
                linha_id: 3,
                dia:0, //util
                horarioBairro: "15:28",
                horarioCentro: "15:53",
            },
            {
                linha_id: 3,
                dia:0, //util
                horarioBairro: "15:44",
                horarioCentro: "16:09",
            },
            {
                linha_id: 3,
                dia:0, //util
                horarioBairro: "16:00",
                horarioCentro: "16:25",
            },
            {
                linha_id: 3,
                dia:0, //util
                horarioBairro: "16:16",
                horarioCentro: "16:41",
            },
            {
                linha_id: 3,
                dia:0, //util
                horarioBairro: "16:32",
                horarioCentro: "16:57",
            },
            {
                linha_id: 3,
                dia:0, //util
                horarioBairro: "16:48",
                horarioCentro: "17:13",
            },
            {
                linha_id: 3,
                dia:0, //util
                horarioBairro: "17:04",
                horarioCentro: "17:29",
            },
            {
                linha_id: 3,
                dia:0, //util
                horarioBairro: "17:26",
                horarioCentro: "17:51",
            },
            {
                linha_id: 3,
                dia:0, //util
                horarioBairro: "17:48",
                horarioCentro: "18:13",
            },
            {
                linha_id: 3,
                dia:0, //util
                horarioBairro: "18:10",
                horarioCentro: "18:35",
            },
            {
                linha_id: 3,
                dia:0, //util
                horarioBairro: "18:32",
                horarioCentro: "18:57",
            },
            {
                linha_id: 3,
                dia:0, //util
                horarioBairro: "19:00",
                horarioCentro: "19:25",
            },
            {
                linha_id: 3,
                dia:0, //util
                horarioBairro: "19:40",
                horarioCentro: "20:05",
            },
            {
                linha_id: 3,
                dia:0, //util
                horarioBairro: "20:00",
                horarioCentro: "20:25",
            },
            {
                linha_id: 3,
                dia:0, //util
                horarioBairro: "21:00",
                horarioCentro: "21:25",
            },
            {
                linha_id: 3,
                dia:0, //util
                horarioBairro: "21:40",
                horarioCentro: "22:15",
            },
            {
                linha_id: 3,
                dia:1, //sábado
                horarioBairro: "5:00",
                horarioCentro: "5:20",
            },
            {
                linha_id: 3,
                dia:1, //sábado
                horarioBairro: "5:45",
                horarioCentro: "6:05",
            },
            {
                linha_id: 3,
                dia:1, //sábado
                horarioBairro: "6:30",
                horarioCentro: "6:55",
            },
            {
                linha_id: 3,
                dia:1, //sábado
                horarioBairro: "6:50",
                horarioCentro: "7:15",
            },
            {
                linha_id: 3,
                dia:1, //sábado
                horarioBairro: "7:12",
                horarioCentro: "7:37",
            },
            {
                linha_id: 3,
                dia:1, //sábado
                horarioBairro: "7:34",
                horarioCentro: "7:59",
            },
            {
                linha_id: 3,
                dia:1, //sábado
                horarioBairro: "7:56",
                horarioCentro: "8:21",
            },
            {
                linha_id: 3,
                dia:1, //sábado
                horarioBairro: "8:18",
                horarioCentro: "8:43",
            },
            {
                linha_id: 3,
                dia:1, //sábado
                horarioBairro: "8:40",
                horarioCentro: "9:05",
            },
            {
                linha_id: 3,
                dia:1, //sábado
                horarioBairro: "9:02",
                horarioCentro: "9:27",
            },
            {
                linha_id: 3,
                dia:1, //sábado
                horarioBairro: "9:24",
                horarioCentro: "9:49",
            },
            {
                linha_id: 3,
                dia:1, //sábado
                horarioBairro: "9:46",
                horarioCentro: "10:11",
            },
            {
                linha_id: 3,
                dia:1, //sábado
                horarioBairro: "10:08",
                horarioCentro: "10:33",
            },
            {
                linha_id: 3,
                dia:1, //sábado
                horarioBairro: "10:30",
                horarioCentro: "10:55",
            },
            {
                linha_id: 3,
                dia:1, //sábado
                horarioBairro: "10:52",
                horarioCentro: "11:17",
            },
            {
                linha_id: 3,
                dia:1, //sábado
                horarioBairro: "11:14",
                horarioCentro: "11:39",
            },
            {
                linha_id: 3,
                dia:1, //sábado
                horarioBairro: "11:36",
                horarioCentro: "12:01",
            },
            {
                linha_id: 3,
                dia:1, //sábado
                horarioBairro: "11:58",
                horarioCentro: "12:23",
            },
            {
                linha_id: 3,
                dia:1, //sábado
                horarioBairro: "12:20",
                horarioCentro: "12:45",
            },
            {
                linha_id: 3,
                dia:1, //sábado
                horarioBairro: "12:42",
                horarioCentro: "13:07",
            },
            {
                linha_id: 3,
                dia:1, //sábado
                horarioBairro: "13:04",
                horarioCentro: "13:29",
            },
            {
                linha_id: 3,
                dia:1, //sábado
                horarioBairro: "13:30",
                horarioCentro: "13:55",
            },
            {
                linha_id: 3,
                dia:1, //sábado
                horarioBairro: "14:10",
                horarioCentro: "14:35",
            },
            {
                linha_id: 3,
                dia:1, //sábado
                horarioBairro: "15:10",
                horarioCentro: "15:35",
            },
            {
                linha_id: 3,
                dia:1, //sábado
                horarioBairro: "16:10",
                horarioCentro: "16:35",
            },
            {
                linha_id: 3,
                dia:1, //sábado
                horarioBairro: "17:10",
                horarioCentro: "17:35",
            },
            {
                linha_id: 3,
                dia:1, //sábado
                horarioBairro: "18:20",
                horarioCentro: "18:45",
            },
            {
                linha_id: 3,
                dia:1, //sábado
                horarioBairro: "19:40",
                horarioCentro: "20:05",
            },
            {
                linha_id: 3,
                dia:1, //sábado
                horarioBairro: "20:50",
                horarioCentro: "21:15",
            },
            {
                linha_id: 3,
                dia:2, //domingo
                horarioBairro: "6:00",
                horarioCentro: "6:25",
            },
            {
                linha_id: 3,
                dia:2, //domingo
                horarioBairro: "7:00",
                horarioCentro: "7:25",
            },
            {
                linha_id: 3,
                dia:2, //domingo
                horarioBairro: "8:00",
                horarioCentro: "8:25",
            },
            {
                linha_id: 3,
                dia:2, //domingo
                horarioBairro: "9:00",
                horarioCentro: "9:25",
            },
            {
                linha_id: 3,
                dia:2, //domingo
                horarioBairro: "10:00",
                horarioCentro: "10:25",
            },
            {
                linha_id: 3,
                dia:2, //domingo
                horarioBairro: "11:00",
                horarioCentro: "11:25",
            },
            {
                linha_id: 3,
                dia:2, //domingo
                horarioBairro: "12:00",
                horarioCentro: "12:25",
            },
            {
                linha_id: 3,
                dia:2, //domingo
                horarioBairro: "13:00",
                horarioCentro: "13:25",
            },
            {
                linha_id: 3,
                dia:2, //domingo
                horarioBairro: "14:00",
                horarioCentro: "14:25",
            },
            {
                linha_id: 3,
                dia:2, //domingo
                horarioBairro: "15:00",
                horarioCentro: "15:25",
            },
            {
                linha_id: 3,
                dia:2, //domingo
                horarioBairro: "16:00",
                horarioCentro: "16:25",
            },
            {
                linha_id: 3,
                dia:2, //domingo
                horarioBairro: "17:00",
                horarioCentro: "17:25",
            },
            {
                linha_id: 3,
                dia:2, //domingo
                horarioBairro: "18:00",
                horarioCentro: "18:25",
            },
            {
                linha_id: 3,
                dia:2, //domingo
                horarioBairro: "19:00",
                horarioCentro: "19:25",
            },
            {
                linha_id: 4,
                dia:0, //util
                horarioBairro: "5:10",
                horarioCentro: "5:30",
            },
            {
                linha_id: 4,
                dia:0, //util
                horarioBairro: "6:10",
                horarioCentro: "6:30",
            },
            {
                linha_id: 4,
                dia:0, //util
                horarioBairro: "6:40",
                horarioCentro: "7:00",
            },
            {
                linha_id: 4,
                dia:0, //util
                horarioBairro: "7:00",
                horarioCentro: "7:25",
            },
            {
                linha_id: 4,
                dia:0, //util
                horarioBairro: "7:15",
                horarioCentro: "7:40",
            },
            {
                linha_id: 4,
                dia:0, //util
                horarioBairro: "7:30",
                horarioCentro: "7:55",
            },
            {
                linha_id: 4,
                dia:0, //util
                horarioBairro: "7:40",
                horarioCentro: "8:05",
            },
            {
                linha_id: 4,
                dia:0, //util
                horarioBairro: "8:15",
                horarioCentro: "8:30",
            },
            {
                linha_id: 4,
                dia:0, //util
                horarioBairro: "8:25",
                horarioCentro: "8:50",
            },
            {
                linha_id: 4,
                dia:0, //util
                horarioBairro: "8:50",
                horarioCentro: "9:15",
            },
            {
                linha_id: 4,
                dia:0, //util
                horarioBairro: "9:10",
                horarioCentro: "9:35",
            },
            {
                linha_id: 4,
                dia:0, //util
                horarioBairro: "9:30",
                horarioCentro: "9:55",
            },
            {
                linha_id: 4,
                dia:0, //util
                horarioBairro: "9:40",
                horarioCentro: "10:15",
            },
            {
                linha_id: 4,
                dia:0, //util
                horarioBairro: "10:10",
                horarioCentro: "10:35",
            },
            {
                linha_id: 4,
                dia:0, //util
                horarioBairro: "10:30",
                horarioCentro: "10:55",
            },
            {
                linha_id: 4,
                dia:0, //util
                horarioBairro: "10:50",
                horarioCentro: "11:15",
            },
            {
                linha_id: 4,
                dia:0, //util
                horarioBairro: "11:10",
                horarioCentro: "11:35",
            },
            {
                linha_id: 4,
                dia:0, //util
                horarioBairro: "11:30",
                horarioCentro: "11:55",
            },
            {
                linha_id: 4,
                dia:0, //util
                horarioBairro: "11:50",
                horarioCentro: "12:15",
            },
            {
                linha_id: 4,
                dia:0, //util
                horarioBairro: "11:50",
                horarioCentro: "12:15",
            },
            {
                linha_id: 4,
                dia:0, //util
                horarioBairro: "12:05",
                horarioCentro: "12:35",
            },
            {
                linha_id: 4,
                dia:0, //util
                horarioBairro: "12:30",
                horarioCentro: "12:55",
            },
            {
                linha_id: 4,
                dia:0, //util
                horarioBairro: "12:50",
                horarioCentro: "13:15",
            },
            {
                linha_id: 4,
                dia:0, //util
                horarioBairro: "13:10",
                horarioCentro: "13:35",
            },
            {
                linha_id: 4,
                dia:0, //util
                horarioBairro: "13:30",
                horarioCentro: "13:55",
            },
            {
                linha_id: 4,
                dia:0, //util
                horarioBairro: "13:50",
                horarioCentro: "14:15",
            },
            {
                linha_id: 4,
                dia:0, //util
                horarioBairro: "14:10",
                horarioCentro: "14:35",
            },
            {
                linha_id: 4,
                dia:0, //util
                horarioBairro: "14:30",
                horarioCentro: "14:55",
            },
            {
                linha_id: 4,
                dia:0, //util
                horarioBairro: "14:50",
                horarioCentro: "15:15",
            },
            {
                linha_id: 4,
                dia:0, //util
                horarioBairro: "15:10",
                horarioCentro: "15:35",
            },
            {
                linha_id: 4,
                dia:0, //util
                horarioBairro: "15:30",
                horarioCentro: "15:55",
            },
            {
                linha_id: 4,
                dia:0, //util
                horarioBairro: "15:50",
                horarioCentro: "16:15",
            },
            {
                linha_id: 4,
                dia:0, //util
                horarioBairro: "16:10",
                horarioCentro: "16:35",
            },
            {
                linha_id: 4,
                dia:0, //util
                horarioBairro: "16:30",
                horarioCentro: "16:55",
            },
            {
                linha_id: 4,
                dia:0, //util
                horarioBairro: "17:10",
                horarioCentro: "17:35",
            },
            {
                linha_id: 4,
                dia:0, //util
                horarioBairro: "17:30",
                horarioCentro: "17:55",
            },
            {
                linha_id: 4,
                dia:0, //util
                horarioBairro: "18:00",
                horarioCentro: "18:25",
            },
            {
                linha_id: 4,
                dia:0, //util
                horarioBairro: "18:30",
                horarioCentro: "18:55",
            },
            {
                linha_id: 4,
                dia:0, //util
                horarioBairro: "18:50",
                horarioCentro: "19:15",
            },
            {
                linha_id: 4,
                dia:0, //util
                horarioBairro: "19:10",
                horarioCentro: "19:35",
            },
            {
                linha_id: 4,
                dia:0, //util
                horarioBairro: "19:40",
                horarioCentro: "20:05",
            },
            {
                linha_id: 4,
                dia:0, //util
                horarioBairro: "20:10",
                horarioCentro: "20:30",
            },
            {
                linha_id: 4,
                dia:0, //util
                horarioBairro: "21:10",
                horarioCentro: "21:35",
            },
            {
                linha_id: 4,
                dia:0, //util
                horarioBairro: "22:00",
                horarioCentro: "22:30",
            },
            {
                linha_id: 4,
                dia:1, //util
                horarioBairro: "05:10",
                horarioCentro: "05:30",
            },
            {
                linha_id: 4,
                dia:1, //util
                horarioBairro: "05:10",
                horarioCentro: "05:30",
            },
            {
                linha_id: 4,
                dia:1, //util
                horarioBairro: "06:10",
                horarioCentro: "06:30",
            },
            {
                linha_id: 4,
                dia:1, //util
                horarioBairro: "07:10",
                horarioCentro: "07:30",
            },
            {
                linha_id: 4,
                dia:1, //util
                horarioBairro: "07:30",
                horarioCentro: "07:50",
            },
            {
                linha_id: 4,
                dia:1, //util
                horarioBairro: "07:40",
                horarioCentro: "08:00",
            },
            {
                linha_id: 4,
                dia:1, //util
                horarioBairro: "08:10",
                horarioCentro: "08:35",
            },
            {
                linha_id: 4,
                dia:1, //util
                horarioBairro: "08:40",
                horarioCentro: "09:05",
            },
            {
                linha_id: 4,
                dia:1, //util
                horarioBairro: "09:10",
                horarioCentro: "09:35",
            },
            {
                linha_id: 4,
                dia:1, //util
                horarioBairro: "10:10",
                horarioCentro: "10:35",
            },
            {
                linha_id: 4,
                dia:1, //util
                horarioBairro: "10:40",
                horarioCentro: "11:05",
            },
            {
                linha_id: 4,
                dia:1, //util
                horarioBairro: "11:10",
                horarioCentro: "11:35",
            },
            {
                linha_id: 4,
                dia:1, //util
                horarioBairro: "11:40",
                horarioCentro: "12:05",
            },
            {
                linha_id: 4,
                dia:1, //util
                horarioBairro: "12:10",
                horarioCentro: "12:35",
            },
            {
                linha_id: 4,
                dia:1, //util
                horarioBairro: "12:40",
                horarioCentro: "13:30",
            },
            {
                linha_id: 4,
                dia:1, //util
                horarioBairro: "13:10",
                horarioCentro: "13:30",
            },
            {
                linha_id: 4,
                dia:1, //util
                horarioBairro: "13:40",
                horarioCentro: "14:05",
            },
            {
                linha_id: 4,
                dia:1, //util
                horarioBairro: "14:10",
                horarioCentro: "14:35",
            },
            {
                linha_id: 4,
                dia:1, //util
                horarioBairro: "14:50",
                horarioCentro: "15:15",
            },
            {
                linha_id: 4,
                dia:1, //util
                horarioBairro: "16:00",
                horarioCentro: "16:25",
            },
            {
                linha_id: 4,
                dia:1, //util
                horarioBairro: "17:10",
                horarioCentro: "17:35",
            },
            {
                linha_id: 4,
                dia:1, //util
                horarioBairro: "18:20",
                horarioCentro: "18:45",
            },
            {
                linha_id: 4,
                dia:1, //util
                horarioBairro: "19:30",
                horarioCentro: "19:55",
            },
            {
                linha_id: 4,
                dia:1, //util
                horarioBairro: "20:40",
                horarioCentro: "21:05",
            },
            {
                linha_id: 4,
                dia:2, //util
                horarioBairro: "6:10",
                horarioCentro: "6:30",
            },
            {
                linha_id: 4,
                dia:2, //util
                horarioBairro: "7:10",
                horarioCentro: "7:30",
            },
            {
                linha_id: 4,
                dia:2, //util
                horarioBairro: "8:30",
                horarioCentro: "8:55",
            },
            {
                linha_id: 4,
                dia:2, //util
                horarioBairro: "9:50",
                horarioCentro: "10:15",
            },
            {
                linha_id: 4,
                dia:2, //util
                horarioBairro: "11:10",
                horarioCentro: "11:35",
            },
            {
                linha_id: 4,
                dia:2, //util
                horarioBairro: "12:30",
                horarioCentro: "12:55",
            },
            {
                linha_id: 4,
                dia:2, //util
                horarioBairro: "13:50",
                horarioCentro: "14:15",
            },
            {
                linha_id: 4,
                dia:2, //util
                horarioBairro: "15:10",
                horarioCentro: "15:35",
            },
            {
                linha_id: 4,
                dia:2, //util
                horarioBairro: "16:30",
                horarioCentro: "16:55",
            },
            {
                linha_id: 4,
                dia:2, //util
                horarioBairro: "17:50",
                horarioCentro: "18:15",
            },
            {
                linha_id: 4,
                dia:2, //util
                horarioBairro: "19:10",
                horarioCentro: "19:35",
            },
            
        ]
        const dados = {empresas, linhas, paradas, horario};
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