function add(a, b) {
	var sum = a + b;
	return sum;
}

var sum = add(5, 2);
console.log('sum = ' + sum);
var x = 2;
var y = 5;
console.log('%d %d %d', x, y, sum);

var aDiv = document.getElementById("content");
aDiv.innerHTML = "2 + 5 = " + "<b>" + sum + "</b>";
//$('#content').val("78");


