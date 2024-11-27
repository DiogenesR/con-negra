const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const questions = [
    {
        question: "O que é Consciência Negra?",
        answers: {
            a: "Um movimento cultural que promove a igualdade racial e valoriza a identidade negra",
            b: "Uma teoria científica que estuda a cor preta e suas propriedades físicas",
            c: "Um estilo de arte que utiliza apenas cores escuras para expressar emoções"
        },
        correctAnswer: "a"
    },
    {
        question: "Qual é o objetivo principal da Consciência Negra?",
        answers: {
            a: "Promover a igualdade racial e combater o racismo",
            b: "Criar uma separação racial e promover a superioridade negra",
            c: "Desenvolver políticas públicas apenas para benefícios econômicos"
        },
        correctAnswer: "a"
    },
    {
        question: "Quando é celebrado o Dia da Consciência Negra?",
        answers: {
            a: "20 de outubro",
            b: "20 de novembro",
            c: "20 de janeiro"
        },
        correctAnswer: "b"
    }
];

function buildQuiz() {
    const output = [];
    questions.forEach((currentQuestion, questionNumber) => {
        const answers = [];
        for (letter in currentQuestion.answers) {
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                </label>`
            );
        }
        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
        );
    });
    quizContainer.innerHTML = output.join('');
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;
    questions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;
            answerContainers[questionNumber].style.color = 'green';
        } else {
            answerContainers[questionNumber].style.color = 'red';
        }
    });
    resultsContainer.innerHTML = `${numCorrect} de ${questions.length} questões corretas`;
}

buildQuiz();
submitButton.addEventListener('click', showResults);
