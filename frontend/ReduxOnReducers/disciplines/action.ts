import { DisciplinesType,DisciplineId } from "../type/DisciplinesType";


type Action =
 { type: 'disciplines/init'; payload: DisciplinesType[] }|
 {type:'disciplines/getOne'; payload: DisciplineId}

export default Action;


