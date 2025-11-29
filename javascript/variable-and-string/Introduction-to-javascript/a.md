# What Are Variables, and What Are Guidelines for Naming JavaScript Variables?
In JavaScript, variables act as containers for storing data that you can access and modify throughout your program.

You can think of variables as boxes that hold values. With variables, you can keep track of things like numbers or text and refer to these values whenever you need them in your program.

One way to declare a variable in JavaScript is to use the let keyword. You will learn more about the let keyword as well as other ways to declare variables in future lessons.

Here's an example of using let to declare a variable called age:

let age;
Right now, the age variable does not have a value assigned to it. If you try to use it, it will return undefined, which means it has no value.

Here is an example.

NOTE: `console.log()` is a function that outputs information to the console, which is a part of your web browser used for debugging code. You will learn more about console.log() in future lessons. Also, the // symbols are used to add comments in your code. Comments are notes for yourself or other programmers that are ignored when the code runs.

```javascript
let age;
console.log(age); // undefined
```

To assign a value to a variable you will need to use the assignment operator like this:

``` javascript
let age = 25;
```
Now when you use the `age` variable, it will return the value of `25`.

```javascript
let age = 25;
console.log(age); // 25
```

The assignment operator looks like an equals sign (`=`) but it doesn't check for equality. You'll learn about the correct operators for checking equality in future lessons.

The assignment operator is used to assign a value to a variable. This process of assigning a value to a variable is known as initialization.

One advantage of using the let keyword to declare variables is that you can reassign values to them. In programming, reassignment means giving a new value to a variable that already has one.

Here is an example of reassigning the value for the age variable.

```javascript
let age = 25;
console.log(age); // 25
age = 30;
console.log(age); // 30
```

Now the `age` variable holds the value of `30`. Notice that the `let` keyword wasn't needed again because the `age` variable was already declared, so there's no need to declare it a second time.

When using reassignment, you only need to reference the variable name. Reassignment is useful because it allows you to update and change the value stored in a variable as your program runs. A good example of this would be updating points in a game.

Naming variables may seem straightforward, but there are some rules and best practices to ensure your code is readable and functional.

Your variable names should describe what the data represents. For example, instead of using a name like `x`, a more descriptive name such as `age` or `points` makes your code easier to understand.

```javascript
// Bad variable names
let x = 10;
let y = "John";

// Good variable names
let age = 10;
```

Variables in JavaScript must begin with a letter, an underscore (`_`), or a dollar sign (`$`). They cannot start with a number.

```javascript
// Valid variable names
let age;
let _score;
let $total;

// Invalid variable names
let 1stPlace; // starts with a number
```

Variable names are case-sensitive, meaning the word age in all lowercase and the word Age with a capital A are considered different variables.

```javascript
let age = 25;
let Age = 30;
console.log(age); // 25
console.log(Age); // 30
```

This is why it's important to stick with a consistent naming convention like camelCase. camelCase is where the first word is all lowercase and each subsequent word starts with an uppercase letter.

Here is an example of using the camelCase naming convention for a variable:
```javascript
let thisIsCamelCase;
let anotherExampleVariable;
let freeCodeCampStudents;
```

There are certain keywords in JavaScript that you cannot use as variable names, such as `let`, `const`, `function`, or `return`, as they are reserved for the language itself.

You should also avoid using special characters like exclamation points (`!`) or at (`@`) symbols, in your variable names. It is best to keep variable names readable by using letters, numbers, underscores, or dollar signs.

By following these guidelines, your code will be cleaner and more manageable as it grows in complexity.

