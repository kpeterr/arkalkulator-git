////////// ÁLLANDÓK //////////
var afa = 1.27;

////////// DIGITÁLIS NYOMTATÁS //////////

// Méretek definiálása:
var meretA3 = document.getElementById("meretA3");
var meretA4 = document.getElementById("meretA4");
var meretA5 = document.getElementById("meretA5");
var meretA6 = document.getElementById("meretA6");
var meretLA4 = document.getElementById("meretLA4");

var meretKell = {};

function meretBeall() {
	"use strict";
	if (meretA3.checked) {
		meretKell = szin.a3;
	} else if (meretA4.checked) {
		meretKell = szin.a4;
	} else if (meretA5.checked) {
		meretKell = szin.a5;
	} else if (meretA6.checked) {
		meretKell = szin.a6;
	} else {
		meretKell = szin.la4;
	}
}

// Színek definiálása:
var szin1 = document.getElementById("szin1"); // 1+0
var szin2 = document.getElementById("szin2"); // 1+1
var szin3 = document.getElementById("szin3"); // 4+0
var szin4 = document.getElementById("szin4"); // 4+1
var szin5 = document.getElementById("szin5"); // 4+4

// Papírok definiálása:
var papir1 = document.getElementById("papir1");
var papir2 = document.getElementById("papir2");
var papir3 = document.getElementById("papir3");
var papir4 = document.getElementById("papir4");
var papir5 = document.getElementById("papir5");
var papir6 = document.getElementById("papir6");
var papir7 = document.getElementById("papir7");
var papir8 = document.getElementById("papir8");
var papir9 = document.getElementById("papir9");
var papir10 = document.getElementById("papir10");
var papir11 = document.getElementById("papir11");
var papir12 = document.getElementById("papir12");
var papir13 = document.getElementById("papir13");
var papir14 = document.getElementById("papir14");
var papir15 = document.getElementById("papir15");
var papir16 = document.getElementById("papir16");


// Függvények:
var netto = document.getElementById("nyomtatas_netto");
var brutto = document.getElementById("nyomtatas_brutto");
//var nettoErtek = Number(netto.innerHTML);

function szamitas() {
	"use strict";

	meretBeall();
	console.log(meretKell);
	
	var mennyiseg = document.getElementById("mennyiseg").value;
	netto.innerHTML = szin.a3.egyPluszNulla.db1.ar * mennyiseg;
	var bruttoErtek = netto.innerHTML * afa;
	brutto.innerHTML = Math.round(bruttoErtek * 10) / 10;
}

function torles() {
	"use strict";
	netto.innerHTML = "0.00";
	brutto.innerHTML = "0.00";
	mennyiseg.value = 0;
}
