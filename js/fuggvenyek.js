////////// ÁLLANDÓK //////////
var afa = 1.27;

////////// DIGITÁLIS NYOMTATÁS //////////

// Méretek definiálása:
var meretA3 = document.getElementById("meretA3");
var meretA4 = document.getElementById("meretA4");
var meretA5 = document.getElementById("meretA5");
var meretA6 = document.getElementById("meretA6");
var meretLA4 = document.getElementById("meretLA4");

// Színek definiálása:
var szin1 = document.getElementById("szin1"); // 1+0
var szin2 = document.getElementById("szin2"); // 1+1
var szin3 = document.getElementById("szin3"); // 4+0
var szin4 = document.getElementById("szin4"); // 4+1
var szin5 = document.getElementById("szin5"); // 4+4



var mennyiseg = 100;
var netto = document.getElementById("nyomtatas_netto");
var brutto = document.getElementById("nyomtatas_brutto");
//var nettoErtek = Number(netto.innerHTML);

function szamitas() {
	'use strict';
	netto.innerHTML = szin.a3.egyPluszNulla.db1.ar * mennyiseg;
	brutto.innerHTML = netto.innerHTML * afa;
}

function torles() {
	'use strict';
	netto.innerHTML = "0.00";
	brutto.innerHTML = "0.00";
}
