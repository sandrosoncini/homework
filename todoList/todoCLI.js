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

let menu = () => {
    
    rl.question(
    
    `(v) View • (n) New • (cX) Complete • (dX) Delete • (q) Quit\n>`,
    todoList
)};
menu();

let list = []

function view () {
    list.map((item,index)=>{
        if(item.done){
            console.log(`${index} [✓] ${item.task}`)
        }else{
            console.log(`${index} [ ] ${item.task}`)
        }})
        menu();
};
function add(){
    rl.question(`What?\n>`, (answer)=>{
        list.push({task: answer, done: false})
        console.log(list)
        menu();
    });
};
function complete (number){
    list[number].done = true
    console.log(`Completed ${list[number].task}`)
    menu();
};
function del (number) {
    let task=list[number].task
    list.splice(number, 1); 
    console.log(`Deleted ${task}`);
    menu();
};
function quit (){
    rl.close();
};


