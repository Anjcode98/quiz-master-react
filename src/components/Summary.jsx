import React from 'react';
import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTION from "../questions.js";

/**
 * Summary Component
 * -----------------
 * Displays the quiz results after the user completes all questions.
 *
 * Props:
 * - userAnswers (array): List of answers given by the user.
 *   - `null` means the question was skipped.
 *   - Otherwise, the string contains the selected answer.
 */
function Summary({ userAnswers }) {
  // Count skipped answers (user pressed next without answering)
  const skippedAnswers = userAnswers.filter((answer) => answer === null);

  // Count correct answers (compare with the first item in `QUESTION[index].answers`)
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === QUESTION[index].answers[0]
  );

  // Calculate percentages of skipped, correct, and wrong answers
  const skippedAnswersShare =
    Math.round((skippedAnswers.length / userAnswers.length) * 100);
  const correctAnswersShare =
    Math.round((correctAnswers.length / userAnswers.length) * 100);
  const wrongAnswersShare = 100 - (skippedAnswersShare + correctAnswersShare);

  return (
    <div id="summary">
      {/* Trophy / completion image */}
      <img src={quizCompleteImg} alt="Trophy Icon" />
      <h2>Quiz Completed!</h2>

      {/* High-level quiz statistics */}
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswersShare}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswersShare}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{wrongAnswersShare}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>

      {/* Detailed per-question results */}
      <ol>
        {userAnswers.map((answer, index) => {
          // Assign CSS classes based on user’s answer
          let cssClass = 'user-answer';

          if (answer === null) {
            cssClass += ' skipped'; // Not answered
          } else if (answer === QUESTION[index].answers[0]) {
            cssClass += ' correct'; // Correct answer
          } else {
            cssClass += ' wrong'; // Incorrect answer
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              {/* Question text */}
              <p className="question">{QUESTION[index].text}</p>
              {/* User’s answer or "skipped" if null */}
              <p className={cssClass}>{answer ?? 'skipped'}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default Summary;
