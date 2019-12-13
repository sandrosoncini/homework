const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let list = [] // list of tasks

//calling the function the user wants the menu access.
const todoList = answer => {
    if (answer === 'v') {
        view();
    } else if (answer === 'n') {
        add();
    } else if (answer[0] === 'c' && answer[1] === typeof 'number') {
        number = answer[1];
        complete(number);
        menu();
    } else if (answer[0] === 'd' && answer[1] === typeof 'number') {
        number = answer[1];
        del(number);
        menu();
    } else if (answer === 'q') {
        quit();
    } else {
        console.log(`ENTER A VALID VALUE!`)
        menu();
    }
};

// 
let count = 0; // count if is the Welcome menu
//menu questions
let menu = () => {
    if (count === 0) {
        count++
        rl.question(`\nWelcome to Todo CLI!\n--------------------\n
        (v) View • (n) New • (cX) Complete • (dX) Delete • (q) Quit\n>`, todoList)
    } else {
        rl.question(`\n(v) View • (n) New • (cX) Complete • (dX) Delete • (q) Quit\n>`, todoList)
    };
}

menu()

//view list
function view() {
    if (list.length === 0) {
        console.log(`\nList is empty...`)
    } else {
        list.map((item, index) => {
            if (item.done) {
                console.log(`${index} [✓] ${item.task}`)
            } else {
                console.log(`${index} [ ] ${item.task}`)
            }
        })
    };
    menu();
};

// add to the list
function add() {
    rl.question(`\nWhat?\n>`, (answer) => {
        list.push({
            task: answer,
            done: false
        })
        menu();
    });
};

//complete task of the list
function complete(number) {
    if (number > list.length) {
        console.log(`\nInvalid Number\n`);
        view()
    } else {
        list[number].done = true
        console.log(`\nCompleted ${list[number].task}\n`)
        menu();
    }
};

// delete task of the list
function del(number) {
    if (number > list.length) {
        console.log(`\nInvalid Number\n`);
        menu()
    } else {
        let task = list[number].task
        list.splice(number, 1);
        console.log(`\nDeleted ${task}\n`);
        view();
    }
};

//quit the list
function quit() {
    rl.close();
    console.log(`\nThanks. See you soon!\n`)
};