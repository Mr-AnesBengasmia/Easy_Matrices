const intM11 = document.getElementById("x1").value;
const intM12 = document.getElementById("x2").value;
const intM13 = document.getElementById("x3").value;
const intM21 = document.getElementById("y1").value;
const intM22 = document.getElementById("y2").value;
const intM23 = document.getElementById("y3").value;
const intM31 = document.getElementById("z1").value;
const intM32 = document.getElementById("z2").value;
const intM33 = document.getElementById("z3").value;
const intN1 = document.getElementById("n1").value;
const intN2 = document.getElementById("n2").value;
const intN3 = document.getElementById("n3").value;

const M11 = Number(intM11);
const M12 = Number(intM12);
const M13 = Number(intM13);
const M21 = Number(intM21);
const M22 = Number(intM22);
const M23 = Number(intM23);
const M31 = Number(intM31);
const M32 = Number(intM32);
const M33 = Number(intM33);
const N1 = Number(intN1);
const N2 = Number(intN2);
const N3 = Number(intN3);

if (isNaN(M11))
    alert("(11) Invalid number");
if (isNaN(M12))
    alert("(12) Invalid number");
if (isNaN(M13))
    alert("(13) Invalid number");
if (isNaN(M21))
    alert("(21) Invalid number");
if (isNaN(M22))
    alert("(22) Invalid number");
if (isNaN(M23))
    alert("(23) Invalid number");
if (isNaN(M31))
    alert("(31) Invalid number");
if (isNaN(M32))
    alert("(32) Invalid number");
if (isNaN(M33))
    alert("(33) Invalid number");
if (isNaN(N1))
    alert("N1 Invalid number");
if (isNaN(N2))
    alert("N2 Invalid number");
if (isNaN(N3))
    alert("N3 Invalid number");

var detM = ((M11*M22*M33)+(M12*M23*M31)+(M13*M21*M34))-((M11*M23*M32)+(M12*M21*M33)+(M13*M22*M31));


function openSoulutionPage() {
    window.location.href = './functions/solution.html';
    showSoulutiosn(); 
}
function openMainPage() {
    window.location.href = '../'; 
}

function showSoulutiosn() {
    var detmtxt = document.getElementById("detm");
    var X = document.getElementById("X");
    var Y = document.getElementById("Y");
    var Z = document.getElementById("Z");
    detmtxt.textContent = "Det M = " + DetM ;
    X.textContent = "X = " + N1/detM ;
    Y.textContent = "Y = " + N2/detM ;
    Z.textContent = "Z = " + N3/detM ;
}
