function C5(string){
    let wordcount = 0;
    for(let char of string){
        if(char === ' '){
            wordcount++;
        }
    }
    wordcount++;
    return wordcount;
}   

console.log(C5("hello world"));
console.log(C5("this is the best day"));
console.log(C5("a bb ccc ddddddd e"));