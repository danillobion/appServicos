export default class LinhasSchema{
    static schema = {
        name: 'Linhas',
        properties: {
            empresa_id:  'int',
            linha: 'string',
            numero: 'string',
            tempoDeEspera: 'int',
            valor: 'string',
        }
    }
}