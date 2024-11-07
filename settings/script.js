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

if (isNaN(M11) || isNaN(M12) || isNaN(M13) || 

    isNaN(M21) || isNaN(M22) || isNaN(M23) || 

    isNaN(M31) || isNaN(M32) || isNaN(M33) || 

    isNaN(N1) || isNaN(N2) || isNaN(N3)     ) {
    alert("One or more inputs are invalid. Please enter valid numbers.");
    }

var detM = ((M11 * M22 * M33) + (M12 * M23 * M31) + (M13 * M21 * M32)) -
            ((M13 * M22 * M31) + (M12 * M21 * M33) + (M11 * M23 * M32));
            if (detM === 0) {
                alert("Determinant is zero, cannot divide by zero.");
                }

function openSoulutionPage() {
    window.location.href = './functions/solution.html';
    var detmtxt = document.getElementById("detm");
    var X = document.getElementById("X");
    var Y = document.getElementById("Y");
    var Z = document.getElementById("Z");
    detmtxt.textContent = "Det M = " + DetM ;
    X.textContent = "X = " + (N1/detM) ;
    Y.textContent = "Y = " + (N2/detM) ;
    Z.textContent = "Z = " + (N3/detM) ;
}
function openMainPage() {
    window.location.href = '../'; 
}



