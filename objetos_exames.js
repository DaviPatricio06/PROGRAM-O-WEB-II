class Exams {
    constructor() {
        this.questions = [];
    }

    addQuestion(num, peso, respostaCerta) {
    this.questions.push({
        numero: num,
        peso: peso,
        certa: respostaCerta,
    });
    }

    grade(respostasAluno) {
    let nota = 0;

    for (let i = 0; i < this.questions.length; i++) {
        let questao = this.questions[i];
        let respostaAluno = respostasAluno[i];

        if (respostaAluno === questao.certa) {
        nota = nota + questao.peso;
        }
    }

    return nota;
    }
}

let prova = new Exams();
prova.addQuestion(1, 2, "a");
prova.addQuestion(2, 2, "b");
prova.addQuestion(3, 2, "a");
prova.addQuestion(4, 2, "c");
prova.addQuestion(5, 2, "d");

let respostas = ["a", "b", "b", "b", "b"];
let notaFinal = prova.grade(respostas);

console.log("Nota final do aluno: " + notaFinal);
