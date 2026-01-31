class Exam {
    constructor(question) {
        this.question = question;
    }

    calculateScore(studentAnswer) {
        let score = 0;

        for (let i = 0; i < this.question.length; i++) {
            if (studentAnswer[i] === this.question[i].resposta) {
                score += this.questions[i].peso;
            }
        }

        return score;
    }
}

const exam = new Exam([
    { peso: 2, resposta: 'a' },
    { peso: 2, resposta: 'b' },
    { peso: 2, resposta: 'a' },
    { peso: 2, resposta: 'c' },
    { peso: 2, resposta: 'd' }
]);

const studentAnswers = ['a', 'b', 'b', 'b', 'b'];

const finalScore = exam.calculateScore(studentAnswers);

console.log(`Nota final do aluno: ${finalScore}`);