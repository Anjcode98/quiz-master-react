import React, { useState, useCallback } from 'react';
import QUESTION from "../questions.js";
import Question from './Question.jsx';
import Summary from './Summary.jsx';

/**
 * Quiz Component
 * --------------
 * This is the main controller of the quiz application.
 * - Manages user progress (answers, skipped questions).
 * - Decides whether to show the current Question or the Summary at the end.
 */
function Quiz() {
  // Stores all answers selected by the user (or null if skipped).
  // Example: ['Answer A', null, 'Answer C']
  const [userAnswers, setUserAnswers] = useState([]);

  // Active question index = how many answers we have so far
  const activeQuestionIndex = userAnswers.length;

  // Check if quiz is finished (all questions answered/skipped)
  const quizIsComplete = activeQuestionIndex === QUESTION.length;

  /**
   * Handles when a user selects an answer.
   * - Stores the chosen answer in state (or "null" if skipped).
   * - useCallback used to avoid unnecessary re-renders when passed as prop.
   */
  const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevUserAnswer) => {
      return [...prevUserAnswer, selectedAnswer];
    });
  }, []);

  // Handles when time runs out (skip = store "null" as the answer)
  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  // If all questions are answered → show Summary screen
  if (quizIsComplete) {
    return <Summary userAnswers={userAnswers} />;
  }

  // Otherwise → render current question
  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex} // Forces re-mount for each new question
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}

export default Quiz;
