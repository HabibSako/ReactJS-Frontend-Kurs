//incele kısmındaki konsol bölümüne çıktı verir
console.log("console.log");
console.info("console.info");
console.warn("console.warn");
console.error("console.error");

// ekranda yazım ikisi de aynı
document.writeln("ekranda göster  </>");
window.document.writeln("ekranda <br/>göster-2");

// alert("pop-up data");

/*******************************************/

// variable global
// değiken üzerine yeni değer berilebiliyor. Bundan dolayı pek kullanılmaz.

var pencil = "Digital Pencil";
var pencil = "Digital Pencil-1";
document.writeln(pencil+"<br/>");

// variable local
// iki tane aynı let'e izin vermiyor consolda hata var.
let pencil2 = "Digital Pencil-2";
pencil2 = "Digital Pencil-22";
document.writeln(pencil2+"<br/>");

