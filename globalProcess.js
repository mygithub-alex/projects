//const [,,firstName, lastName] = process.argv;

//console.log(`Your name is ${firstName} ${lastName}`);

// const grab = flag => {
//     let indexAfterFlag = process.argv.indexOf(flag) + 1;
//     return process.argv[indexAfterFlag]
// };

// const greeting = grab("--greeting");
// const user = grab("--user");

// console.log(`${greeting} ${user}`);

// Process stdout/stdin
//process.stdout.write("hello ")
//process.stdout.write('world \n\n\n')
const questions = [
    "What is your name?",
    "What would you rahter be doing?",
    "What is your preferred programming language"
];

const ask = (i=0) => {
    process.stdout.write(`\n\n\n ${questions[i]}`);
    process.stdout.write(' > ');
};

ask();

const answers = [];

process.stdin.on('data', data => {
    answers.push(data.toString().trim());

    if (answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit();
    }
});

process.on('exit', () => {
    const [name, activity, lang] = answers;
    console.log(`
    

    Thank you for your answers.

    Go ${activity} ${name} you can write ${lang} code later!

    
    `);
});

