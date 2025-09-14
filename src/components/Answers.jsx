import React, { useRef } from 'react';
import QUESTION from "../questions.js";

/**
 * Answers Component
 * -----------------
 * Displays multiple-choice answers for a quiz question.
 *
 * Props:
 * - answers (array): List of possible answers (first one is usually correct).
 * - selectedAnswer (string): The answer currently chosen by the user.
 * - answerState (string): Current state of the question:
 *    '' (not answered), 'answered', 'correct', or 'wrong'.
 * - onSelect (function): Callback to handle when a user selects an answer.
 */
function Answers({ answers, selectedAnswer, answerState, onSelect }) {
  // useRef ensures that answers are only shuffled once (when the component mounts),
  // preventing reshuffling on every re-render.
  const shuffledAnswers = useRef();

  // Shuffle answers only if not already shuffled
  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers]; // Copy original answers
    shuffledAnswers.current.sort(() => Math.random() - 0.5); // Randomize order
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer; // Check if this answer was picked
        let cssClass = ''; // CSS class to style the answer button

        // Apply styles depending on quiz state
        if (answerState === 'answered' && isSelected) {
          cssClass = 'selected'; // Answer chosen, waiting for correctness check
        }

        if (answerState === 'correct' && isSelected) {
          cssClass = 'correct'; // User picked the correct answer
        }

        if (answerState === 'wrong') {
          if (isSelected) {
            cssClass = 'wrong'; // Highlight wrong answer chosen by user
          } else if (answer === answers[0]) {
            cssClass = 'correct'; // Highlight the actual correct answer
          }
        }

        return (
          <li key={answer} className="answer">
            <button
              onClick={() => onSelect(answer)} // Send selected answer to parent
              className={cssClass}
              disabled={answerState !== ''} // Disable buttons after user has answered
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default Answers;
