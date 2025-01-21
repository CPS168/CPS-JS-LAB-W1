function C3(array){
    if(array.length === 0){
        return 0.0;
    }
    let average = 0.0;
    for(let element of array){
        average += element;
    }
    return average / array.length;
}

console.log(C3([85, 90, 78, 92]));
console.log(C3([10, 20 ,30]));
console.log(C3([]));