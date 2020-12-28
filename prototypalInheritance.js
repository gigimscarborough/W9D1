Function.prototype.inherits = function(SuperClass){
    function Surrogate(){}
    Surrogate.prototype = SuperClass.prototype
    this.prototype = new Surrogate()
    this.prototype.constructor = this
}

Function.prototype.inherits1 = function (SuperClass) {
    this.prototype = Object.create(SuperClass.prototype)
    this.prototype.constructor = this
}

function MovingObject() { 


    function gliding(){
        console.log("Look I can glide")
    }
    
}

function Ship(name) { 
    this.name = name


    
}
Ship.inherits(MovingObject);

function Asteroid() { 
    constructor(name){
        this.name = name
    }
}
Asteroid.inherits(MovingObject);