import { Aluno } from "./src/Aluno.js";
import { Turma } from "./src/Turma.js";
import { TurmaPresencial } from "./src/TurmaPresencial.js";

const aluno = new Aluno('Patrik', 'patrikmelod', '2348126');
const turma = new Turma('ARQSOFTW', 7.5);
const turmaPresencial = new TurmaPresencial('ARQSOFTW', 8.0, 80);

console.log(aluno);
console.log(turma.aprovado());
console.log(turmaPresencial.aprovado());