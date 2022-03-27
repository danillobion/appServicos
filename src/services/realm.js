import Realm from 'realm';
import EmpresasSchema from '../schemas/EmpresasSchema';
import LinhasSchema from '../schemas/LinhasSchema';
import ParadasSchema from '../schemas/ParadasSchema';
import HorariosSchema from '../schemas/HorariosSchema';

export default function getRealm() {
    return Realm.open({
        schema:[EmpresasSchema,LinhasSchema,ParadasSchema,HorariosSchema],
    });
}