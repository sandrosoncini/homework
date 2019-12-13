function drawLine (num){
    return "━".repeat(num)
};
//console.log(drawLine(10))
const drawTopBorder = num => "┏" + drawLine(num) + "┓"
//console.log(topBoarder(10));
//┏━┓	
const drawMiddleBorder = num => "┣" + drawLine(num) + "┫"
//console.log(drawMiddleBorder(10))
const drawBottomBorder = num => "┗" + drawLine(num) + "┛"
//console.log(drawBottomBorder(10))
const drawBarsAround = (str,num) =>  '┃'+ str + ' '.repeat(num-str.length) + '┃'
//console.log(drawBarsAround("I love food"))



const boxIt = (arr) => {
    let maxArr = [];
    for(let i of arr){
    maxArr.push(i.length);
    }
    maxLength = Math.max(...maxArr);

    let num = maxLength;
    let output = '';
    let str = '';

    
        for (let index=0; index<arr.length; index++){
            str = arr[index]; 
        if (index === (arr.length-1)){
            output += `${drawBarsAround(str,num)}\n${drawBottomBorder(num)}`;
          }  else if (index>0){
            output += `${drawBarsAround(str,num)}\n${drawMiddleBorder(num)}\n`;
          } else {
            output += `${drawTopBorder(num)}\n${drawBarsAround(str,num)}\n${drawMiddleBorder(num)}\n`;
          }
    };
   
    return output;


}
console.log(boxIt(["jon snow", "cersei lanister", "sandro"]))








