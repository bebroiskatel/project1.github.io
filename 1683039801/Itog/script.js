var bukva = "";
var slova = ["молоко", "каратэ", "работа", "азбука", "аптека", "ворона", "борода"];
var kartina = ["1visel.png", "2visel.png", "3visel.png", "4visel.png", "5visel.png", "6visel.png", "7visel.png", "8visel.png", "9visel.png", "10visel.png"];
var slovo = [];
var slovoItem = "";
var q = 1;
slovoItem = slova[Math.floor(Math.random() * 7)];
//b0.innerHTML=slovoItem[0]; 
//b1.innerHTML=slovoItem[1];
//b2.innerHTML=slovoItem[2];
//b3.innerHTML=slovoItem[3];
//b4.innerHTML=slovoItem[4];
//b5.innerHTML=slovoItem[5];

var checkbukva = function () {
    var bf = false;
    for (i = 0; i < 6; i++) {
        if (slovoItem[i] == bukva) {
            idb = document.getElementById("b" + i);
            idb.innerHTML = bukva;
            bf = true;
        }

    }
    if (bf == false) {
        alert("такой буквы нету");
        qdb = "img/" + q + "visel.png";
        visilica.src = qdb;
        q++;
    }
}
