let a
let b
let c
let prepona
let odvesna1
let odvesna2
function pythagor(){
    prepona = document.getElementById("prepona").value;
    odvesna1 = document.getElementById("odvesna1").value;
    odvesna2 = document.getElementById("odvesna2").value;

    if(!odvesna1 && !odvesna2 && !prepona|| !odvesna1 && !odvesna2 || !odvesna2 && !prepona || !odvesna1 && !prepona){
        alert("Chybí hodnoty.");
    }
    if(odvesna1 !== "" && odvesna2 !== "" && prepona !== ""){
        alert("Odstraňte hodnotu, kterou chcete vypočítat.");
    }
    else{
        if(!prepona){
            a = odvesna1 * odvesna1;
            b = odvesna2 * odvesna2;
            c = a + b;
            prepona = Math.sqrt(c);
            prepona = Math.round(prepona * 1000) / 1000;
            document.getElementById("prepona").setAttribute("value", prepona);
        }
        if(!odvesna1){
            c = prepona * prepona;
            b = odvesna2 * odvesna2;
            a = c - b;
            odvesna1 = Math.sqrt(a);
            odvesna1 = Math.round(odvesna1 * 1000) / 1000;
            document.getElementById("odvesna1").setAttribute("value", odvesna1);
        }
        if(!odvesna2){
            c = prepona * prepona;
            b = odvesna1 * odvesna1;
            a = c - b;
            odvesna2 = Math.sqrt(a);
            odvesna2 = Math.round(odvesna2 * 1000) / 1000;
            document.getElementById("odvesna2").setAttribute("value", odvesna2);
        }
    }
}

let firstUnit
let secUnit
let firstUnitNumber
let secUnitNumber
let firstValue
let secValue
let value
const length = ["cm", "m", "mm"];
const weight = ["g", "kg", "t"];
const velocity = ["kmh", "ms"];
function unitTransfer(){

    firstUnit = document.getElementById("firstUnit").value;
    secUnit = document.getElementById("secUnit").value;
    firstUnitNumber = document.getElementById(firstUnit + "A").getAttribute("name");
    secUnitNumber = document.getElementById(secUnit + "B").getAttribute("name");
    firstValue = document.getElementById("firstValue").value;

    if(length.includes(firstUnit) == true && length.includes(secUnit)  == true || weight.includes(firstUnit) == true && weight.includes(secUnit) == true || velocity.includes(firstUnit) == true && velocity.includes(secUnit) == true){

        value = firstValue * firstUnitNumber;
        secValue = value * secUnitNumber;
        secValue = Math.round(secValue * 100000) / 100000;
        document.getElementById("secValue").setAttribute("value", secValue);
        console.log(secValue);
    }else{
        alert("Špatné jednotky převodu.");
    }
}

const pi = 3.14159265359;
let obsah;
let obvod;
let polomer;
function kruh(){
    polomer = document.getElementById("polomer").value;
    obvod = document.getElementById("obvod").value;
    obsah = document.getElementById("obsah").value;

    if(!obvod && !obsah && !polomer){
        alert("Chybí hodnoty.");
    }
    if(obvod && obsah && polomer){
        alert("Odstraňte hodnotu, kterou chcete vypočítat.");
    }
    else {
        if (polomer) {
            obvod = 2 * polomer * pi;
            obvod = Math.round(obvod * 100000) / 100000;
            document.getElementById("obvod").setAttribute("value", obvod);

            obsah = polomer * polomer * pi;
            obsah = Math.round(obsah * 100000) / 100000;
            document.getElementById("obsah").setAttribute("value", obsah);
        }
        if (obsah) {
            polomer = obsah / pi;
            polomer = Math.sqrt(polomer);
            polomer = Math.round(polomer * 100000) / 100000;
            document.getElementById("polomer").setAttribute("value", polomer);

            obvod = 2 * polomer * pi;
            obvod = Math.round(obvod * 100000) / 100000;
            document.getElementById("obvod").setAttribute("value", obvod);
        }
        if (obvod) {
            polomer = obvod / pi / 2;
            polomer = Math.round(polomer * 100000) / 100000;
            document.getElementById("polomer").setAttribute("value", polomer);
            obsah = polomer * polomer * pi;
            obsah = Math.round(obsah * 100000) / 100000;
            document.getElementById("obsah").setAttribute("value", obsah);

        }
    }
}
