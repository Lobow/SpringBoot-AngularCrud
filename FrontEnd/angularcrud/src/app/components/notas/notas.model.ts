import { Aluno } from '../alunos/alunos.model';
import { Professor } from '../professor/professor.model';


export class Notas{
    idNotas?: number
    aluno?: Aluno = new Aluno();
    professor?: Professor = new Professor();
    nota1: number
    nota2: number
    nota3: number
    media: number
}

