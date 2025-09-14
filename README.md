# quiz-master-react
Interactive React Quiz App with timed multiple-choice questions, instant feedback, and a summary showing correct, wrong, and skipped answers

React Quiz App
Project Overview

This is a React-based Quiz Application that allows users to take interactive quizzes and view their results at the end. It provides a smooth and responsive user experience, simulating real-time quiz environments. The app is ideal for learning and practicing React concepts in a fun and engaging way.

Features

Multiple Choice Questions: Users answer multiple-choice questions with four options.
Timed Questions: Each question has a timer, and unanswered questions are automatically skipped.
Answer Feedback: Selected answers are highlighted to indicate correct or incorrect choices.
Progress Tracking: Keeps track of user answers, skipped questions, and calculates correct/incorrect percentages.
Summary Screen: At the end of the quiz, users see a detailed summary with visual feedback and statistics.
Responsive Design: Works across different screen sizes and devices.

Key Concepts Used

React Functional Components: For building modular and reusable UI elements.
React Hooks:
useState for managing component state.
useEffect for handling side-effects like timers.
useRef for storing persistent values without triggering re-renders.
useCallback for optimizing functions and preventing unnecessary re-renders.
Conditional Rendering: To dynamically display feedback and question content.
JavaScript Array Methods: map() and filter() for rendering lists and calculating statistics.
Component Communication: Props are used for passing data and event handlers between components.
CSS Styling: Custom styles to differentiate answer states (correct, wrong, selected, skipped).
Asset Handling: Images (like the quiz completion trophy) displayed in the summary screen.

Folder Structure
/src
  /assets          # Images used in the project
  /components      # React components (Question, Answers, QuestionTimer, Summary, Quiz)
  /questions.js    # List of quiz questions and answers
  App.jsx          # Main App component
  index.js         # Entry point

How It Works

Users start the quiz and are presented with the first question.
A timer counts down for each question. If the user does not answer in time, the question is skipped.
When a user selects an answer, it is temporarily highlighted and then marked as correct or wrong.
After answering all questions, a summary screen displays:
Correct, wrong, and skipped answer percentages
Each question with the user’s answer highlighted

Technologies

React.js (v18+ recommended)
JavaScript (ES6+)
CSS3

Future Enhancements

Add categories and difficulty levels for questions.
Implement user authentication to save quiz progress.
Include animated progress bars and more interactive UI elements.
Add a score leaderboard for multiple users.
