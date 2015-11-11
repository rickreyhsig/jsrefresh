var plus = function(a,b){
    var sum = a + b;
    var fsum = "The sum of a and b is " + sum;
    //return fsum;
    return {thesum: sum, formattedsum: fsum}
}
console.log(plus(5,3))
console.log(plus(5,3).thesum)
console.log(plus(5,3).formattedsum)