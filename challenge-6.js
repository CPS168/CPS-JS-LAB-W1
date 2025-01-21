function C6(votes){

    let output = "";
    let candidates = ['A', 'B', 'C'];
    let counting = [0, 0, 0]; // A/B/C

    for(let vote of votes){
        if(vote === 'A'){
            counting[0]++;
        }
        else if(vote === 'B'){
            counting[1]++;
        }
        else if(vote === 'C'){
            counting[2]++;
        }
    }

    let winnercount = Math.max(...counting);
    let winner = [];

    for (let i = 0; i < counting.length; i++) {
        if (counting[i] === winnercount) {
            winner.push(candidates[i]);
        }
    }
    if(votes.length === 0){
        output = "There is no vote yet";
        return output;
    } 

    else if(winner.length === 1){
        output = `${winner[0]} is the winner`;
        return output;
    }
    else if(winner.length === 2){
        output = `${winner[0]} and ${winner[1]} are both winners`;
        return output;
    }
    return output;
}

console.log(C6(['A', 'B', 'A', 'C', 'A']));
console.log(C6(['A', 'B', 'B', 'C', 'A']));
console.log(C6([]));