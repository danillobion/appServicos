export default class HorariosSchema{
    static schema = {
        name: 'Horarios',
        properties: {
            linha_id:  'int',
            dia: 'int',
            horarioBairro: 'string',
            horarioCentro: 'string',
        }
    }
}