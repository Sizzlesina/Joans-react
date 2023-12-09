/*
* what is React hooks?
@ - Special built-in function that allows us to "hook" into React internals:
Creating and accessing state from Fiber tree
Registering side effects in Fiber tree
Manual DOM selections
Many more...

@ - Always start with "use" (useState,useEffect,etc.)

@ - Enable easy resusing of non-visual logic: we can compose multiple hooks into our own custom hooks

@ - Given function components the ability to own state and run side effects at different lifecycle points (before v16.8 only available in class components)

* Overview of all built-in hooks:
! Most used:
@ 1 - useState (have learned)
@ 2 - useEffect (have learned)
@ 3 - useReducer (have learned)
@ 4 - useContext (have learned)
! Less used:
++ 1 - useRef (have learned)
++ 2 - useCallback (have learned)
++ 3 - useMemo (have learned)
++ 4 - useTransition (will learn)
++ 5 - useDeferredValue (will learn)
? 6 - useLayoutEffect (will not learn)
? 7 - useDebugValue (will not learn)
? 8 - useImprerativeHandle (will not learn)
? 9 - useId (will not learn)
! Only for libraries:
? 1 - useSyncExternalStore (will not learn)
? 2 - useInsertionEffect (will not learn)

* Rules of hooks:
@ 1 - Only call hooks at the top level:
- Do not call hooks inside conditionals,loops,nested functions or after an early return.
- This is necessary to ensure that hooks are always called in the same order (hooks rely on this)

@ 2 - Only call hooks from React functions:
- Only call hooks inside a function component or a custom hook
 
! HINT: These rules are automatically enforced by React's ESLint rules

* Summary of defining and updating state:
@ 1 - Creating state:
Simple => const [count,setCount] = useState(23);

Based on function (lazy evaluation) => const [count,setCount] = useState(
  () => localStorage.getItem('count') 
);
! Function must be pure and accept no arguments. Called only on initial render

@ 2 - Updating state :
simple => setCount(1000);

Based on current state => setCount( (c) => c + 1);
! Function must be pure and return next state.

! HINT: Make sure to NOT mutate objects or arrays,but to replace them



* What are Refs:
@ REF with useRef:
? Example: const myRef = useRef(23);

@ - "Box" (object) with a mutable .current property that is persisted across renders ("normal" variables are always reset).
! We can write to and read from the ref using .current.
? Example: myRef.current = 1000;

@ - Two big use cases:
1 - Creating a variable that stays the same between renders (e.g. previous state, setTimeout id , etc.).
2 - Selecting and storing DOM elements.


@ - Refs are for data that is NOT rendered: usually only appear in event handlers or effects, not in JSX (otherwise use state)

@ - Do NOT read write or read .current in render logic (like state)


* State VS. Refs:
    Persists Across     Updating causes     immutable      Asynchronous
        renders             re-render                        updates
State     ✅                  ✅              ✅              ✅    
Refs      ✅                  ❌              ❌              ❌




* Reusing logic with custom hooks:

@ - in React we have two type of things which we can reuse => a piece of UI and a piece of Logic

- if we want to reuse a piece of UI we need a component

- if we need to reuse a piece of logic we need to answer one question: Does logic contain any hooks?
! YES => Custom hooks
! NO => Regular function


* Custom hooks:
👉 Allow us to reuse non-visual logic in multiple components
👉 One custom hook should have one purpose, to make it reusable and portable (even across multiple projects)
👉 Rules of hooks apply for custom hooks too
 
*/