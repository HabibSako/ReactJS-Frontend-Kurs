// *ncele kısmındaki konsol bölümüne çıktı verir
// console.log("console.log");
// console.info("console.info");
// console.warn("console.warn");
// console.error("console.error");

// *ekranda yazım ikisi de aynı
// document.writeln("ekranda göster  </>");
// window.document.writeln("ekranda <br/>göster-2");

// alert("pop-up data");

/*******************************************/

// *variable global
// *değiken üzerine yeni değer berilebiliyor. 
// *Bundan dolayı pek kullanılmaz.

// var pencil = "Digital Pencil";
// var pencil = "Digital Pencil-1";
// document.writeln(pencil+"<br/>");

/*******************************************/

// *variable local
// *iki tane aynı let'e izin vermiyor consolda hata var.
// let pencil2 = "Digital Pencil-2";
// pencil2 = "Digital Pencil-22";
// document.writeln(pencil2+"<br/>");

// *const anahtar kelimesi, sabit bir değişken tanımlar. 
//*Bir kez tanımlandıktan sonra, değeri değiştirilemez veya 
// *yeniden tanımlanamazlet ile oluşturulan bir değişkene daha sonra yeni bir değer atayabilirsiniz,
//const pencil3 = "digitalPencil-3"
//pencil3 = "digital pencil-22"
//document.writeln(pencil3+"<br/>")

/********************************************* */

// * hoisting
// number = 44;
// var number;

/*******************************************/

//!promt çalışmadı nedenini bul
// const uname=promt("adınız nedir?");
// document.writeln(uname+"<br/>");

// //* promt
// const usurname=prompt("soyadınız nedir?");
// document.writeln(usurname+ "<br/>")

/*******************************************/

//* cast

// let number1 = 10;
// let number2 = Number(String(Number("20")));//?cast çevirdi
// document.writeln(number1+number2+ "<br/>");

/*******************************************/

//* typeof değişkenin tipini gösterir

// let number3 = 20;
// document.writeln(typeof number3+ "<br/>");
// let number4 = "Merhabalar";
// document.writeln(typeof number4+ "<br/>");
// let number5 = true;
// document.writeln(typeof number5+ "<br/>");

/*******************************************/

// *null
// *new
// *instance
// *zero

// //*undefined
// let data;
// document.writeln(data+"<br/>");

// //*undefined
// let data2 = 4/0;
// document.writeln(data2+"<br/>");

// //*NaN not a number
// let data3 = "merhabalar"/2;
// document.writeln(data3+"<br/>");

//! ***************************************************/

//! Math
// document.writeln(Math.PI+"<br/>");
// document.writeln(Math.E+"<br/>");
// document.writeln(Math.min(2,5,3,25,4)+"<br/>");
// document.writeln(Math.max(2,5,3,25,4)+"<br/>");
// // mutlak değer
// document.writeln(Math.abs(-32)+"<br/>");
// // üstsel ifade
// document.writeln(Math.pow(2,8)+"<br/>");
// // karekök
// document.writeln(Math.sqrt(64)+"<br/>");
// // aşağı ve yukarı yuvarlama
// document.writeln(Math.floor(2.9)+"<br/>");
// document.writeln(Math.ceil(2.1)+"<br/>");
// document.writeln(Math.round(2.5)+"<br/>");
// document.writeln(Math.round(2.4)+"<br/>");
// // trigonometrik ifadeler
// document.writeln(Math.sin(2.5)+"<br/>");
// document.writeln(Math.cos(2.5)+"<br/>");
// document.writeln(Math.asin(0.5)+"<br/>");
// // math ifadeler iç içe kullanılabilir
// document.writeln(Math.floor(Math.random()*9+1)+"<br/>");

/**************************************************************** */

//* String
// let vocabulary = " js ÖĞREniyorum js ";
// document.write(vocabulary+ "<br>");
// document.write(vocabulary.length+ "<br>");
// //trim() fonksiyonu baştaki ve sondaki boşlukları siler
// document.write(vocabulary.trim().length+ "<br>");
// document.write(vocabulary.toLowerCase() +"<br>");
// document.write(vocabulary.toUpperCase()+ "<br>");
// //indexof verilen metin parçasının hangi sırada başladığını yazar ve ilk bulduğunu
// document.write(vocabulary.indexOf("js")+ "<br>");
// document.write(vocabulary.lastIndexOf("js")+ "<br>");
// document.write(vocabulary.charAt(5)+ "<br>");
// //concat metnin sonuna ekleme yapmayı, replace string ifadeyi tamamen değiştirmeyi sağlıyor.
// document.write(vocabulary.concat("sonuna ekledim")+ "<br>");
// document.write(vocabulary.replace(vocabulary,"string ifadenin son hali")+ "<br>");
// //substring string ifadenin verilen değerlere göre bir kısmının yazılmasını sağlamaktadır.
// document.write(vocabulary.substring(4)+ "<br>");
// document.write(vocabulary.substring(1,7)+ "<br>");
//////////////////////////////////////////////////////
// ÖDEV-1 
// kullanıcı tarafından girilen bir kelimenin (prompt)
// let userData= prompt("Lütfen bir şeyler yazınız")  ;
// S-1) Kaç karakterlidir ? (length)
// S-2) boşluklar alınarak Kaç karakterlidir ? (trim)
// S-3) bütün kelimeyi küçük harfle göstermek ? (toLowerCase())
// S-4) bütün kelimeyi büyük harfle göstermek ? (toUpperCase())
// S-5) Kullanıcıdan alınan ilk kelimeyle , "javascript" kelimeyle değiştirin. (replace, substring, indexOf)
// console.log(userData.replace("xxxxxxx"),"javascript");
// console.log(userData.replace(userData.substring(0,userData.indexOf(" ")),"javascript"));
// S-6) yazdığınız kelimede "javascript ile mi başlıyor" ? (startsWith()) 
// S-7) yazdığınız kelimede "javascript ile mi bitiyor" ? (endsWith())
// S-8) ilk harf nedir  ? (charAt())
// S-9) girdiğiniz kelimenin sonuna "-ben js öğreniyorum" (concat())
// S-10) girdiğiniz 0 ile 4 arasındaki indexi ekranda gösterin? (subString())

/////////////////////////////////////////////////////////////

//functions

function returnsuzParametresiz() {
    document.writeln("1 - returnsuz paremetresiz <br>");
}
//returnsuzParametresiz();


function returnsuzParametreli(uname) {
    document.writeln("2 - returnsuz paremetresli " + uname + "<br>");
}
//returnsuzParametreli("Habib Şako");


// function returnluParametresiz() {
//     return "3 - returnlu paremetresiz ";
// }
// const data4 = returnluParametresiz();
// document.writeln(data4 + "<br>");

// function returnluParametreli(uname) {
//     return "4 - returnsuz paremetresli " + uname;
// }
// const data5 = returnluParametreli("Habib Şako");
// document.writeln(data5 + "<br>");

////////////////////////////////////////////////////
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

//////////////////////////
//Immedi Function(IF)
//sadece en üstte çalışır.
// (
//     function () {
//         document.writeln("immedia function <br/>");
//     }
// )()

//normal function
function normalFunction() {
    document.writeln("normal function <br/>");
}
//normalFunction();

//anonymous Function
const anonymousFunction = function () {
    document.writeln("anonymous function <br/>");
}
//anonymousFunction();

//? Arrow function en çok kullanılanlardan 
const arrowFunction = () => {
    document.writeln("arrow function <br/>");
}
//arrowFunction();
/******************************************** */

//* conditional, ternary, switch-case
//* conditional
const conditional = () => {
    const number = 5;
    if (number > 0) {
        document.writeln("pozitifdir <br>");
    }
    else {
        document.writeln("negatifdir.<br>");
    }
}
//conditional();
//* ternary kullanımı

// const conditional2 = () => {
//     const number2 = -2;
//     const ternary = (number2 > 0) ? "pozitifdir <br>" : "negatifdir <br>";
//     document.writeln(ternary);
// }
// conditional2();

// //* else if
// const conditional3 = () => {
//     let number = 7;
//     if (number == 1) {
//         document.writeln("1 <br>");
//     }
//     else if (number === 2) {
//         document.writeln("2 <br>");
//     }
//     else if (number === 3) {
//         document.writeln("3 <br>");
//     }
//     else if (number === 4) {
//         document.writeln("4 <br>");
//     }
//     else if (number === 5) {
//         document.writeln("5 <br>");
//     }
//     else {
//         document.writeln("1<=SAYI<=5 dışındadır. <br>");
//     }
// }
// conditional3();

// const conditional4 = () => {
//     let number = 2
//     switch (number) {
//         case 1:
//             document.writeln("1 <br>");
//             break;
//         case 2:
//             document.writeln("2 <br>");
//             break;
//         case 3:
//             document.writeln("3 <br>");
//             break;
//         default:
//             document.writeln("1<=SAYI<=5 dışındadır. <br>");
//             break;
//     }
// }
// conditional4();
//* break : döngünün durması için kullanılır.
//* return : function çalışmaması için kullanılır.
//* continue : şart sağlandığı müddetçe çalışması için kullanılır.

//* looplar
// for, while, do-while

//exception Handling - hata yakalama
const exceptionHandlingData = () => {
    console.log("ilk satır");
    try {
        alertx("alert data");
    } catch (err) {
        console.error("Hata !!! " + err);
    } finally {
        console.log("port.close()");
    }
    console.log("son satır");
}
//exceptionHandlingData();

const setTimeOutSetInterval = () => {
    //*setTimeout
    setTimeout(() => {
        console.log("set time out 2sn")
    }, 2000);//2saniye
    //* setinterval sonsuza kadar devam ediyor
    setInterval(() => {
        console.log("setinterval ");
    }, 2000);
}
//setTimeOutSetInterval();

/**************************************** */

/***********DİZİLER********************** */
const arrayFunction = () => {
    let arr = ["Malatya", "Elazığ", 44, 23, true, false];
    console.log(arr);
    document.writeln();
}
//arrayFunction();

const arrayFunction2 = () => {
    let arr = [5,6,8,2,4,5,9,1];
    arr[4] =6;
    console.log(arr);
    console.log(arr[0]);
    console.log(arr[4]);
    document.writeln();
}
//arrayFunction2();

//*array Data set
const dataSet = () =>{
    let arr = [5,6,8,2,4,11,9,1];
    return arr;
}
//! **************************** önemli kısım ****************************
const arrayFunction3 = () => {
    let arr = dataSet();
    //console.log(arr);

    //*iterative
    for (let i = 0; i < arr.length; i++) {
        document.writeln(arr[i]);
    }
    document.writeln("<br>");

    //*in temp index değeri oluyor
    for (let temp in arr) {
        document.writeln(temp + " => " + arr[temp] + " <br/>");
    }
    //*of 
    for (let temp of arr) {
        document.writeln(temp + " <br/>");
    }
    // FOREACH
    // forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
    arr.forEach((value, index, array) =>{
        document.writeln(index + "=>" + value + "<br>");
    })
}
//arrayFunction3();

//dizilere başa ekleme/silme sona ekleme/silme 
const arrayFunction4 = () => {
    let arr= dataSet();
    //sona ekle
    arr.push(44);
    //başa ekle
    arr.unshift(23);
    //sondan sil
    arr.pop();
    //baştan sil
    arr.shift();
    //sıralama küçükten büyüğe
    arr.sort();
    console.log(arr);
    //diziyi terse çevirme
    arr.reverse();
    console.log(arr);
    //büyükten küçüğe
    arr.sort().reverse();
    console.log(arr);
    //to String
    console.log(arr.toString());
    console.log(arr.toString().substring(0,4));
    //to join elemanların arasına ekleme yapıyor
    console.log(arr.join(" "))
}
//arrayFunction4();

const arrayFunction5 = () => {
    let arr = dataSet();
    //console.log(arr);

    // FOREACH
    // forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
    arr.forEach((value, index, array) =>{
       console.log(index + "=>" + value );
    });
    console.log("filter") //filtreleme işlemi yapar
    arr.filter((value, index, array) =>{
       return value %2==0;
     }).forEach((value, index, array) =>{//yazdırmak için
        console.log(index + "=>" + value );
     });
     //map
     console.log("map");
     arr.map((value, index, array) =>{
        return value= value+10;
      }).forEach((value, index, array) =>{//yazdırmak için
         console.log(index + "=>" + value );
      });
}
//arrayFunction5();

//! *********************** OBJECT **********************

const objectData = () => {
    let person = {
        "name" : "Habib",
        "surname" : "Şako",
        "number" : "02200201011",
        isLogin : true,
        languages : ["java", "c++", "python", "js"],
        addYear : function (){
            console.log("object in Function");
        },
        javascript : {
            "name" : "JavaScript",
            "version" : "12",
           "date" : "1995",

        }
    };
    console.log(person.name);
    //farklı kullanım
    console.log(person["name"]);
    console.log(person.surname);
    console.log(person.surname.toUpperCase().substring(0,3).concat("***"));
    //objenin içinden obje çağırma
    console.log(person.javascript.version);
    //objenin içinden fonksiyon çağırma
    console.log(person.addYear());
    
    person.password="1234"
    console.log(person.password);
    console.log(person.otherProperites);

}
objectData();