import { Aluno } from '../alunos/alunos.model';
import { Curso } from '../cursos/curso.model';

export class Matricula{
    idMatricula?: number;
    aluno: Aluno = new Aluno();
    curso: Curso = new Curso();
}