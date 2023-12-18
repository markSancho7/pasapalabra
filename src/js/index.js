import { QUESTIONS } from './questions';

const questionElement = document.getElementById('question');
const answerPlayerElement = document.getElementById('answerPlayer');
const containerLettersElement = document.getElementById('containerLetters');
const pasapalabraElement = document.getElementById('pasapalabra');
const timerElement = document.getElementById('timer');
const correctAnswerElement = document.getElementById('correctAnswer');
const buttonStartElement = document.getElementById('buttonStart');

let questionCounter = 0;
const jumpedQuestions = [];
let currentLetter;
let arrayOfQuestions = QUESTIONS;
let finalResult = 0;
let positiveAnswers = 0;
let timer = 110;
answerPlayerElement.disabled = true;
pasapalabraElement.disabled = true;

// colocar en circulo las letras
const letters = containerLettersElement.querySelectorAll('.letter');
const radius = 150;

const totalLetters = letters.length;
const angleIncrement = (2 * Math.PI) / totalLetters;

letters.forEach((letter, index) => {
	const angle = (3 * Math.PI) / 2 + index * angleIncrement;
	const x = radius * Math.cos(angle);
	const y = radius * Math.sin(angle);

	letter.style.left = `${x + radius}px`;
	letter.style.top = `${y + radius}px`;
});

const printQuestion = questionToPrint => {
	if (finalResult === 27) return;
	currentLetter = questionToPrint[questionCounter].id;
	questionElement.textContent = questionToPrint[questionCounter].question;
};

const checkCounter = () => {
	if (questionCounter >= arrayOfQuestions.length - 1) {
		questionCounter = 0;
		arrayOfQuestions = jumpedQuestions;
	} else {
		questionCounter++;
	}
	printQuestion(arrayOfQuestions);
};

const checkAnswer = event => {
	const answerPlayer = event.target.value;
	const letterElement = document.querySelector(
		`[data-letter='${currentLetter}']`
	);
	if (event.key !== 'Enter') return;
	else if (arrayOfQuestions === QUESTIONS) {
		if (answerPlayer === QUESTIONS[questionCounter].correctAnswer) {
			letterElement.classList.remove('letter--jumped');
			letterElement.classList.add('letter--correct');
			finalResult++;
			positiveAnswers++;
			correctAnswerElement.textContent = positiveAnswers;
		} else if (answerPlayer !== QUESTIONS[questionCounter].correctAnswer) {
			letterElement.classList.remove('letter--jumped');
			letterElement.classList.add('letter--incorrect');
			finalResult++;
		}
	} else if (arrayOfQuestions === jumpedQuestions) {
		if (answerPlayer === jumpedQuestions[questionCounter].correctAnswer) {
			letterElement.classList.remove('letter--jumped');
			letterElement.classList.add('letter--correct');
			jumpedQuestions.splice(questionCounter, 1);
			questionCounter--;
			finalResult++;
			positiveAnswers++;
			correctAnswerElement.textContent = positiveAnswers;
		} else {
			letterElement.classList.remove('letter--jumped');
			letterElement.classList.add('letter--incorrect');
			jumpedQuestions.splice(questionCounter, 1);
			questionCounter--;
			finalResult++;
		}
	}
	checkCounter();
};

const jumpQuestion = () => {
	const letterElement = document.querySelector(
		`[data-letter='${currentLetter}']`
	);
	if (arrayOfQuestions === QUESTIONS) {
		jumpedQuestions.push(QUESTIONS[questionCounter]);
		letterElement.classList.add('letter--jumped');
		console.log(jumpedQuestions);
		checkCounter();
	} else if (
		arrayOfQuestions !== QUESTIONS &&
		questionCounter <= jumpedQuestions.length - 1
	) {
		checkCounter();
	} else {
		questionCounter--;
		checkCounter();
	}
};

printQuestion(arrayOfQuestions);

const crono = () => {
	answerPlayerElement.disabled = false;
	pasapalabraElement.disabled = false;
	buttonStartElement.disabled = true;
	const intervalId = setInterval(() => {
		timerElement.textContent = timer;
		timer--;
		if (timer < 0 || finalResult === 27) {
			console.log('se termino el tiempo');
			answerPlayerElement.disabled = true;
			pasapalabraElement.disabled = true;
			clearInterval(intervalId);
		} else if (positiveAnswers === 27) {
			console.log('ganaste');
		}
	}, 1000);
};

buttonStartElement.addEventListener('click', crono);
answerPlayerElement.addEventListener('keypress', checkAnswer);
pasapalabraElement.addEventListener('click', jumpQuestion);
