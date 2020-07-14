import { Aluno } from '../alunos/alunos.model'
import { Curso } from '../cursos/curso.model'

export interface Matricula{
    idMatricula: number
    aluno: Aluno
    curso: Curso
}