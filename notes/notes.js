/** @format */

// this file will be kept just to note any TIP and HINT

/*
before the react version 18 they were render the root like this :

 React.render(<App />, document.getElementById("root")

JSX is combined the CSS , HTML and JavaScript codes all together


we can use the arrow functions in react like this:
const test = () => {}


in react we must keep a simple rule for all the functions:

1. the function must start with a capital letter
2. the function must return a make up


Components in react contains the Data, Logic and Appearance all together 


lets talk about the Declartive and Imperative type of codes:

Imperative :
  1. Manual DOM element selection and DOM traversing
  2. Step by step DOM mulations until we reach the desired UI
  HINT: it's about how to do things

Declarative;
  1. Describe what UI should look like using JSX based on current data 
  2. React is an abstraction away from DOM: we never touch the DOM
  3. Instead we think of the UI as a reflection of the current data
  HINT: its about what we want


we can style our html code in the react like this(But really maybe we dont do that at all):

function App() {
  const style = { color: "red", fontSize: "48px", textTransfor: "uppercase" };

  return (
    <div style={style}>
      <h1>Sina</h1>
    </div>
  );
}
}



in React we dont use 'class' for the naming the classes of a element instead we use "className"

when we want to pass in a jacvascript code like a number in the props you must use the javascript codes and it works with "{}" 





NOW we want to talk about props;
  1. Props are used to pass data from parent components to child components (down the component use)
  2. Essential tool to configure and customize components (like function parameters)
  3. with props, parent components control how child componets look and work
  4. Anything can be passed as props : single values, arrays, objects, functions, even other components
  5. Props are read-only, they are immutable! this is one of React's strict rules 
  6. If you need to mutate props,you actually need state BECASUE:
    -------------------------------------------------------------------
    1. mutating props whould effect parent. creating side effects (not pure)
    2. Components have to be pure functions in terms of props and state
    3. This allows React to optimize apps, avoid bugs, make app predictable
    -------------------------------------------------------------------

    in React data only can be passed from parent to child element
    


General rules of JSX:
  1. JSX works essentially like HTML, but we can enter "JavaScript mode" by using {} (for text or attributes)
  2. We can place javascript expressions inside {}. Examples: refrence variables, create arrays or objects, [].map(),ternary operator
  3. Statements are not allowed (if/else, for/switch)
  4. JSX produces a javascript expression:
    1. We can place other pieces of JSX inside {}
    2. We can write JSX anywhere inside a component (if/else, assign to variables, pass it into function)
  
  5. A piece of JSX can only have one root element if you need more,use <React.Fragment> {or the short <>}


Diffrence between JSX and HTML :
1. className instead of HTML's classes
2. htmlFor instead of HTML's for
3. Every tag needs to be closed, Examples: <img /> or <br />
4. All event handlers and other properties need to be camelCased Examples: onClick or onMouseOver
5. Exception: aria-* and data-* are written with dashes like in the HTML
6. CSS inline styles are written like this: {{style}} (to refrence a variable and then an object)
7. CSS property names are also camelCased
8. Comments need to be in {} (because they are JS)

*/

