var mult = function (a,b) {
    var result = a*b; 
    var fresult = "The product of " + a + " and " + b + " is "+ result;
    return console.log(fresult);
}(5,6); //Immediately calling a function

var mult = function (a,b) {
    var result = a*b; 
    var fresult = "The product of " + a + " and " + b + " is "+ result;
    return console.log(fresult);
};

mult(5,7);

console.log(mult);