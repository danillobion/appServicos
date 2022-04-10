export default class ParadasSchema{
    static schema = {
        name: 'Paradas',
        primaryKey: "id",
        properties: {
            id:  'int',
            rua: 'string',
            latitude: 'string',
            longitude: 'string',
            paradas: "Paradas[]",
        }
    }
}
