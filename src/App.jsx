import React, { useState } from 'react';
    import './index.css';

    const questions = [
      {
        question: 'What is the primary goal of supervised learning?',
        options: [
          'To predict the output based on input data',
          'To find patterns in data without labeled responses',
          'To cluster data into groups',
          'To reduce the dimensionality of data'
        ],
        answer: 0,
        explanation: 'Supervised learning involves training a model on a labeled dataset, where the input data is paired with the correct output. The goal is to predict the output for new, unseen input data.'
      },
      {
        question: 'Which of the following is an example of unsupervised learning?',
        options: [
          'Linear Regression',
          'K-Means Clustering',
          'Logistic Regression',
          'Decision Tree'
        ],
        answer: 1,
        explanation: 'Unsupervised learning involves finding patterns in data without labeled responses. K-Means Clustering is a common example of unsupervised learning where data is grouped into clusters based on similarities.'
      },
      {
        question: 'What is overfitting in machine learning?',
        options: [
          'When a model performs well on training data but poorly on new data',
          'When a model performs poorly on both training and new data',
          'When a model is too simple to capture the underlying data distribution',
          'When a model is trained on too little data'
        ],
        answer: 0,
        explanation: 'Overfitting occurs when a model is too complex and captures noise in the training data, leading to poor performance on new, unseen data.'
      }
    ];

    function App() {
      const [currentQuestion, setCurrentQuestion] = useState(0);
      const [score, setScore] = useState(0);
      const [showExplanation, setShowExplanation] = useState(false);
      const [userAnswer, setUserAnswer] = useState(null);

      const handleAnswerOptionClick = (optionIndex) => {
        setUserAnswer(optionIndex);
        setShowExplanation(true);
        if (optionIndex === questions[currentQuestion].answer) {
          setScore(score + 1);
        }
      };

      const handleNextQuestion = () => {
        setShowExplanation(false);
        setUserAnswer(null);
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
          setCurrentQuestion(nextQuestion);
        }
      };

      return (
        <div className="quiz-container">
          <div className="question-section">
            <div className="question-text">
              {questions[currentQuestion].question}
            </div>
            <div className="options">
              {questions[currentQuestion].options.map((option, index) => (
                <div
                  key={index}
                  className={`option ${userAnswer === index ? (index === questions[currentQuestion].answer ? 'correct' : 'wrong') : ''}`}
                  onClick={() => handleAnswerOptionClick(index)}
                >
                  {option}
                </div>
              ))}
            </div>
          </div>
          {showExplanation && (
            <div className="explanation">
              <p>{questions[currentQuestion].explanation}</p>
              <button onClick={handleNextQuestion}>Next Question</button>
            </div>
          )}
          {!showExplanation && currentQuestion === questions.length - 1 && (
            <div className="score-section">
              <div className="score">You scored {score} out of {questions.length}</div>
            </div>
          )}
        </div>
      );
    }

    export default App;
