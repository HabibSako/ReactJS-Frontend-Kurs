//ÖDEV: Aşağıdaki örnekleri math ile çözelim ?
// -5.9 sayıyının aşağıdaki işlemleri yaptıralım ?
// 1-mutlak değeri alsın 5.9
// 2-yuvarlama yapsın  6.0
// 3-karesini alsın 36.00
// 4-karekök alsın 6.0
// 5-yuvarlama yapsın 6.0
// 6-)çıkan sonucu 5 bölsün 6/5=1
// 7-) iki sayı arasından karşılaştırma yapsın en küçüğünü alsın ve 1 ve 5
// 8-) küçük sayı eğer tekse 3 eklesin çiftse 5 eklesin 
// Örnek-5 : kullanıcı tarafından girilen bir sayıyı negatif mi pozitif mi olduğu ekran yazdıran algoritma ?
// NOT: cast kullalım ?
// Örnek-6 : kullanıcı tarafından password ve repassword alalım sonrasında bu iki değeri karşılaştırma yapalım
// eğer aynı girilirse aynı veri yoksa birbirine uymadı yazan algoritma yapalım
// let a = -5.9;
// a = Math.abs(a);
// document.writeln(a + "<br/>");
// a = Math.round(a);
// document.writeln(a + "<br/>");
// a = Math.round(Math.pow(a, 2));
// document.writeln(a + "<br/>");
// a = Math.sqrt(a);
// document.writeln(a + "<br/>");
// a = Math.round(a);
// document.writeln(a + "<br/>");
// a = a / 5;
// document.writeln(a + "<br/>");
// a = Math.min(1, 5);
// document.writeln(a + "<br/>");
// if (a % 2 == 1) { a = a + 3 }
// else a = a + 5;
// document.writeln(a + "<br/>");

//! örnek 5
// let b = prompt("Lütfen bir  sayı giriniz","2");
// if (b >= 0) {
//     document.writeln(b + " Girdiğiniz sayı pozitif" + "<br/>");
// }
// else if (b <= 0) {
//     document.writeln(b + " Girdiğiniz sayı negatif" + "<br/>");
// }
// else {
//     document.writeln(b + " Girdiğiniz sayı sıfır" + "<br/>");
// }

//! örnek 6
// let password = prompt("Lütfen şifrenizi girinziz");
// let repassword = prompt("Lütfen şifrenizi tekrar girinziz");

// if (password == repassword) {
//     document.writeln(password + " yeni şifreniz " + "<br/>");
// }
// else {
//     document.writeln( " Girdiğiniz şifreler birbirine uymadı. Tekrar deneyeniz" + "<br/>");
// }

/////////////////////////////////////////////////////////////////////////////
// ÖDEV-1 
// kullanıcı tarafından girilen bir kelimenin (prompt)
// let userData= prompt("Lütfen bir şeyler yazınız")  ;
// S-1) Kaç karakterlidir ? (length)
// S-2) boşluklar alınarak Kaç karakterlidir ? (trim)
// S-3) bütün kelimeyi küçük harfle göstermek ? (toLowerCase())
// S-4) bütün kelimeyi büyük harfle göstermek ? (toUpperCase())

//! S-5) Kullanıcıdan alınan ilk kelimeyle , "javascript" kelimeyle değiştirin. (replace, substring, indexOf)
//! console.log(userData.replace("xxxxxxx"),"javascript");
//! console.log(userData.replace(userData.substring(0,userData.indexOf(" ")),"javascript"));

// S-6) yazdığınız kelimede "javascript ile mi başlıyor" ? (startsWith()) 
// S-7) yazdığınız kelimede "javascript ile mi bitiyor" ? (endsWith())
// S-8) ilk harf nedir  ? (charAt())
// S-9) girdiğiniz kelimenin sonuna "-ben js öğreniyorum" (concat())
// S-10) girdiğiniz 0 ile 4 arasındaki indexi ekranda gösterin? (subString())
//!let userData = prompt("Lütfen bir şeyler giriniz");
// document.writeln(userData.length+ "<br>");
// document.writeln(userData.trim().length+ "<br>");
// document.writeln(userData.toLowerCase()+ "<br>");
// document.writeln(userData.toUpperCase()+ "<br>");
// !document.writeln(userData.replace("xxxxxxx"),"javascript");
// !document.writeln(userData.replace(userData.substring(0,userData.indexOf(" ")),"javascript <br>"));
// !document.writeln(userData)
// if(userData.startsWith("javascript")){
//     document.writeln("<br> javacript ile başlıyor <br>");
// }
// else{
//     document.writeln("<br> javacript ile başlamıyor <br>");

// }
// if(userData.endsWith("javascript")){
//     document.writeln("<br> javacript ile bitiyor <br>");
// }
// else{
//     document.writeln("<br> javacript ile bitmiyor <br>");

// }
// document.writeln(userData.charAt(0)+ "<br>");
// document.writeln(userData.concat(" ben js öğreniyorum")+ "<br>");
// document.writeln(userData.substring(0,4)+ "<br>");

//! **************************************************
// ÖDEV -2 
//NOT: örneklerimizi function,anonymous ve arrow function ile yapalım.
//NOT: değişken olarak var,let,const kullanalım.
//Örnek-1
//y=3x+4k ==>1.dereceden2bilinmeyenlidenklem algoritması
//Kullanıcı tarafından alınan x ve kdeğerlerini hesaplayan algoritma yazınız ?

//örnek-2
//Kullanıcı tarafından alınan dereceyi  Fahrenhayta çeviren algoritma yapalım.
//Formül: (derece*9/5)+32

//örnek-3 operatör işlemleri: aşağıdaki örneği javascript ile yapalım
//4+3*2(3:3-1*6+9:1+(3:3))
/******************************************** */

function denklem() {
    var x = prompt("x değerini giriniz:");
    var k = prompt("k değerini giriniz:");
    document.writeln("3*" + x + "+4*" + k + " değeri : " + (3 * x + 4 * k));
}
//denklem();

const fahrenayt = () => {
    const derece = prompt("fahrenayta çevirmek istediğiniz sıcaklık derecesini giriniz :");
    document.writeln(derece + " derece şu kadar fahrenayta eşittir : " + ((derece * 9 / 5) + 32));
}
//fahrenayt();

const ornek3 = function () {
    let sayi = 4 + 3 * 2 * (3 / 3 - 1 * 6 + 9 / 1 + (3 / 3));
    document.writeln(sayi);
}
ornek3();