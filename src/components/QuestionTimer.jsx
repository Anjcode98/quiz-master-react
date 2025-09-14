import { React, useState, useEffect } from 'react';

/**
 * QuestionTimer Component
 * -----------------------
 * This component is responsible for displaying and managing
 * a countdown timer for each quiz question.
 *
 * Props:
 * - timeout (number): The total time (in ms) allowed for the question.
 * - onTimeout (function): Callback triggered when the timer runs out.
 * - mode (string): A CSS class name (e.g., "running", "warning") to style the progress bar.
 */
function QuestionTimer({ timeout, onTimeout, mode }) {
  // State to track the remaining time (in ms)
  const [remainingTime, setRemainingTime] = useState(timeout);

  /**
   * Effect #1: Runs once per question
   * - Starts a timer that will call `onTimeout` after the full `timeout` duration
   * - Cleans up the timer if the component unmounts or props change
   */
  useEffect(() => {
    const timer = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timer); // Prevent memory leaks
    };
  }, [onTimeout, timeout]);

  /**
   * Effect #2: Updates the remaining time every 100ms
   * - Decreases the remaining time progressively (smooth countdown)
   * - Cleans up the interval when component unmounts
   */
  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      {/* Progress bar showing remaining time */}
      <progress
        id="question-time"
        max={timeout}
        value={remainingTime}
        className={mode}
      />
    </div>
  );
}

export default QuestionTimer;
