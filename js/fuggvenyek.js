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
		//papir8.style.textDecoration = "line-through";
		papir8.disabled = true;
		papir9.disabled = true;
		papir10.disabled = true;
		papir11.disabled = true;
		papir12.disabled = true;
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

var papirAr = 0;

function papirBeall() {
	"use strict";
	if (meretA3.checked) {
		if (papir1.checked) {
			papirAr = papir.a3.papir1.db1.ar;
		} else if (papir2.checked) {
			papirAr = papir.a3.papir2.db1.ar;
		} else if (papir3.checked) {
			papirAr = papir.a3.papir3.db1.ar;
		} else if (papir4.checked) {
			papirAr = papir.a3.papir4.db1.ar;
		} else if (papir5.checked) {
			if (mennyiseg.value <= papir.a3.papir5.db100.db - 1) {
				papirAr = papir.a3.papir5.db1.ar;
			} else {
				papirAr = papir.a3.papir5.db100.ar;
			}
		} else if (papir6.checked) {
			if (mennyiseg.value <= papir.a3.papir6.db100.db - 1) {
				papirAr = papir.a3.papir6.db1.ar;
			} else {
				papirAr = papir.a3.papir6.db100.ar;
			}
		} else if (papir7.checked) {
			if (mennyiseg.value <= papir.a3.papir7.db100.db - 1) {
				papirAr = papir.a3.papir7.db1.ar;
			} else {
				papirAr = papir.a3.papir7.db100.ar;
			}
		} else if (papir13.checked) {
			papirAr = papir.a3.papir13.db1.ar;
		} else if (papir14.checked) {
			papirAr = papir.a3.papir14.db1.ar;
		} else if (papir15.checked) {
			papirAr = papir.a3.papir15.db1.ar;
		} else if (papir16.checked) {
			if (mennyiseg.value <= papir.a3.papir16.db100.db - 1) {
				papirAr = papir.a3.papir16.db1.ar;
			} else {
				papirAr = papir.a3.papir16.db100.ar;
			}
		}
	} else if (meretA4.checked) {
		if (papir1.checked) {
			papirAr = papir.a4.papir1.db1.ar;
		} else if (papir2.checked) {
			papirAr = papir.a4.papir2.db1.ar;
		} else if (papir3.checked) {
			papirAr = papir.a4.papir3.db1.ar;
		} else if (papir4.checked) {
			papirAr = papir.a4.papir4.db1.ar;
		} else if (papir5.checked) {
			if (mennyiseg.value <= papir.a4.papir5.db100.db - 1) {
				papirAr = papir.a4.papir5.db1.ar;
			} else {
				papirAr = papir.a4.papir5.db100.ar;
			}
		} else if (papir6.checked) {
			if (mennyiseg.value <= papir.a4.papir6.db100.db - 1) {
				papirAr = papir.a4.papir6.db1.ar;
			} else {
				papirAr = papir.a4.papir6.db100.ar;
			}
		} else if (papir7.checked) {
			if (mennyiseg.value <= papir.a4.papir7.db100.db - 1) {
				papirAr = papir.a4.papir7.db1.ar;
			} else {
				papirAr = papir.a4.papir7.db100.ar;
			}
		} else if (papir8.checked) {
			papirAr = papir.a4.papir8.db1.ar;
		} else if (papir9.checked) {
			papirAr = papir.a4.papir9.db1.ar;
		} else if (papir10.checked) {
			papirAr = papir.a4.papir10.db1.ar;
		} else if (papir11.checked) {
			papirAr = papir.a4.papir11.db1.ar;
		} else if (papir12.checked) {
			papirAr = papir.a4.papir12.db1.ar;
		} else if (papir13.checked) {
			papirAr = papir.a4.papir13.db1.ar;
		} else if (papir14.checked) {
			papirAr = papir.a4.papir14.db1.ar;
		} else if (papir15.checked) {
			papirAr = papir.a4.papir15.db1.ar;
		} else if (papir16.checked) {
			if (mennyiseg.value <= papir.a4.papir16.db100.db - 1) {
				papirAr = papir.a4.papir16.db1.ar;
			} else {
				papirAr = papir.a4.papir16.db100.ar;
			}
		}
	} else if (meretA5.checked) {
		if (papir1.checked) {
			papirAr = papir.a4.papir1.db1.ar / 2;
		} else if (papir2.checked) {
			papirAr = papir.a4.papir2.db1.ar / 2;
		} else if (papir3.checked) {
			papirAr = papir.a4.papir3.db1.ar / 2;
		} else if (papir4.checked) {
			papirAr = papir.a4.papir4.db1.ar / 2;
		} else if (papir5.checked) {
			if (mennyiseg.value <= papir.a4.papir5.db100.db - 1) {
				papirAr = papir.a4.papir5.db1.ar / 2;
			} else {
				papirAr = papir.a4.papir5.db100.ar / 2;
			}
		} else if (papir6.checked) {
			if (mennyiseg.value <= papir.a4.papir6.db100.db - 1) {
				papirAr = papir.a4.papir6.db1.ar / 2;
			} else {
				papirAr = papir.a4.papir6.db100.ar / 2;
			}
		} else if (papir7.checked) {
			if (mennyiseg.value <= papir.a4.papir7.db100.db - 1) {
				papirAr = papir.a4.papir7.db1.ar / 2;
			} else {
				papirAr = papir.a4.papir7.db100.ar / 2;
			}
		} else if (papir8.checked) {
			papirAr = papir.a4.papir8.db1.ar / 2;
		} else if (papir9.checked) {
			papirAr = papir.a4.papir9.db1.ar / 2;
		} else if (papir10.checked) {
			papirAr = papir.a4.papir10.db1.ar / 2;
		} else if (papir11.checked) {
			papirAr = papir.a4.papir11.db1.ar / 2;
		} else if (papir12.checked) {
			papirAr = papir.a4.papir12.db1.ar / 2;
		} else if (papir13.checked) {
			papirAr = papir.a4.papir13.db1.ar / 2;
		} else if (papir14.checked) {
			papirAr = papir.a4.papir14.db1.ar / 2;
		} else if (papir15.checked) {
			papirAr = papir.a4.papir15.db1.ar / 2;
		} else if (papir16.checked) {
			if (mennyiseg.value <= papir.a4.papir16.db100.db - 1) {
				papirAr = papir.a4.papir16.db1.ar / 2;
			} else {
				papirAr = papir.a4.papir16.db100.ar / 2;
			}
		}
	} else if (meretA6.checked) {
		if (papir1.checked) {
			papirAr = papir.a4.papir1.db1.ar / 4;
		} else if (papir2.checked) {
			papirAr = papir.a4.papir2.db1.ar / 4;
		} else if (papir3.checked) {
			papirAr = papir.a4.papir3.db1.ar / 4;
		} else if (papir4.checked) {
			papirAr = papir.a4.papir4.db1.ar / 4;
		} else if (papir5.checked) {
			if (mennyiseg.value <= papir.a4.papir5.db100.db - 1) {
				papirAr = papir.a4.papir5.db1.ar / 4;
			} else {
				papirAr = papir.a4.papir5.db100.ar / 4;
			}
		} else if (papir6.checked) {
			if (mennyiseg.value <= papir.a4.papir6.db100.db - 1) {
				papirAr = papir.a4.papir6.db1.ar / 4;
			} else {
				papirAr = papir.a4.papir6.db100.ar / 4;
			}
		} else if (papir7.checked) {
			if (mennyiseg.value <= papir.a4.papir7.db100.db - 1) {
				papirAr = papir.a4.papir7.db1.ar / 4;
			} else {
				papirAr = papir.a4.papir7.db100.ar / 4;
			}
		} else if (papir8.checked) {
			papirAr = papir.a4.papir8.db1.ar / 4;
		} else if (papir9.checked) {
			papirAr = papir.a4.papir9.db1.ar / 4;
		} else if (papir10.checked) {
			papirAr = papir.a4.papir10.db1.ar / 4;
		} else if (papir11.checked) {
			papirAr = papir.a4.papir11.db1.ar / 4;
		} else if (papir12.checked) {
			papirAr = papir.a4.papir12.db1.ar / 4;
		} else if (papir13.checked) {
			papirAr = papir.a4.papir13.db1.ar / 4;
		} else if (papir14.checked) {
			papirAr = papir.a4.papir14.db1.ar / 4;
		} else if (papir15.checked) {
			papirAr = papir.a4.papir15.db1.ar / 4;
		} else if (papir16.checked) {
			if (mennyiseg.value <= papir.a4.papir16.db100.db - 1) {
				papirAr = papir.a4.papir16.db1.ar / 4;
			} else {
				papirAr = papir.a4.papir16.db100.ar / 4;
			}
		}
	} else {
		if (papir1.checked) {
			papirAr = papir.a4.papir1.db1.ar / 3;
		} else if (papir2.checked) {
			papirAr = papir.a4.papir2.db1.ar / 3;
		} else if (papir3.checked) {
			papirAr = papir.a4.papir3.db1.ar / 3;
		} else if (papir4.checked) {
			papirAr = papir.a4.papir4.db1.ar / 3;
		} else if (papir5.checked) {
			if (mennyiseg.value <= papir.a4.papir5.db100.db - 1) {
				papirAr = papir.a4.papir5.db1.ar / 3;
			} else {
				papirAr = papir.a4.papir5.db100.ar / 3;
			}
		} else if (papir6.checked) {
			if (mennyiseg.value <= papir.a4.papir6.db100.db - 1) {
				papirAr = papir.a4.papir6.db1.ar / 3;
			} else {
				papirAr = papir.a4.papir6.db100.ar / 3;
			}
		} else if (papir7.checked) {
			if (mennyiseg.value <= papir.a4.papir7.db100.db - 1) {
				papirAr = papir.a4.papir7.db1.ar / 3;
			} else {
				papirAr = papir.a4.papir7.db100.ar / 3;
			}
		} else if (papir8.checked) {
			papirAr = papir.a4.papir8.db1.ar / 3;
		} else if (papir9.checked) {
			papirAr = papir.a4.papir9.db1.ar / 3;
		} else if (papir10.checked) {
			papirAr = papir.a4.papir10.db1.ar / 3;
		} else if (papir11.checked) {
			papirAr = papir.a4.papir11.db1.ar / 3;
		} else if (papir12.checked) {
			papirAr = papir.a4.papir12.db1.ar / 3;
		} else if (papir13.checked) {
			papirAr = papir.a4.papir13.db1.ar / 3;
		} else if (papir14.checked) {
			papirAr = papir.a4.papir14.db1.ar / 3;
		} else if (papir15.checked) {
			papirAr = papir.a4.papir15.db1.ar / 3;
		} else if (papir16.checked) {
			if (mennyiseg.value <= papir.a4.papir16.db100.db - 1) {
				papirAr = papir.a4.papir16.db1.ar / 3;
			} else {
				papirAr = papir.a4.papir16.db100.ar / 3;
			}
		}
	}
}

// Függvények:
var netto = document.getElementById("nyomtatas_netto");
var brutto = document.getElementById("nyomtatas_brutto");
//var nettoErtek = Number(netto.innerHTML);

function szamitas() {
	"use strict";

	var mennyiseg = document.getElementById("mennyiseg").value;

	meretBeall();
	console.log(meretKell);

	papirBeall();
	console.log(papirAr);
	
	netto.innerHTML = szin.a3.egyPluszNulla.db1.ar * mennyiseg;
	var bruttoErtek = netto.innerHTML * afa;
	brutto.innerHTML = Math.round(bruttoErtek * 10) / 10;
}

function torles() {
	"use strict";
	netto.innerHTML = "0.00";
	brutto.innerHTML = "0.00";
	mennyiseg.value = 0;
	papir8.disabled = false;
	papir9.disabled = false;
	papir10.disabled = false;
	papir11.disabled = false;
	papir12.disabled = false;
}
