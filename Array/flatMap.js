const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    },{
        nome: 'Maria',
        nota: 9.1
    }]
},{
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 6.1
    },{
        nome: 'Roberto',
        nota: 8.1
    }]
}]

const getNotaAluno  = aluno => aluno.nota
const getNotasTurma = turma => turma.alunos.map(getNotaAluno)


const notas1 = escola.map(getNotasTurma)
console.log(notas1)