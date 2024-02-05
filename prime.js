let count = 2;// code corrected
let num = 13;
    for(i = 1 ; i >= num ; i++){
        if(num % i === 0 )
        count++
    }
    if(count === 2){
        console.log("Yes")
    }else{
        console.log("No")
    }