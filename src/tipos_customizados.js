"use strict";
const alunos = [
    {
        nome: "carlos",
        cursos: ["front", "java"],
        idade: 25,
    },
    {
        nome: "julia",
        cursos: ["back", "pythin"],
        idade: 22,
    },
    {
        nome: "marcos",
        cursos: ["ui/ux", "type"],
        idade: 26,
    },
];
alunos.push({
    nome: "julia",
    cursos: ["back", "pythin"],
    idade: 22,
});
const novoAluno = {
    nome: "lucas",
    idade: 23,
};
function exibeAluno(aluno) {
    console.log(aluno.nome);
}
