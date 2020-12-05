import React, { useState } from 'react';

export default function App() {
    const questions = [
        {
            questionText: "What is the capital of Canada?",
            answerOptions: [
                {answerText: 'Vancouver', isCorrect: false},
                {answerText: 'Toronto', isCorrect: false},
                {answerText: 'Ottowa', isCorrect: true},
                { answerText: 'Quebec', isCorrect: false},
            ],
        },
        {
            questionText: "How many countries are there in the world?",
            answerOptions: [
                { answerText: '195', isCorrect: true },
                { answerText: '200', isCorrect: false },
                { answerText: '187', isCorrect: false },
                { answerText: '190', isCorrect: false },
            ],
        },
        {
            questionText: "What is the largest country by land mass?",
            answerOptions: [
                { answerText: 'U.S.A.', isCorrect: false },
                { answerText: 'China', isCorrect: false },
                { answerText: 'India', isCorrect: false },
                { answerText: 'Russia', isCorrect: true },
            ]
        },
        {
            questionText: "Which country has the largest population?",
            answerOptions: [
                { answerText: 'Indonesia', isCorrect: true },
                { answerText: 'France', isCorrect: false },
                { answerText: 'Philippines', isCorrect: false },
                { answerText: 'Brazil', isCorrect: false },
            ]
        },
        {
            questionText: "What country is the Taj Mahal located in?",
            answerOptions: [
                { answerText: 'Pakistan', isCorrect: false },
                { answerText: 'India', isCorrect: true },
                { answerText: 'Bangladesh', isCorrect: false },
                { answerText: 'Thailand', isCorrect: false },
            ]
        },
        {
            questionText: "People from this country are called 'Kiwis'.",
            answerOptions: [
                { answerText: 'Australia', isCorrect: false },
                { answerText: 'Fiji', isCorrect: false },
                { answerText: 'Samoa', isCorrect: false },
                { answerText: 'New Zealand', isCorrect: true },
            ]
        },
        {
            questionText: "What is the largest river in Europe?",
            answerOptions: [
                { answerText: 'Volga', isCorrect: true },
                { answerText: 'Danube', isCorrect: false },
                { answerText: 'Ural', isCorrect: false },
                { answerText: 'Dnieper', isCorrect: false },
            ]
        },
        {
            questionText: "What is the smallest country in the world?",
            answerOptions: [
                { answerText: 'San Marino', isCorrect: false },
                { answerText: 'Vatican City', isCorrect: true },
                { answerText: 'Monaco', isCorrect: false },
                { answerText: 'Andorra', isCorrect: false },
            ]
        },
        {
            questionText: "How many countries are inside the United Kingdom?",
            answerOptions: [
                { answerText: '4', isCorrect: true },
                { answerText: '5', isCorrect: false },
                { answerText: '6', isCorrect: false },
                { answerText: '3', isCorrect: false },
            ]
        },
        {
            questionText: "Which of the following is NOT a capital city?",
            answerOptions: [
                { answerText: 'Paris', isCorrect: false },
                { answerText: 'London', isCorrect: false },
                { answerText: 'Berlin', isCorrect: false },
                { answerText: 'Sydney', isCorrect: true },
            ]
        },
        {
            questionText: "What country has the most lakes?",
            answerOptions: [
                {answerText: 'Sweden', isCorrect: false},
                {answerText: 'Norway', isCorrect: false },
                { answerText: 'Canada', isCorrect: true },
                { answerText: 'U.S.A.', isCorrect: false },
            ]
        },
        {
            questionText: "What is the capital of Washington State in the U.S.A.?",
            answerOptions: [
                { answerText: 'Olympia', isCorrect: true },
                { answerText: 'Seattle', isCorrect: false },
                { answerText: 'Tacoma', isCorrect: false },
                { answerText: 'Spokane', isCorrect: false },
            ]
        },
        {
            questionText: "Where is Mt. Everest located?",
            answerOptions: [
                { answerText: 'Nepal', isCorrect: true },
                { answerText: 'Danube', isCorrect: false },
                { answerText: 'Ural', isCorrect: false },
                { answerText: 'Dnieper', isCorrect: false },
            ]
        }
    ]
}