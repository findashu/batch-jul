// console.log(global);


// __dirname

console.log(__dirname);

// __filename

console.log(__filename);


// process object

// console.log(process)

console.log(process.title)

// console.log(process.env);

process.env.SECRET_KEY = "Super Secret";

console.log(process.env.SECRET_KEY);

console.log(process.cwd());


console.log(process.memoryUsage());



console.log(module);

console.log(module.filename);

console.log(typeof module.exports)