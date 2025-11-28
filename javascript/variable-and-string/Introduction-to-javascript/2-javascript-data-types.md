# JavaScript Data Types

## 📋 Table of Contents
- [What is a Data Type?](#what-is-a-data-type)
- [Primitive Data Types](#primitive-data-types)
  - [Number](#1-number)
  - [String](#2-string)
  - [Boolean](#3-boolean)
  - [Undefined](#4-undefined)
  - [Null](#5-null)
  - [Symbol](#6-symbol)
  - [BigInt](#7-bigint)
- [Reference Data Type](#reference-data-type)
  - [Object](#object)
- [Summary](#summary)

---

## What is a Data Type?

In JavaScript, a **data type** refers to the kind of value a variable holds. 

A **variable** is a named container that stores a value of a specific data type, allowing you to reference and manipulate it throughout your code. Data types help the program understand the kind of data it's working with, whether it's a number, text, or something else.

JavaScript has several basic data types that you'll use in your programs. We'll explore each data type in greater detail in future lessons. For now, here is a comprehensive introduction to the different data types in JavaScript.

---

## Primitive Data Types

Primitive data types are the most basic data types in JavaScript. They are immutable (cannot be changed) and are compared by their value.

### 1. Number

The `Number` type represents both **integers** and **floating-point** values.

**Examples:**
- **Integers**: `7`, `19`, `90`, `-42`
- **Floating-point numbers**: `3.14`, `5.2`, `-0.5`

> 💡 **Note:** A floating-point number is a number with a decimal point.

```javascript
let age = 25;           // Integer
let temperature = 36.5; // Floating-point
let score = -10;        // Negative number
```

---

### 2. String

A `String` is a sequence of characters (text) enclosed in quotes. Strings can be defined using single quotes (`'`), double quotes (`"`), or backticks (`` ` ``).

**Examples:**

```javascript
"Hello, world"
```

```javascript
'JavaScript'
```

```javascript
`Template literal with ${variable}`
```

> 💡 **Tip:** Use backticks for template literals when you need to include variables or expressions within strings.

```javascript
let greeting = "Hello, world!";
let language = 'JavaScript';
let name = "Alice";
let message = `Welcome, ${name}!`; // Template literal
```

---

### 3. Boolean

A `Boolean` represents one of two possible values: **`true`** or **`false`**.

Booleans are commonly used for:
- Checking conditions (e.g., if a page is loading)
- Verifying user states (e.g., if a user is logged in)
- Controlling program flow

**Examples:**

```javascript
let isLoggedIn = true;
let isLoading = false;
let hasAccess = true;
```

---

### 4. Undefined

`undefined` means a variable has been declared but **hasn't been assigned a value yet**.

**Example:**

```javascript
let myVariable;
console.log(myVariable); // Output: undefined
```

> ⚠️ **Note:** This is different from `null`, which is intentionally set by the developer.

---

### 5. Null

`null` means the variable has been **intentionally set to "nothing"** and does not hold any value. It represents the deliberate absence of a value.

**Example:**

```javascript
let emptyValue = null;
console.log(emptyValue); // Output: null
```

> 📝 **Key Difference:** 
> - `undefined` = Not yet assigned
> - `null` = Intentionally empty

---

### 6. Symbol

A `Symbol` is a special type of value in JavaScript that is **always unique** and **cannot be changed** (immutable). 

Symbols are often used to:
- Create unique identifiers for object properties
- Avoid property name collisions
- Define private object properties

**Example:**

```javascript
const uniqueId = Symbol('mySymbol');
const anotherId = Symbol('mySymbol');

console.log(uniqueId === anotherId); // Output: false (each Symbol is unique)
```

> 💡 **Note:** Even with the same description, each Symbol is guaranteed to be unique.

---

### 7. BigInt

`BigInt` is used for **very large numbers** that exceed the safe limit of the `Number` type (which is 2⁵³ - 1).

To create a `BigInt`, add the letter **`n`** at the end of the number.

**Example:**

```javascript
const largeNumber = 1234567890123456789012345678901234567890n;
const anotherBigInt = 9007199254740991n;

console.log(largeNumber); // Output: 1234567890123456789012345678901234567890n
```

> ⚠️ **Important:** `Symbol` and `BigInt` are less commonly used than other types, but they are still important to know about for specific use cases.

---

## Reference Data Type

Unlike primitive types, reference types store references to memory locations rather than the actual values.

### Object

An `Object` is a more complex data type that can hold **collections of key-value pairs**.

**Structure:**
- **Key** (also called a property name): A label for the data
- **Value**: The actual data you want to store

**Example:**

```javascript
const person = {
  name: "John",
  age: 30,
  isStudent: false
};
```

In this object:
- **Keys (properties)**: `name`, `age`, `isStudent`
- **Values**: `"John"`, `30`, `false`

Each **key-value pair** is called a **property**. So we can say that this `person` object has **three properties**.

**Another Example:**

```javascript
const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
  isAvailable: true
};
```

> 📚 **Note:** This is just a basic introduction to objects. In future lessons, we'll explore more advanced concepts like methods, object destructuring, and prototypes.

---

## Summary

Understanding these data types is essential for working with JavaScript effectively. Each type has its own characteristics and behaviors that determine how data is stored, accessed, and manipulated in your programs.

| Data Type | Description | Example |
|-----------|-------------|---------|
| **Number** | Integers and floating-point numbers | `42`, `3.14` |
| **String** | Text enclosed in quotes | `"Hello"`, `'World'` |
| **Boolean** | True or false values | `true`, `false` |
| **Undefined** | Variable declared but not assigned | `undefined` |
| **Null** | Intentionally empty value | `null` |
| **Symbol** | Unique, immutable identifier | `Symbol('id')` |
| **BigInt** | Very large integers | `123n` |
| **Object** | Collections of key-value pairs | `{name: "John", age: 30}` |

---

> 🎯 **Next Steps:** In the following lessons, we'll dive deeper into each data type, learning how to use them effectively in real-world JavaScript applications!
