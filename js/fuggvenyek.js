////////// ÁLLANDÓK //////////
var afa = 1.27;

////////// DIGITÁLIS NYOMTATÁS //////////

// Méretek definiálása:
var meretA3 = document.getElementById("meretA3");
var meretA4 = document.getElementById("meretA4");
var meretA5 = document.getElementById("meretA5");
var meretA6 = document.getElementById("meretA6");
var meretLA4 = document.getElementById("meretLA4");

function nincsIlyenA3asPapir() {
	"use strict";
	papir8.disabled = true;
	papir9.disabled = true;
	papir10.disabled = true;
	papir11.disabled = true;
	papir12.disabled = true;
}


// Színek definiálása:
var szin1 = document.getElementById("szin1"); // 1+0
var szin2 = document.getElementById("szin2"); // 1+1
var szin3 = document.getElementById("szin3"); // 4+0
var szin4 = document.getElementById("szin4"); // 4+1
var szin5 = document.getElementById("szin5"); // 4+4

var szinAr = 0;

function szinBeall() {
	"use strict";
	if (meretA3.checked) {
		if (szin1.checked) {
			if (mennyiseg.value <= szinA4.egyPluszNulla.db500.db / 2 - 1) {
				szinAr = szinA4.egyPluszNulla.db1.ar * 2;
			} else if (mennyiseg.value <= szinA4.egyPluszNulla.db1000.db / 2 - 1) {
				szinAr = szinA4.egyPluszNulla.db500.ar * 2;
			} else if (mennyiseg.value <= szinA4.egyPluszNulla.db10000.db / 2 - 1) {
				szinAr = szinA4.egyPluszNulla.db1000.ar * 2;
			} else if (mennyiseg.value <= szinA4.egyPluszNulla.db50000.db / 2 - 1) {
				szinAr = szinA4.egyPluszNulla.db10000.ar * 2;
			} else {
				szinAr = szinA4.egyPluszNulla.db50000.ar * 2;
			}
		} else if (szin2.checked) {
			if (mennyiseg.value <= szinA4.egyPluszEgy.db250.db / 2 - 1) {
				szinAr = szinA4.egyPluszEgy.db1.ar * 2;
			} else if (mennyiseg.value <= szinA4.egyPluszEgy.db500.db / 2 - 1) {
				szinAr = szinA4.egyPluszEgy.db250.ar * 2;
			} else if (mennyiseg.value <= szinA4.egyPluszEgy.db5000.db / 2 - 1) {
				szinAr = szinA4.egyPluszEgy.db500.ar * 2;
			} else if (mennyiseg.value <= szinA4.egyPluszEgy.db25000.db / 2 - 1) {
				szinAr = szinA4.egyPluszEgy.db5000.ar * 2;
			} else {
				szinAr = szinA4.egyPluszEgy.db25000.ar * 2;
			}
		} else if (szin3.checked) {
			if (mennyiseg.value <= szinA4.negyPluszNulla.db10.db / 2 - 1) {
				szinAr = szinA4.negyPluszNulla.db1.ar * 2;
			} else if (mennyiseg.value <= szinA4.negyPluszNulla.db20.db / 2 - 1) {
				szinAr = szinA4.negyPluszNulla.db10.ar * 2;
			} else if (mennyiseg.value <= szinA4.negyPluszNulla.db50.db / 2 - 1) {
				szinAr = szinA4.negyPluszNulla.db20.ar * 2;
			} else if (mennyiseg.value <= szinA4.negyPluszNulla.db100.db / 2 - 1) {
				szinAr = szinA4.negyPluszNulla.db50.ar * 2;
			} else if (mennyiseg.value <= szinA4.negyPluszNulla.db200.db / 2 - 1) {
				szinAr = szinA4.negyPluszNulla.db100.ar * 2;
			} else if (mennyiseg.value <= szinA4.negyPluszNulla.db500.db / 2 - 1) {
				szinAr = szinA4.negyPluszNulla.db200.ar * 2;
			} else if (mennyiseg.value <= szinA4.negyPluszNulla.db1000.db / 2 - 1) {
				szinAr = szinA4.negyPluszNulla.db500.ar * 2;
			} else if (mennyiseg.value <= szinA4.negyPluszNulla.db5000.db / 2 - 1) {
				szinAr = szinA4.negyPluszNulla.db1000.ar * 2;
			} else if (mennyiseg.value <= szinA4.negyPluszNulla.db10000.db / 2 - 1) {
				szinAr = szinA4.negyPluszNulla.db5000.ar * 2;
			} else {
				szinAr = szinA4.negyPluszNulla.db10000.ar * 2;
			}
		} else if (szin4.checked) {
			if (mennyiseg.value <= szinA4.negyPluszEgy.db10.db / 2 - 1) {
				szinAr = szinA4.negyPluszEgy.db1.ar * 2;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db20.db / 2 - 1) {
				szinAr = szinA4.negyPluszEgy.db10.ar * 2;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db50.db / 2 - 1) {
				szinAr = szinA4.negyPluszEgy.db20.ar * 2;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db100.db / 2 - 1) {
				szinAr = szinA4.negyPluszEgy.db50.ar * 2;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db200.db / 2 - 1) {
				szinAr = szinA4.negyPluszEgy.db100.ar * 2;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db500.db / 2 - 1) {
				szinAr = szinA4.negyPluszEgy.db200.ar * 2;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db1000.db / 2 - 1) {
				szinAr = szinA4.negyPluszEgy.db500.ar * 2;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db5000.db / 2 - 1) {
				szinAr = szinA4.negyPluszEgy.db1000.ar * 2;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db10000.db / 2 - 1) {
				szinAr = szinA4.negyPluszEgy.db5000.ar * 2;
			} else {
				szinAr = szinA4.negyPluszEgy.db10000.ar * 2;
			}
		} else {
			if (mennyiseg.value <= szinA4.negyPluszEgy.db5.db / 2 - 1) {
				szinAr = szinA4.negyPluszEgy.db1.ar * 2;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db10.db / 2 - 1) {
				szinAr = szinA4.negyPluszEgy.db5.ar * 2;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db25.db / 2 - 1) {
				szinAr = szinA4.negyPluszEgy.db10.ar * 2;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db50.db / 2 - 1) {
				szinAr = szinA4.negyPluszEgy.db25.ar * 2;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db100.db / 2 - 1) {
				szinAr = szinA4.negyPluszEgy.db50.ar * 2;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db250.db / 2 - 1) {
				szinAr = szinA4.negyPluszEgy.db100.ar * 2;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db500.db / 2 - 1) {
				szinAr = szinA4.negyPluszEgy.db250.ar * 2;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db2500.db / 2 - 1) {
				szinAr = szinA4.negyPluszEgy.db500.ar * 2;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db5000.db / 2 - 1) {
				szinAr = szinA4.negyPluszEgy.db2500.ar * 2;
			} else {
				szinAr = szinA4.negyPluszEgy.db5000.ar * 2;
			}
		}
	} else if (meretA4.checked) {
		if (szin1.checked) {
			if (mennyiseg.value <= szinA4.egyPluszNulla.db500.db - 1) {
				szinAr = szinA4.egyPluszNulla.db1.ar;
			} else if (mennyiseg.value <= szinA4.egyPluszNulla.db1000.db - 1) {
				szinAr = szinA4.egyPluszNulla.db500.ar;
			} else if (mennyiseg.value <= szinA4.egyPluszNulla.db10000.db - 1) {
				szinAr = szinA4.egyPluszNulla.db1000.ar;
			} else if (mennyiseg.value <= szinA4.egyPluszNulla.db50000.db - 1) {
				szinAr = szinA4.egyPluszNulla.db10000.ar;
			} else {
				szinAr = szinA4.egyPluszNulla.db50000.ar;
			}
		} else if (szin2.checked) {
			if (mennyiseg.value <= szinA4.egyPluszEgy.db250.db - 1) {
				szinAr = szinA4.egyPluszEgy.db1.ar;
			} else if (mennyiseg.value <= szinA4.egyPluszEgy.db500.db - 1) {
				szinAr = szinA4.egyPluszEgy.db250.ar;
			} else if (mennyiseg.value <= szinA4.egyPluszEgy.db5000.db - 1) {
				szinAr = szinA4.egyPluszEgy.db500.ar;
			} else if (mennyiseg.value <= szinA4.egyPluszEgy.db25000.db - 1) {
				szinAr = szinA4.egyPluszEgy.db5000.ar;
			} else {
				szinAr = szinA4.egyPluszEgy.db25000.ar;
			}
		} else if (szin3.checked) {
			if (mennyiseg.value <= szinA4.negyPluszNulla.db10.db - 1) {
				szinAr = szinA4.negyPluszNulla.db1.ar;
			} else if (mennyiseg.value <= szinA4.negyPluszNulla.db20.db - 1) {
				szinAr = szinA4.negyPluszNulla.db10.ar;
			} else if (mennyiseg.value <= szinA4.negyPluszNulla.db50.db - 1) {
				szinAr = szinA4.negyPluszNulla.db20.ar;
			} else if (mennyiseg.value <= szinA4.negyPluszNulla.db100.db - 1) {
				szinAr = szinA4.negyPluszNulla.db50.ar;
			} else if (mennyiseg.value <= szinA4.negyPluszNulla.db200.db - 1) {
				szinAr = szinA4.negyPluszNulla.db100.ar;
			} else if (mennyiseg.value <= szinA4.negyPluszNulla.db500.db - 1) {
				szinAr = szinA4.negyPluszNulla.db200.ar;
			} else if (mennyiseg.value <= szinA4.negyPluszNulla.db1000.db - 1) {
				szinAr = szinA4.negyPluszNulla.db500.ar;
			} else if (mennyiseg.value <= szinA4.negyPluszNulla.db5000.db - 1) {
				szinAr = szinA4.negyPluszNulla.db1000.ar;
			} else if (mennyiseg.value <= szinA4.negyPluszNulla.db10000.db - 1) {
				szinAr = szinA4.negyPluszNulla.db5000.ar;
			} else {
				szinAr = szinA4.negyPluszNulla.db10000.ar;
			}
		} else if (szin4.checked) {
			if (mennyiseg.value <= szinA4.negyPluszEgy.db10.db - 1) {
				szinAr = szinA4.negyPluszEgy.db1.ar;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db20.db - 1) {
				szinAr = szinA4.negyPluszEgy.db10.ar;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db50.db - 1) {
				szinAr = szinA4.negyPluszEgy.db20.ar;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db100.db - 1) {
				szinAr = szinA4.negyPluszEgy.db50.ar;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db200.db - 1) {
				szinAr = szinA4.negyPluszEgy.db100.ar;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db500.db - 1) {
				szinAr = szinA4.negyPluszEgy.db200.ar;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db1000.db - 1) {
				szinAr = szinA4.negyPluszEgy.db500.ar;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db5000.db - 1) {
				szinAr = szinA4.negyPluszEgy.db1000.ar;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db10000.db - 1) {
				szinAr = szinA4.negyPluszEgy.db5000.ar;
			} else {
				szinAr = szinA4.negyPluszEgy.db10000.ar;
			}
		} else {
			if (mennyiseg.value <= szinA4.negyPluszEgy.db5.db - 1) {
				szinAr = szinA4.negyPluszEgy.db1.ar;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db10.db - 1) {
				szinAr = szinA4.negyPluszEgy.db5.ar;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db25.db - 1) {
				szinAr = szinA4.negyPluszEgy.db10.ar;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db50.db - 1) {
				szinAr = szinA4.negyPluszEgy.db25.ar;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db100.db - 1) {
				szinAr = szinA4.negyPluszEgy.db50.ar;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db250.db - 1) {
				szinAr = szinA4.negyPluszEgy.db100.ar;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db500.db - 1) {
				szinAr = szinA4.negyPluszEgy.db250.ar;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db2500.db - 1) {
				szinAr = szinA4.negyPluszEgy.db500.ar;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db5000.db - 1) {
				szinAr = szinA4.negyPluszEgy.db2500.ar;
			} else {
				szinAr = szinA4.negyPluszEgy.db5000.ar;
			}
		}
	} else if (meretA5.checked) {
		if (szin1.checked) {
			if (mennyiseg.value <= szinA4.egyPluszNulla.db500.db * 2 - 1) {
				szinAr = szinA4.egyPluszNulla.db1.ar / 2;
			} else if (mennyiseg.value <= szinA4.egyPluszNulla.db1000.db * 2 - 1) {
				szinAr = szinA4.egyPluszNulla.db500.ar / 2;
			} else if (mennyiseg.value <= szinA4.egyPluszNulla.db10000.db * 2 - 1) {
				szinAr = szinA4.egyPluszNulla.db1000.ar / 2;
			} else if (mennyiseg.value <= szinA4.egyPluszNulla.db50000.db * 2 - 1) {
				szinAr = szinA4.egyPluszNulla.db10000.ar / 2;
			} else {
				szinAr = szinA4.egyPluszNulla.db50000.ar / 2;
			}
		} else if (szin2.checked) {
			if (mennyiseg.value <= szinA4.egyPluszEgy.db250.db * 2 - 1) {
				szinAr = szinA4.egyPluszEgy.db1.ar / 2;
			} else if (mennyiseg.value <= szinA4.egyPluszEgy.db500.db * 2 - 1) {
				szinAr = szinA4.egyPluszEgy.db250.ar / 2;
			} else if (mennyiseg.value <= szinA4.egyPluszEgy.db5000.db * 2 - 1) {
				szinAr = szinA4.egyPluszEgy.db500.ar / 2;
			} else if (mennyiseg.value <= szinA4.egyPluszEgy.db25000.db * 2 - 1) {
				szinAr = szinA4.egyPluszEgy.db5000.ar / 2;
			} else {
				szinAr = szinA4.egyPluszEgy.db25000.ar / 2;
			}
		} else if (szin3.checked) {
			if (mennyiseg.value <= szinA4.negyPluszNulla.db10.db * 2 - 1) {
				szinAr = szinA4.negyPluszNulla.db1.ar / 2;
			} else if (mennyiseg.value <= szinA4.negyPluszNulla.db20.db * 2 - 1) {
				szinAr = szinA4.negyPluszNulla.db10.ar / 2;
			} else if (mennyiseg.value <= szinA4.negyPluszNulla.db50.db * 2 - 1) {
				szinAr = szinA4.negyPluszNulla.db20.ar / 2;
			} else if (mennyiseg.value <= szinA4.negyPluszNulla.db100.db * 2 - 1) {
				szinAr = szinA4.negyPluszNulla.db50.ar / 2;
			} else if (mennyiseg.value <= szinA4.negyPluszNulla.db200.db * 2 - 1) {
				szinAr = szinA4.negyPluszNulla.db100.ar / 2;
			} else if (mennyiseg.value <= szinA4.negyPluszNulla.db500.db * 2 - 1) {
				szinAr = szinA4.negyPluszNulla.db200.ar / 2;
			} else if (mennyiseg.value <= szinA4.negyPluszNulla.db1000.db * 2 - 1) {
				szinAr = szinA4.negyPluszNulla.db500.ar / 2;
			} else if (mennyiseg.value <= szinA4.negyPluszNulla.db5000.db * 2 - 1) {
				szinAr = szinA4.negyPluszNulla.db1000.ar / 2;
			} else if (mennyiseg.value <= szinA4.negyPluszNulla.db10000.db * 2 - 1) {
				szinAr = szinA4.negyPluszNulla.db5000.ar / 2;
			} else {
				szinAr = szinA4.negyPluszNulla.db10000.ar / 2;
			}
		} else if (szin4.checked) {
			if (mennyiseg.value <= szinA4.negyPluszEgy.db10.db * 2 - 1) {
				szinAr = szinA4.negyPluszEgy.db1.ar / 2;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db20.db * 2 - 1) {
				szinAr = szinA4.negyPluszEgy.db10.ar / 2;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db50.db * 2 - 1) {
				szinAr = szinA4.negyPluszEgy.db20.ar / 2;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db100.db * 2 - 1) {
				szinAr = szinA4.negyPluszEgy.db50.ar / 2;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db200.db * 2 - 1) {
				szinAr = szinA4.negyPluszEgy.db100.ar / 2;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db500.db * 2 - 1) {
				szinAr = szinA4.negyPluszEgy.db200.ar / 2;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db1000.db * 2 - 1) {
				szinAr = szinA4.negyPluszEgy.db500.ar / 2;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db5000.db * 2 - 1) {
				szinAr = szinA4.negyPluszEgy.db1000.ar / 2;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db10000.db * 2 - 1) {
				szinAr = szinA4.negyPluszEgy.db5000.ar / 2;
			} else {
				szinAr = szinA4.negyPluszEgy.db10000.ar / 2;
			}
		} else {
			if (mennyiseg.value <= szinA4.negyPluszEgy.db5.db * 2 - 1) {
				szinAr = szinA4.negyPluszEgy.db1.ar / 2;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db10.db * 2 - 1) {
				szinAr = szinA4.negyPluszEgy.db5.ar / 2;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db25.db * 2 - 1) {
				szinAr = szinA4.negyPluszEgy.db10.ar / 2;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db50.db * 2 - 1) {
				szinAr = szinA4.negyPluszEgy.db25.ar / 2;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db100.db * 2 - 1) {
				szinAr = szinA4.negyPluszEgy.db50.ar / 2;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db250.db * 2 - 1) {
				szinAr = szinA4.negyPluszEgy.db100.ar / 2;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db500.db * 2 - 1) {
				szinAr = szinA4.negyPluszEgy.db250.ar / 2;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db2500.db * 2 - 1) {
				szinAr = szinA4.negyPluszEgy.db500.ar / 2;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db5000.db * 2 - 1) {
				szinAr = szinA4.negyPluszEgy.db2500.ar / 2;
			} else {
				szinAr = szinA4.negyPluszEgy.db5000.ar / 2;
			}
		}
	} else if (meretA6.checked) {
		if (szin1.checked) {
			if (mennyiseg.value <= szinA4.egyPluszNulla.db500.db * 4 - 1) {
				szinAr = szinA4.egyPluszNulla.db1.ar / 4;
			} else if (mennyiseg.value <= szinA4.egyPluszNulla.db1000.db * 4 - 1) {
				szinAr = szinA4.egyPluszNulla.db500.ar / 4;
			} else if (mennyiseg.value <= szinA4.egyPluszNulla.db10000.db * 4 - 1) {
				szinAr = szinA4.egyPluszNulla.db1000.ar / 4;
			} else if (mennyiseg.value <= szinA4.egyPluszNulla.db50000.db * 4 - 1) {
				szinAr = szinA4.egyPluszNulla.db10000.ar / 4;
			} else {
				szinAr = szinA4.egyPluszNulla.db50000.ar / 4;
			}
		} else if (szin2.checked) {
			if (mennyiseg.value <= szinA4.egyPluszEgy.db250.db * 4 - 1) {
				szinAr = szinA4.egyPluszEgy.db1.ar / 4;
			} else if (mennyiseg.value <= szinA4.egyPluszEgy.db500.db * 4 - 1) {
				szinAr = szinA4.egyPluszEgy.db250.ar / 4;
			} else if (mennyiseg.value <= szinA4.egyPluszEgy.db5000.db * 4 - 1) {
				szinAr = szinA4.egyPluszEgy.db500.ar / 4;
			} else if (mennyiseg.value <= szinA4.egyPluszEgy.db25000.db * 4 - 1) {
				szinAr = szinA4.egyPluszEgy.db5000.ar / 4;
			} else {
				szinAr = szinA4.egyPluszEgy.db25000.ar / 4;
			}
		} else if (szin3.checked) {
			if (mennyiseg.value <= szinA4.negyPluszNulla.db10.db * 4 - 1) {
				szinAr = szinA4.negyPluszNulla.db1.ar / 4;
			} else if (mennyiseg.value <= szinA4.negyPluszNulla.db20.db * 4 - 1) {
				szinAr = szinA4.negyPluszNulla.db10.ar / 4;
			} else if (mennyiseg.value <= szinA4.negyPluszNulla.db50.db * 4 - 1) {
				szinAr = szinA4.negyPluszNulla.db20.ar / 4;
			} else if (mennyiseg.value <= szinA4.negyPluszNulla.db100.db * 4 - 1) {
				szinAr = szinA4.negyPluszNulla.db50.ar / 4;
			} else if (mennyiseg.value <= szinA4.negyPluszNulla.db200.db * 4 - 1) {
				szinAr = szinA4.negyPluszNulla.db100.ar / 4;
			} else if (mennyiseg.value <= szinA4.negyPluszNulla.db500.db * 4 - 1) {
				szinAr = szinA4.negyPluszNulla.db200.ar / 4;
			} else if (mennyiseg.value <= szinA4.negyPluszNulla.db1000.db * 4 - 1) {
				szinAr = szinA4.negyPluszNulla.db500.ar / 4;
			} else if (mennyiseg.value <= szinA4.negyPluszNulla.db5000.db * 4 - 1) {
				szinAr = szinA4.negyPluszNulla.db1000.ar / 4;
			} else if (mennyiseg.value <= szinA4.negyPluszNulla.db10000.db * 4 - 1) {
				szinAr = szinA4.negyPluszNulla.db5000.ar / 4;
			} else {
				szinAr = szinA4.negyPluszNulla.db10000.ar / 4;
			}
		} else if (szin4.checked) {
			if (mennyiseg.value <= szinA4.negyPluszEgy.db10.db * 4 - 1) {
				szinAr = szinA4.negyPluszEgy.db1.ar / 4;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db20.db * 4 - 1) {
				szinAr = szinA4.negyPluszEgy.db10.ar / 4;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db50.db * 4 - 1) {
				szinAr = szinA4.negyPluszEgy.db20.ar / 4;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db100.db * 4 - 1) {
				szinAr = szinA4.negyPluszEgy.db50.ar / 4;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db200.db * 4 - 1) {
				szinAr = szinA4.negyPluszEgy.db100.ar / 4;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db500.db * 4 - 1) {
				szinAr = szinA4.negyPluszEgy.db200.ar / 4;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db1000.db * 4 - 1) {
				szinAr = szinA4.negyPluszEgy.db500.ar / 4;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db5000.db * 4 - 1) {
				szinAr = szinA4.negyPluszEgy.db1000.ar / 4;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db10000.db * 4 - 1) {
				szinAr = szinA4.negyPluszEgy.db5000.ar / 4;
			} else {
				szinAr = szinA4.negyPluszEgy.db10000.ar / 4;
			}
		} else {
			if (mennyiseg.value <= szinA4.negyPluszEgy.db5.db * 4 - 1) {
				szinAr = szinA4.negyPluszEgy.db1.ar / 4;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db10.db * 4 - 1) {
				szinAr = szinA4.negyPluszEgy.db5.ar / 4;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db25.db * 4 - 1) {
				szinAr = szinA4.negyPluszEgy.db10.ar / 4;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db50.db * 4 - 1) {
				szinAr = szinA4.negyPluszEgy.db25.ar / 4;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db100.db * 4 - 1) {
				szinAr = szinA4.negyPluszEgy.db50.ar / 4;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db250.db * 4 - 1) {
				szinAr = szinA4.negyPluszEgy.db100.ar / 4;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db500.db * 4 - 1) {
				szinAr = szinA4.negyPluszEgy.db250.ar / 4;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db2500.db * 4 - 1) {
				szinAr = szinA4.negyPluszEgy.db500.ar / 4;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db5000.db * 4 - 1) {
				szinAr = szinA4.negyPluszEgy.db2500.ar / 4;
			} else {
				szinAr = szinA4.negyPluszEgy.db5000.ar / 4;
			}
		}
	} else {
		if (szin1.checked) {
			if (mennyiseg.value <= szinA4.egyPluszNulla.db500.db * 3 - 1) {
				szinAr = szinA4.egyPluszNulla.db1.ar / 3;
			} else if (mennyiseg.value <= szinA4.egyPluszNulla.db1000.db * 3 - 1) {
				szinAr = szinA4.egyPluszNulla.db500.ar / 3;
			} else if (mennyiseg.value <= szinA4.egyPluszNulla.db10000.db * 3 - 1) {
				szinAr = szinA4.egyPluszNulla.db1000.ar / 3;
			} else if (mennyiseg.value <= szinA4.egyPluszNulla.db50000.db * 3 - 1) {
				szinAr = szinA4.egyPluszNulla.db10000.ar / 3;
			} else {
				szinAr = szinA4.egyPluszNulla.db50000.ar / 3;
			}
		} else if (szin2.checked) {
			if (mennyiseg.value <= szinA4.egyPluszEgy.db250.db * 3 - 1) {
				szinAr = szinA4.egyPluszEgy.db1.ar / 3;
			} else if (mennyiseg.value <= szinA4.egyPluszEgy.db500.db * 3 - 1) {
				szinAr = szinA4.egyPluszEgy.db250.ar / 3;
			} else if (mennyiseg.value <= szinA4.egyPluszEgy.db5000.db * 3 - 1) {
				szinAr = szinA4.egyPluszEgy.db500.ar / 3;
			} else if (mennyiseg.value <= szinA4.egyPluszEgy.db25000.db * 3 - 1) {
				szinAr = szinA4.egyPluszEgy.db5000.ar / 3;
			} else {
				szinAr = szinA4.egyPluszEgy.db25000.ar / 3;
			}
		} else if (szin3.checked) {
			if (mennyiseg.value <= szinA4.negyPluszNulla.db10.db * 3 - 1) {
				szinAr = szinA4.negyPluszNulla.db1.ar / 3;
			} else if (mennyiseg.value <= szinA4.negyPluszNulla.db20.db * 3 - 1) {
				szinAr = szinA4.negyPluszNulla.db10.ar / 3;
			} else if (mennyiseg.value <= szinA4.negyPluszNulla.db50.db * 3 - 1) {
				szinAr = szinA4.negyPluszNulla.db20.ar / 3;
			} else if (mennyiseg.value <= szinA4.negyPluszNulla.db100.db * 3 - 1) {
				szinAr = szinA4.negyPluszNulla.db50.ar / 3;
			} else if (mennyiseg.value <= szinA4.negyPluszNulla.db200.db * 3 - 1) {
				szinAr = szinA4.negyPluszNulla.db100.ar / 3;
			} else if (mennyiseg.value <= szinA4.negyPluszNulla.db500.db * 3 - 1) {
				szinAr = szinA4.negyPluszNulla.db200.ar / 3;
			} else if (mennyiseg.value <= szinA4.negyPluszNulla.db1000.db * 3 - 1) {
				szinAr = szinA4.negyPluszNulla.db500.ar / 3;
			} else if (mennyiseg.value <= szinA4.negyPluszNulla.db5000.db * 3 - 1) {
				szinAr = szinA4.negyPluszNulla.db1000.ar / 3;
			} else if (mennyiseg.value <= szinA4.negyPluszNulla.db10000.db * 3 - 1) {
				szinAr = szinA4.negyPluszNulla.db5000.ar / 3;
			} else {
				szinAr = szinA4.negyPluszNulla.db10000.ar / 3;
			}
		} else if (szin4.checked) {
			if (mennyiseg.value <= szinA4.negyPluszEgy.db10.db * 3 - 1) {
				szinAr = szinA4.negyPluszEgy.db1.ar / 3;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db20.db * 3 - 1) {
				szinAr = szinA4.negyPluszEgy.db10.ar / 3;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db50.db * 3 - 1) {
				szinAr = szinA4.negyPluszEgy.db20.ar / 3;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db100.db * 3 - 1) {
				szinAr = szinA4.negyPluszEgy.db50.ar / 3;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db200.db * 3 - 1) {
				szinAr = szinA4.negyPluszEgy.db100.ar / 3;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db500.db * 3 - 1) {
				szinAr = szinA4.negyPluszEgy.db200.ar / 3;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db1000.db * 3 - 1) {
				szinAr = szinA4.negyPluszEgy.db500.ar / 3;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db5000.db * 3 - 1) {
				szinAr = szinA4.negyPluszEgy.db1000.ar / 3;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db10000.db * 3 - 1) {
				szinAr = szinA4.negyPluszEgy.db5000.ar / 3;
			} else {
				szinAr = szinA4.negyPluszEgy.db10000.ar / 3;
			}
		} else {
			if (mennyiseg.value <= szinA4.negyPluszEgy.db5.db * 3 - 1) {
				szinAr = szinA4.negyPluszEgy.db1.ar / 3;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db10.db * 3 - 1) {
				szinAr = szinA4.negyPluszEgy.db5.ar / 3;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db25.db * 3 - 1) {
				szinAr = szinA4.negyPluszEgy.db10.ar / 3;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db50.db * 3 - 1) {
				szinAr = szinA4.negyPluszEgy.db25.ar / 3;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db100.db * 3 - 1) {
				szinAr = szinA4.negyPluszEgy.db50.ar / 3;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db250.db * 3 - 1) {
				szinAr = szinA4.negyPluszEgy.db100.ar / 3;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db500.db * 3 - 1) {
				szinAr = szinA4.negyPluszEgy.db250.ar / 3;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db2500.db * 3 - 1) {
				szinAr = szinA4.negyPluszEgy.db500.ar / 3;
			} else if (mennyiseg.value <= szinA4.negyPluszEgy.db5000.db * 3 - 1) {
				szinAr = szinA4.negyPluszEgy.db2500.ar / 3;
			} else {
				szinAr = szinA4.negyPluszEgy.db5000.ar / 3;
			}
		}
	}
}

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

// Az Enter gomb lenyomásánál ez történik
function enterGomb(event) {
    if (event.keyCode == 13) {
        "use strict";

		var mennyiseg = document.getElementById("mennyiseg").value;

		netto.innerHTML = (szinAr + papirAr) * mennyiseg;
		var bruttoErtek = netto.innerHTML * afa;
		brutto.innerHTML = Math.round(bruttoErtek * 10) / 10;
    }
}

// A Törlés gomb lenyomásánák ez történik
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
