function C4(string, char){
    let charcount = 0;
    for(let letter of string){
        if(letter == char){
            charcount++;
        }
    }
    return charcount;
}

console.log(C4("hello world", 'o'));
console.log(C4("aaa bbb a", 'a'));
console.log(C4("abc", 'd'));
