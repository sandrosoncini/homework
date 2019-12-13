const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const todoList = answer =>{
    if( answer === 'v'){
        view();
    }else if (answer === 'n'){
        add();
    }else if (answer[0] === 'c' ){
        number= answer[1];
        complete(number);
        menu();
    }else if (answer[0] === 'd'){
        number= answer[1];
        del(number);
        menu();
    }else if (answer === 'q'){
        quit();
    }else{
        console.log(`ENTER A VALID VALUE!`)
        menu();
    }
};
let count = 0;
let menu = () => {
    if(count === 0){
        count++
        rl.question(`\nWelcome to Todo CLI!\n--------------------\n
        (v) View • (n) New • (cX) Complete • (dX) Delete • (q) Quit\n>`,todoList)
        
        
    }else{
    rl.question(`\n(v) View • (n) New • (cX) Complete • (dX) Delete • (q) Quit\n>`,todoList)};
    }
 

let list = []
menu()
function view () {
    if(list.length === 0){
        console.log(`\nList is empty...`)
    }else{
    list.map((item,index)=>{
        if(item.done){
            console.log(`${index} [✓] ${item.task}`)
        }else{
            console.log(`${index} [ ] ${item.task}`)
        }})};
        menu();
};

function add(){
    rl.question(`\nWhat?\n>`, (answer)=>{
        list.push({task: answer, done: false})
        menu();
    });
};
function complete (number){
    list[number].done = true
    console.log(`\nCompleted ${list[number].task}\n`)
    menu();
};
function del (number) {
    let task=list[number].task
    list.splice(number, 1); 
    console.log(`\nDeleted ${task}\n`);
    menu();
};
function quit (){
    rl.close();
};


