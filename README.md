###Udemy Class

[]()

[Babel Repl](https://babeljs.io/repl/)

####Components / Views

Snippets of code that produce html. 

Its a collection of JavaScript functions that produce HTML

`/ReduxSimpleStarter/src/index.js`

* `const` is ES6 constant
* returning html like this is called `JSX`
  * Dialect of JavaScript 
  * Must be transpiled into Vanilla JavaScript

```
const App = function() {
	return <div>Hi!</div>
}

```

In ES6, Javascript modules is a concept that all JS files are siloed into their own scope, and you must import then into other files.

You always make one component per file.


Downwards Data Flow - The most parent component should fetch data that other child components use



* Class vs Functional components
* Concept of state
* Import and Export Statements


##Redux

###Reducer

Returns a piece of the application's state


###Containers (smart components)

A container is a component that has direct access to Redux