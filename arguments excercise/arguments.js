function sum(...nums){
    let total = 0;

    for(let i = 0; i < nums.length; i++){
        let num = nums[i]
        total += num
    }

    return total;
}

sum(1, 2, 3, 4) === 10;
sum(1, 2, 3, 4, 5) === 15;

function sum1(){
    let total = 0;
    for (let i = 0; i < arguments.length; i++){
        total += arguments[i]
    }
    return total;
}

Function.prototype.mybind = function(context, ...bindArgs){
    let that = this
    
    return function(...callArgs){
        that.apply(context, bindArgs.concat(callArgs))
    }
}

