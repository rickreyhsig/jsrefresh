var calc = {
    status: 'ok',
    plus: function(a,b){
        return{
            console.log(a+b),
            console.log(this), 
            console.log(this.status), 
            console.log(arguments) 
        }
    }
};

calc.plus(3,7);