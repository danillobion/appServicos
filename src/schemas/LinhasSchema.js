export default class LinhasSchema{
    static schema = {
        name: 'Linhas',
        primaryKey: "id",
        properties: {
            id:  'int',
            empresa_id:  'int',
            linha: 'string',
            numero: 'string',
            tempoDeEspera: 'int',
            valor: 'string',
            paradas: "Paradas[]",
            horarios: "Horarios[]",
        }
    }
}