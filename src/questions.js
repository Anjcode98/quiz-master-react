export default [
  {
    id: 'q1',
    text: 'Which of the following definitions best describes React.js?',
    answers: [
      'A library to build user interfaces with help of declarative code.',
      'A library for managing state in web applications.',
      'A framework to build user interfaces with help of imperative code.',
      'A library used for building mobile applications only.',
    ],
  },
  {
    id: 'q2',
    text: 'What purpose do React hooks serve?',
    answers: [
      'Enabling the use of state and other React features in functional components.',
      'Creating responsive layouts in React applications.',
      'Handling errors within the application.',
      'Part of the Redux library for managing global state.',
    ],
  },
  {
    id: 'q3',
    text: 'Can you identify what JSX is?',
    answers: [
      'A JavaScript extension that adds HTML-like syntax to JavaScript.',
      'A JavaScript library for building dynamic user interfaces.',
      'A specific HTML version that was explicitly created for React.',
      'A tool for making HTTP requests in a React application.',
    ],
  },
  {
    id: 'q4',
    text: 'What is the most common way to create a component in React?',
    answers: [
      'By defining a JavaScript function that returns a renderable value.',
      'By defining a custom HTML tag in JavaScript.',
      'By creating a file with a .jsx extension.',
      'By using the "new" keyword followed by the component name.',
    ],
  },
  {
    id: 'q5',
    text: 'What does the term "React state" imply?',
    answers: [
      'An object in a component that holds values and may cause the component to render on change.',
      'The lifecycle phase a React component is in.',
      'The overall status of a React application, including all props and components.',
      'A library for managing global state in React applications.',
    ],
  },
  {
    id: 'q6',
    text: 'How do you typically render list content in React apps?',
    answers: [
      'By using the map() method to iterate over an array of data and returning JSX.',
      'By using the for() loop to iterate over an array of data and returning JSX.',
      'By using the forEach() method to iterate over an array of data and returning JSX.',
      'By using the loop() method to iterate over an array of data and returning JSX.',
    ],
  },
  {
    id: 'q7',
    text: 'Which approach can NOT be used to render content conditionally?',
    answers: [
      'Using a the #if template syntax.',
      'Using a ternary operator.',
      'Using the && operator.',
      'Using an if-else statement.',
    ],
  },
  {
    id: 'q8',
    text: 'What does the virtual DOM in React do?',
    answers: [
      'It improves performance by minimizing direct manipulation of the real DOM.',
      'It creates a virtual copy of the browser window.',
      'It directly replaces the real DOM with faster updates.',
      'It only works for server-side rendering.',
    ],
  },
  {
    id: 'q9',
    text: 'What is the purpose of props in React?',
    answers: [
      'To pass data from parent components to child components.',
      'To manage local state within a component.',
      'To store lifecycle methods.',
      'To define CSS styles in React.',
    ],
  },
  {
    id: 'q10',
    text: 'Which hook is used for performing side effects in a functional component?',
    answers: [
      'useEffect',
      'useState',
      'useReducer',
      'useMemo',
    ],
  },
  {
    id: 'q11',
    text: 'What does the key prop help React identify?',
    answers: [
      'Which items have changed, are added, or are removed in a list.',
      'The type of component being rendered.',
      'The order of function calls in React.',
      'The props passed to a component.',
    ],
  },
  {
    id: 'q12',
    text: 'What is the difference between controlled and uncontrolled components in React?',
    answers: [
      'Controlled components are managed by React state, while uncontrolled components rely on the DOM.',
      'Controlled components are faster than uncontrolled ones.',
      'Controlled components are for forms, while uncontrolled are for lists.',
      'Controlled components are only available in class components.',
    ],
  },
  {
    id: 'q13',
    text: 'Which hook is primarily used for state management in functional components?',
    answers: [
      'useState',
      'useEffect',
      'useRef',
      'useCallback',
    ],
  },
  {
    id: 'q14',
    text: 'What is React Router used for?',
    answers: [
      'To enable navigation between different components/views in a React application.',
      'To manage global application state.',
      'To handle API requests inside a React application.',
      'To style React components dynamically.',
    ],
  },
  {
    id: 'q15',
    text: 'What does useRef mainly allow you to do?',
    answers: [
      'Persist values across renders without causing re-renders.',
      'Create a state variable that re-renders on update.',
      'Store component props globally.',
      'Schedule effects in React.',
    ],
  },
  {
    id: 'q16',
    text: 'Which lifecycle method in class components is similar to useEffect in functional components?',
    answers: [
      'componentDidMount',
      'render',
      'shouldComponentUpdate',
      'constructor',
    ],
  },
  {
    id: 'q17',
    text: 'What does React.StrictMode do?',
    answers: [
      'It activates additional checks and warnings for its descendants.',
      'It prevents runtime errors from being thrown.',
      'It optimizes React apps for production.',
      'It forces components to re-render twice always.',
    ],
  },
  {
    id: 'q18',
    text: 'What is code splitting in React?',
    answers: [
      'Breaking down the bundle into smaller chunks to improve load performance.',
      'Splitting JSX code into separate files.',
      'Separating React state into multiple reducers.',
      'Using different programming languages in one React project.',
    ],
  },
  {
    id: 'q19',
    text: 'Which hook is used for memoization to avoid unnecessary recalculations?',
    answers: [
      'useMemo',
      'useEffect',
      'useReducer',
      'useLayoutEffect',
    ],
  },
  {
    id: 'q20',
    text: 'What does React.Fragment allow you to do?',
    answers: [
      'Group multiple elements without adding extra nodes to the DOM.',
      'Render fragments of HTML code only.',
      'Insert comments in JSX.',
      'Automatically split React components into smaller ones.',
    ],
  },
    {
    id: 'q21',
    text: 'Which hook is used to optimize callback functions in React?',
    answers: [
      'useCallback',
      'useMemo',
      'useReducer',
      'useEffect',
    ],
  },
  {
    id: 'q22',
    text: 'What is the main benefit of using React’s declarative style?',
    answers: [
      'It makes the UI predictable and easier to debug.',
      'It allows direct manipulation of the DOM.',
      'It avoids using JSX in applications.',
      'It enforces class components only.',
    ],
  },
  {
    id: 'q23',
    text: 'What does ReactDOM.render() do?',
    answers: [
      'Renders a React element into the DOM.',
      'Compiles React code into plain JavaScript.',
      'Starts the React development server.',
      'Creates a new React component.',
    ],
  },
  {
    id: 'q24',
    text: 'What is the default behavior of useEffect when no dependency array is provided?',
    answers: [
      'It runs after every render.',
      'It runs only once after the initial render.',
      'It never runs.',
      'It runs only when state changes.',
    ],
  },
  {
    id: 'q25',
    text: 'What does lifting state up mean in React?',
    answers: [
      'Moving state to a common ancestor component to share data between children.',
      'Copying state values to localStorage.',
      'Moving state variables into Redux.',
      'Using useState at the top of the file.',
    ],
  },
  {
    id: 'q26',
    text: 'What does React use internally to improve performance when rendering lists?',
    answers: [
      'The key prop',
      'The id attribute',
      'The data-index attribute',
      'Randomized IDs',
    ],
  },
  {
    id: 'q27',
    text: 'Which hook would you use to manage more complex state transitions?',
    answers: [
      'useReducer',
      'useState',
      'useMemo',
      'useLayoutEffect',
    ],
  },
  {
    id: 'q28',
    text: 'Which method is used to create a React context?',
    answers: [
      'React.createContext',
      'React.useContext',
      'React.initContext',
      'React.ContextProvider',
    ],
  },
  {
    id: 'q29',
    text: 'What does the children prop in React represent?',
    answers: [
      'The content passed between the opening and closing tags of a component.',
      'The child components of a parent class.',
      'The nested state of a component.',
      'The next lifecycle stage of a component.',
    ],
  },
  {
    id: 'q30',
    text: 'Which hook allows you to consume values from a React context?',
    answers: [
      'useContext',
      'useReducer',
      'useMemo',
      'useEffect',
    ],
  },
  {
    id: 'q31',
    text: 'What is the difference between React’s development mode and production mode?',
    answers: [
      'Development mode includes extra warnings and checks; production mode is optimized and smaller.',
      'Production mode uses TypeScript by default, while development does not.',
      'Development mode runs faster than production.',
      'Production mode disables all JSX features.',
    ],
  },
  {
    id: 'q32',
    text: 'What is the default port for a React development server created with Create React App?',
    answers: [
      '3000',
      '8080',
      '5000',
      '4200',
    ],
  },
  {
    id: 'q33',
    text: 'What is the difference between React’s useLayoutEffect and useEffect?',
    answers: [
      'useLayoutEffect runs synchronously after DOM mutations, useEffect runs asynchronously.',
      'useLayoutEffect only runs once, useEffect runs every render.',
      'useEffect runs before painting, useLayoutEffect after painting.',
      'They are exactly the same but have different names.',
    ],
  },
  {
    id: 'q34',
    text: 'How do you prevent a component from re-rendering unnecessarily?',
    answers: [
      'By wrapping it with React.memo.',
      'By disabling useEffect.',
      'By storing props in local variables.',
      'By using only class components.',
    ],
  },
  {
    id: 'q35',
    text: 'What is the main purpose of the React key prop?',
    answers: [
      'To uniquely identify elements in a list for efficient updates.',
      'To pass authentication keys into components.',
      'To enable prop drilling between components.',
      'To encrypt sensitive props.',
    ],
  },
  {
    id: 'q36',
    text: 'What does JSX get compiled to?',
    answers: [
      'React.createElement() calls.',
      'Plain HTML.',
      'Virtual DOM directly.',
      'Browser-native JavaScript classes.',
    ],
  },
  {
    id: 'q37',
    text: 'What is prop drilling?',
    answers: [
      'Passing data through multiple levels of components unnecessarily.',
      'Drilling down into the DOM tree with props.',
      'Using props inside state hooks.',
      'Debugging props with React DevTools.',
    ],
  },
  {
    id: 'q38',
    text: 'Which of the following is a valid way to style React components?',
    answers: [
      'All of the above.',
      'Using inline styles with the style attribute.',
      'Using CSS modules.',
      'Using styled-components or other CSS-in-JS libraries.',
    ],
  },
  {
    id: 'q39',
    text: 'What is the main difference between React and Angular?',
    answers: [
      'React is a library focused on UI, Angular is a full-fledged framework.',
      'React uses TypeScript by default, Angular does not.',
      'Angular uses virtual DOM, React does not.',
      'React enforces two-way data binding, Angular does not.',
    ],
  },
  {
    id: 'q40',
    text: 'Which React hook would you use to store a mutable value that does not cause a re-render when updated?',
    answers: [
      'useRef',
      'useState',
      'useMemo',
      'useReducer',
    ],
  },
    {
    id: 'q41',
    text: 'What is React.StrictMode used for?',
    answers: [
      'To highlight potential problems in an application during development.',
      'To enable strict TypeScript type checking.',
      'To enforce strict CSS rules in components.',
      'To block deprecated HTML tags.',
    ],
  },
  {
    id: 'q42',
    text: 'Which hook is useful for memoizing expensive calculations?',
    answers: [
      'useMemo',
      'useCallback',
      'useReducer',
      'useEffect',
    ],
  },
  {
    id: 'q43',
    text: 'How do you create a lazy-loaded component in React?',
    answers: [
      'By using React.lazy with Suspense.',
      'By wrapping it with React.memo.',
      'By adding async to the component function.',
      'By using the defer attribute in JSX.',
    ],
  },
  {
    id: 'q44',
    text: 'What is the purpose of the Suspense component in React?',
    answers: [
      'To show a fallback UI while waiting for lazy-loaded components or data.',
      'To delay rendering until props are available.',
      'To handle global error boundaries.',
      'To improve performance by skipping renders.',
    ],
  },
  {
    id: 'q45',
    text: 'Which React hook can be used to track the previous value of a state or prop?',
    answers: [
      'useRef',
      'useMemo',
      'useEffect',
      'useReducer',
    ],
  },
  {
    id: 'q46',
    text: 'What is the recommended way to update state based on the previous state in React?',
    answers: [
      'Passing a callback function to the state setter.',
      'Using a global variable.',
      'Directly modifying the state object.',
      'Calling setState twice in a row.',
    ],
  },
  {
    id: 'q47',
    text: 'What is the main difference between controlled and uncontrolled components in React?',
    answers: [
      'Controlled components are driven by React state, uncontrolled use refs to access values.',
      'Uncontrolled components cannot accept props, controlled components can.',
      'Controlled components always require Redux, uncontrolled do not.',
      'Uncontrolled components automatically manage state with hooks.',
    ],
  },
  {
    id: 'q48',
    text: 'Which lifecycle method is commonly replaced by useEffect in functional components?',
    answers: [
      'componentDidMount',
      'shouldComponentUpdate',
      'componentWillUnmount',
      'getDerivedStateFromProps',
    ],
  },
  {
    id: 'q49',
    text: 'How can you optimize performance when rendering large lists in React?',
    answers: [
      'By using windowing libraries like react-window or react-virtualized.',
      'By converting lists into strings.',
      'By storing all items in useRef.',
      'By disabling state updates.',
    ],
  },
  {
    id: 'q50',
    text: 'Which prop is required when rendering a list of elements in React?',
    answers: [
      'key',
      'id',
      'ref',
      'className',
    ],
  },
  {
    id: 'q51',
    text: 'What happens if you update state directly in React (e.g., state.count++)?',
    answers: [
      'The UI will not re-render properly.',
      'React will automatically fix it.',
      'It will trigger an error immediately.',
      'The state will reset to initial values.',
    ],
  },
  {
    id: 'q52',
    text: 'What is a fragment (<></>) used for in React?',
    answers: [
      'To group multiple children without adding extra nodes to the DOM.',
      'To comment JSX code.',
      'To create reusable components.',
      'To wrap props into objects.',
    ],
  },
  {
    id: 'q53',
    text: 'What is the default behavior of React events compared to native DOM events?',
    answers: [
      'React events are wrapped in a SyntheticEvent system for consistency.',
      'React events are faster than native events.',
      'React events always bubble to the window.',
      'React events bypass the virtual DOM.',
    ],
  },
  {
    id: 'q54',
    text: 'How do you prevent a default form submission in React?',
    answers: [
      'By calling event.preventDefault() inside the onSubmit handler.',
      'By returning false in the onSubmit function.',
      'By disabling the form element.',
      'By using stopPropagation().',
    ],
  },
  {
    id: 'q55',
    text: 'Which hook should you use to run cleanup logic when a component unmounts?',
    answers: [
      'useEffect with a cleanup function.',
      'useRef with null assignment.',
      'useReducer with reset.',
      'useMemo with dependencies.',
    ],
  },
  {
    id: 'q56',
    text: 'What is the correct way to pass a method as a prop in React?',
    answers: [
      'By passing a function reference like onClick={handleClick}.',
      'By calling the function directly inside props.',
      'By converting the function to a string.',
      'By attaching it to window object.',
    ],
  },
  {
    id: 'q57',
    text: 'What is code splitting in React?',
    answers: [
      'Breaking an app into smaller bundles that are loaded on demand.',
      'Splitting CSS and JS files.',
      'Using Redux for state management.',
      'Separating props and state in components.',
    ],
  },
  {
    id: 'q58',
    text: 'Which method allows you to handle errors in React components?',
    answers: [
      'Error boundaries with componentDidCatch or getDerivedStateFromError.',
      'Using try/catch inside JSX.',
      'React automatically prevents all runtime errors.',
      'By wrapping every component in a Promise.',
    ],
  },
  {
    id: 'q59',
    text: 'What is reconciliation in React?',
    answers: [
      'The process of updating the DOM by comparing the virtual DOM with the real DOM.',
      'The merging of two different React apps.',
      'A method to combine props and state.',
      'A tool to debug context values.',
    ],
  },
  {
    id: 'q60',
    text: 'Which hook lets you trigger a re-render without changing state?',
    answers: [
      'useReducer with a dummy update.',
      'useMemo',
      'useRef',
      'useEffect',
    ],
  },
    {
    id: 'q61',
    text: 'Which hook is best for accessing DOM elements directly in React?',
    answers: [
      'useRef',
      'useEffect',
      'useState',
      'useMemo',
    ],
  },
  {
    id: 'q62',
    text: 'What is the difference between props and state in React?',
    answers: [
      'Props are passed from parent, state is managed within the component.',
      'Props are mutable, state is immutable.',
      'Props can only store numbers, state can store anything.',
      'Props are global, state is always local.',
    ],
  },
  {
    id: 'q63',
    text: 'What is the purpose of the key prop in React lists?',
    answers: [
      'To help React identify which items changed, are added, or removed.',
      'To apply styles to elements.',
      'To store local state for each item.',
      'To prevent re-renders.',
    ],
  },
  {
    id: 'q64',
    text: 'What happens if two elements in a list have the same key?',
    answers: [
      'React may not re-render them correctly.',
      'React throws a compile-time error.',
      'React will merge them into one element.',
      'Nothing, keys don’t affect rendering.',
    ],
  },
  {
    id: 'q65',
    text: 'Which hook is used to optimize callback functions?',
    answers: [
      'useCallback',
      'useMemo',
      'useEffect',
      'useLayoutEffect',
    ],
  },
  {
    id: 'q66',
    text: 'What does ReactDOM.render() do in a React application?',
    answers: [
      'Renders a React element into the DOM.',
      'Creates a virtual DOM copy.',
      'Compiles JSX into JavaScript.',
      'Registers service workers.',
    ],
  },
  {
    id: 'q67',
    text: 'Which React feature allows state to be shared across deeply nested components?',
    answers: [
      'Context API',
      'Props drilling',
      'Redux middleware',
      'Fragments',
    ],
  },
  {
    id: 'q68',
    text: 'What is a common use case for useReducer instead of useState?',
    answers: [
      'When managing complex state logic with multiple sub-values.',
      'When accessing the DOM directly.',
      'When rendering lists conditionally.',
      'When memoizing expensive computations.',
    ],
  },
  {
    id: 'q69',
    text: 'What is hydration in React?',
    answers: [
      'Attaching event listeners to pre-rendered HTML from the server.',
      'Refreshing the browser cache for React files.',
      'Updating state variables with new values.',
      'Converting JSX into JavaScript.',
    ],
  },
  {
    id: 'q70',
    text: 'Which lifecycle method is equivalent to useEffect(() => {}, [])?',
    answers: [
      'componentDidMount',
      'shouldComponentUpdate',
      'componentWillReceiveProps',
      'componentDidUpdate',
    ],
  },
  {
    id: 'q71',
    text: 'What does React.memo do?',
    answers: [
      'It memoizes a component to prevent unnecessary re-renders.',
      'It caches API responses.',
      'It stores previous prop values.',
      'It replaces useMemo in functional components.',
    ],
  },
  {
    id: 'q72',
    text: 'How can you handle forms more efficiently in React?',
    answers: [
      'By using controlled components.',
      'By using inline JavaScript only.',
      'By disabling validation.',
      'By using global variables.',
    ],
  },
  {
    id: 'q73',
    text: 'What does JSX get compiled into?',
    answers: [
      'React.createElement() calls.',
      'Plain HTML strings.',
      'Virtual DOM directly.',
      'Native DOM nodes.',
    ],
  },
  {
    id: 'q74',
    text: 'Which hook allows you to subscribe to browser APIs or external data sources?',
    answers: [
      'useEffect',
      'useState',
      'useMemo',
      'useRef',
    ],
  },
  {
    id: 'q75',
    text: 'What is the difference between React.PureComponent and React.Component?',
    answers: [
      'PureComponent implements a shallow prop and state comparison.',
      'Component renders faster always.',
      'Component skips lifecycle methods.',
      'PureComponent is only for class methods.',
    ],
  },
  {
    id: 'q76',
    text: 'Which React feature helps avoid prop drilling?',
    answers: [
      'Context API',
      'Fragments',
      'Refs',
      'StrictMode',
    ],
  },
  {
    id: 'q77',
    text: 'What is the difference between useLayoutEffect and useEffect?',
    answers: [
      'useLayoutEffect runs synchronously after DOM mutations, useEffect runs asynchronously.',
      'useEffect runs before rendering, useLayoutEffect runs after.',
      'useLayoutEffect only works in class components.',
      'They are identical in behavior.',
    ],
  },
  {
    id: 'q78',
    text: 'Which package is commonly used with React for routing?',
    answers: [
      'react-router-dom',
      'redux-router',
      'next-router',
      'dom-navigator',
    ],
  },
  {
    id: 'q79',
    text: 'What happens when you call setState or the state updater in React?',
    answers: [
      'React schedules a re-render of the component.',
      'The browser reloads automatically.',
      'State updates immediately without batching.',
      'All components re-render regardless of relation.',
    ],
  },
  {
    id: 'q80',
    text: 'Which hook is useful for persisting values between renders without triggering a re-render?',
    answers: [
      'useRef',
      'useState',
      'useMemo',
      'useCallback',
    ],
  },
    {
    id: 'q81',
    text: 'What is the main advantage of using functional components over class components?',
    answers: [
      'Simpler syntax and hooks support.',
      'Faster rendering by default.',
      'They do not require JSX.',
      'They automatically manage global state.',
    ],
  },
  {
    id: 'q82',
    text: 'Which hook should you use for fetching data when a component mounts?',
    answers: [
      'useEffect',
      'useState',
      'useReducer',
      'useRef',
    ],
  },
  {
    id: 'q83',
    text: 'Which tool is commonly used for state management in larger React applications?',
    answers: [
      'Redux',
      'React Router',
      'Axios',
      'React.lazy',
    ],
  },
  {
    id: 'q84',
    text: 'What is the purpose of React.lazy()?',
    answers: [
      'To dynamically import components for code splitting.',
      'To lazily initialize state variables.',
      'To delay rendering of elements.',
      'To optimize context providers.',
    ],
  },
  {
    id: 'q85',
    text: 'What is a common use case for useMemo?',
    answers: [
      'To memoize expensive calculations and avoid unnecessary re-computation.',
      'To persist state between renders.',
      'To handle asynchronous API calls.',
      'To create global CSS styles.',
    ],
  },
  {
    id: 'q86',
    text: 'Which method in class components is called right before unmounting?',
    answers: [
      'componentWillUnmount',
      'componentDidMount',
      'componentDidUpdate',
      'getDerivedStateFromProps',
    ],
  },
  {
    id: 'q87',
    text: 'How can you prevent unnecessary re-renders of a functional component?',
    answers: [
      'Wrap it with React.memo.',
      'Use useState to store props.',
      'Call setState manually after every render.',
      'Use a class component instead.',
    ],
  },
  {
    id: 'q88',
    text: 'Which hook is used to manage complex side-effects that depend on multiple values?',
    answers: [
      'useEffect',
      'useMemo',
      'useReducer',
      'useRef',
    ],
  },
  {
    id: 'q89',
    text: 'Which of the following is true about React keys?',
    answers: [
      'They must be unique among siblings.',
      'They can be duplicated within a list.',
      'They are used to store component state.',
      'They automatically prevent all re-renders.',
    ],
  },
  {
    id: 'q90',
    text: 'Which hook helps you avoid recreating functions on every render?',
    answers: [
      'useCallback',
      'useState',
      'useMemo',
      'useEffect',
    ],
  },
  {
    id: 'q91',
    text: 'What is the primary role of a React error boundary?',
    answers: [
      'To catch JavaScript errors in child components and display a fallback UI.',
      'To prevent errors in JSX compilation.',
      'To handle API response errors automatically.',
      'To validate props types during development.',
    ],
  },
  {
    id: 'q92',
    text: 'What does React’s Profiler API allow you to do?',
    answers: [
      'Measure the performance of React components.',
      'Debug hooks in production.',
      'Automatically optimize rendering.',
      'Track Redux actions.',
    ],
  },
  {
    id: 'q93',
    text: 'What is the difference between server-side rendering (SSR) and client-side rendering (CSR) in React?',
    answers: [
      'SSR renders HTML on the server, CSR renders HTML in the browser.',
      'CSR is faster than SSR in all cases.',
      'SSR only works with class components.',
      'CSR does not use the virtual DOM.',
    ],
  },
  {
    id: 'q94',
    text: 'Which method can you use to optimize React’s rendering performance?',
    answers: [
      'Memoization and key props for lists.',
      'Direct DOM manipulation.',
      'By avoiding JSX.',
      'Always using class components.',
    ],
  },
  {
    id: 'q95',
    text: 'What is the main difference between useEffect and useLayoutEffect?',
    answers: [
      'useLayoutEffect runs synchronously after DOM updates; useEffect runs asynchronously.',
      'useEffect runs before mounting; useLayoutEffect after mounting.',
      'useLayoutEffect only works in class components.',
      'There is no difference.',
    ],
  },
  {
    id: 'q96',
    text: 'Which React feature allows multiple components to share state without prop drilling?',
    answers: [
      'Context API',
      'Fragments',
      'Refs',
      'StrictMode',
    ],
  },
  {
    id: 'q97',
    text: 'Which of the following is true about React fragments?',
    answers: [
      'They let you group multiple elements without adding extra nodes to the DOM.',
      'They allow conditional rendering.',
      'They provide lifecycle hooks.',
      'They automatically memoize children.',
    ],
  },
  {
    id: 'q98',
    text: 'Which of these is a reason to use TypeScript with React?',
    answers: [
      'To get static type checking and catch errors at compile time.',
      'To replace JSX syntax.',
      'To speed up rendering.',
      'To manage global state.',
    ],
  },
  {
    id: 'q99',
    text: 'Which hook would you use to run code only once when a component mounts?',
    answers: [
      'useEffect with an empty dependency array.',
      'useState',
      'useReducer',
      'useMemo',
    ],
  },
  {
    id: 'q100',
    text: 'What is the main benefit of using React Router in an application?',
    answers: [
      'It enables navigation between components without reloading the page.',
      'It automatically manages global state.',
      'It handles CSS styling.',
      'It replaces JSX syntax with HTML.',
    ],
  },
];

