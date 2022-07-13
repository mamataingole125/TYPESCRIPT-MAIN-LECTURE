### create folder
## run npm init -y
## npm installtypescript -g  ==>this will install globly
##  so no need to install again and again

## create index.ts==>so it will automatically create index.js
## create tsconfig.json==>write some content in it

## create src folder
## move index.ts into src

## write tsc in terminal

## so build folder will created in this index.js file will be there 

## now delete outside index.js 


## to see changes in index.js write tsc in terminal
## to see console values in terminal write tsc then enter then write node build/index.js

## npx create-react-app typescript-react --template typescript




#### Installation steps

- npm init -y
- npm install typescript -g

#### Compilation V/S Transpilation

##### Compilation

- Write code -> Compiler -> Some other language
- **From High level language to Low level language**
- Low level language is usually machine language/code eg: binary, or bytecode
- Generated code is not human-readable (generally)
- C, C++, Go, `.exe`

- JavaScript is compiled language.
- It is both compiled and interpreted depending on the environment (Google Chrome V8, Just-in-time compilation), NodeJS, Deno, BraveBrowser ->Chromium-> V8

##### Transpilation

- From High level language to High level language
- Generated code is human-readable
- Generated code may need to go through another/one more compilation step
- <h1>Hello World</h1> - JSX
- React.createElement("h1", null, "hello world")
- from ES6 "const x = 1" to ES3 "var x = 1"

#### Statically Typed Language V/S Dynamically Typed Language

#### Dynamically typed language

- The compiler doesn't know about the "types" at compile time.
- Generally slower
- JS, Python, Ruby, etc
- const x = 1; let x;
- const y = "Hello";
- Generally less safe

#### Statically typed Language

- The compiler knows the "types" at compile time.
- Generally faster than Dynamically typed language.
- C, C++, Go, Rust, Java, Python, TypeScript,etc
- int x; string y;

#### TypeScript

- Statically typed language
- Just JavaScript
- Superset of JS
- Transpiles to JavaScript
- let x:string;
- let y:number;