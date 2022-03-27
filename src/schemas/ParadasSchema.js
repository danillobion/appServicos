export default class ParadasSchema{
    static schema = {
        name: 'Paradas',
        properties: {
            linha_id:  'int',
            rua: 'string',
            latitude: 'string',
            longitude: 'string',
        }
    }
}
