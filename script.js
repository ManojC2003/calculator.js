function Add(){
    var a = parseInt(document.getElementById("n1").value);
    var b = parseInt(document.getElementById("n2").value);
    var c = a+b;
    document.getElementById("Add").innerHTML = c;
}
function Sub(){
    var d = document.getElementById("n3").value;
    var e = document.getElementById("n4").value;
    var f = d-e;
    document.getElementById("Sub").innerHTML = f;
}
function Mul(){
    var g = document.getElementById("n5").value;
    var h = document.getElementById("n6").value;
    var i = g*h;
    document.getElementById("Mul").innerHTML = i;
}
function Div(){
    var j = document.getElementById("n7").value;
    var k = document.getElementById("n8").value;
    var l = j/k;
    document.getElementById("Div").innerHTML = l;
}