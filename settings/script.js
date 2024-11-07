const X1 = document.getElementById("x1").querySelector('input');
const X2 = document.getElementById("x2").querySelector('input');
const X3 = document.getElementById("x3").querySelector('input');
const Y1 = document.getElementById("y1").querySelector('input');
const Y2 = document.getElementById("y2").querySelector('input');
const Y3 = document.getElementById("y3").querySelector('input');
const Z1 = document.getElementById("z1").querySelector('input');
const Z2 = document.getElementById("z2").querySelector('input');
const Z3 = document.getElementById("z3").querySelector('input');

var X = parseFloat(X1.value) + parseFloat(X2.value) + parseFloat(X3.value);
var Y = parseFloat(Y1.value) + parseFloat(Y2.value) + parseFloat(Y3.value);
var Z = parseFloat(Z1.value) + parseFloat(Z2.value) + parseFloat(Z3.value);

function openSoulutionPage() {
    window.location.href = './functions/solution.html'; 
}
function openMainPage() {
    window.location.href = './'; 
}
