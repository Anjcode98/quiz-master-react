import React, { useState } from 'react';
import QuestionTimer from './QuestionTimer.jsx';
import Answers from './Answers.jsx';
import QUESTION from "../questions.js";

/**
 * Question Component
 * ------------------
 * Renders a single quiz question with:
 *  - A timer (QuestionTimer)
 *  - A question text
 *  - Multiple-choice answers (Answers component)
 *
 * Props:
 * - index (number): Index of the current question in QUESTION array.
 * - onSelectAnswer (function): Callback when the user selects an answer.
 * - onSkipAnswer (function): Callback when the user runs out of time.
 */
function Question({ index, onSelectAnswer, onSkipAnswer }) {
  /**
   * Local state for answer tracking:
   * - selectedAnswer (string): Answer chosen by the user.
   * - isCorrect (boolean|null): Whether the selected answer is correct.
   *    null means "not yet evaluated".
   */
  const [answer, setAnswer] = useState({
    selectedAnswer: '',
    isCorrect: null,
  });

  /**
   * Timer logic:
   * - Default = 10s to answer
   * - After selecting an answer, shorten timer to 1s (for quick feedback)
   * - After checking correctness, extend to 2s before moving on
   */
  let timer = 10000;
  if (answer.selectedAnswer) {
    timer = 1000;
  }
  if (answer.isCorrect !== null) {
    timer = 2000;
  }

  /**
   * Handles when a user selects an answer
   * Step 1: Save the selected answer (but don’t mark correctness yet).
   * Step 2: After 1s, evaluate correctness.
   * Step 3: After 2s, call parent (onSelectAnswer) to move to next question.
   */
  function handleSelectAnswer(answer) {
    // Step 1: User clicked an answer → save it
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    // Step 2: Wait 1s, then check correctness
    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTION[index].answers[0] === answer, // Correct if matches first option
      });

      // Step 3: After 2s, notify parent to move forward
      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  }

  /**
   * Determine current answer state for UI styling
   * - '' → not answered yet
   * - 'answered' → user clicked but waiting for correctness check
   * - 'correct' → user got it right
   * - 'wrong' → user got it wrong
   */
  let answerState = '';
  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? 'correct' : 'wrong';
  } else if (answer.selectedAnswer) {
    answerState = 'answered';
  }

  return (
    <div id="question">
      {/* Question Timer - resets whenever "timer" changes */}
      <QuestionTimer
        key={timer} // Forces remount when timer changes
        timeout={timer}
        onTimeout={answer.selectedAnswer === '' ? onSkipAnswer : null} // Skip only if unanswered
        mode={answerState} // Pass answer state for styling
      />

      {/* Question text */}
      <h2>{QUESTION[index].text}</h2>

      {/* Answer buttons */}
      <Answers
        answers={QUESTION[index].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
}

export default Question;
