import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'what does Earth travel around once a year?',
			answerOptions: [
				{ answerText: 'Sun', isCorrect: true },
				{ answerText: 'Moon', isCorrect: false },
				{ answerText: 'Pluto', isCorrect: false },
				{ answerText: 'Saturnn', isCorrect: false },
			],
		},
		{
			questionText: 'When was the declaration of independence signed',
			answerOptions: [
				{ answerText: 'July 5, 1776', isCorrect: false },
				{ answerText: 'July 4, 1776', isCorrect: true },
				{ answerText: 'July 4, 1756', isCorrect: false },
				{ answerText: 'July 4, 1778', isCorrect: false },
			],
		},
		{
			questionText: 'When did Christopher Columbus discovered?',
			answerOptions: [
				{ answerText: '1492', isCorrect: true },
				{ answerText: '1592', isCorrect: false },
				{ answerText: '1582', isCorrect: false },
				{ answerText: '1482', isCorrect: false },
			],
		},
		{
			questionText: 'What country does the pope live in?',
			answerOptions: [
				{ answerText: 'Italy', isCorrect: false },
				{ answerText: 'Russia', isCorrect: false },
				{ answerText: 'Greece', isCorrect: false },
				{ answerText: 'The Vatican', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
