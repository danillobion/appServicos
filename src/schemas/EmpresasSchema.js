export default class EmpresasSchema{
    static schema = {
        name: 'Empresas',
        primaryKey: "id",
        properties: {
            id:  'int',
            nome: 'string',
            linha: "Linhas[]",
        }
    }
}