// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    if (currency > 10000){
        return {"error": "You are rich, my friend! We don't have so much coins for exchange"}
    }
    else if (currency ==0 || currency<0){
        return {}
    }
    H = Math.trunc(currency / 50);
    if(currency<50){
        H = 0;
    }
    Q = 0; D= 0; N= 0;P=0;
    if (currency % 50 >= 25){
        Q =Math.trunc(currency % 50 /25);
    }
    if ( (currency % 50) % 25 >= 10){
        D = Math.trunc(((currency % 50) % 25) / 10);

    }
    if ( (currency % 50) % 25 % 10 >=5){
        N = Math.trunc(((currency % 50) % 25 % 10)/5);
    }
    if((currency % 50) % 25 % 10 % 5 >=1){
        P = Math.trunc(((currency % 50) % 25 % 10 %5) /1);
    }

    var arr = [];
    if(H!=0){
        arr.push({"H": H});
    }
    if(Q!=0){
        arr.push({"Q":Q});
    }
    if(D!=0){
        arr.push({"D":D});
    }
    if(N!=0){
        arr.push({"N":N});
    }
    if(P!=0){
        arr.push({"P":P});
    }

    res = Object.assign(arr[0],arr[1],arr[2],arr[3],arr[4]);
    
    return res
}
