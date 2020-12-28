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
Function.prototype.myBind = function(context){
    let that = this;
    let bindArgs = Array.from(arguments).slice(1);
    return function() {
        let callArgs = Array.from(arguments);
        return that.apply(context, bindArgs.concat(callArgs));
    }
}

Function.prototype.mybind = function(context, ...bindArgs){
    let that = this;

    return function(...callArgs){

        return that.apply(context, bindArgs.concat(callArgs));
    }
}

// class Cat {
//     constructor(name) {
//         this.name = name;
//     }

//     says(sound, person) {
//         debugger
//         console.log(`${this.name} says ${sound} to ${person}!`);
//         return true;
//     }
// }

// class Dog {
//     constructor(name) {
//         this.name = name;
//     }
// }
// const markov = new Cat("Markov");
// const pavlov = new Dog("Pavlov");

// // markov.says.myBind(pavlov, "meow", "Kush")
// const distnctFunc = markov.says;


function curriedSum(numArgs) {
    let numbers = [];
    let func = this;

   return function _curriedSum(num){
        numbers.push(num);

        if(numbers.length === numArgs){
            return numbers.reduce(function(acc,ele){
                    return acc + ele
                })
        } else {
            return _curriedSum;
        };
    };
};

Function.prototype.curry = function(numArgs){
    let nums = [];
    let func = this;
    return function _myCurry(ele){
        nums.push(ele)
        if(nums.length < numArgs){
            return _myCurry;
        } else {
            return func(...nums);
        }
    };
};




