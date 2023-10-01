/* DOMcelementer */



/* Opgave 1.1
Du skal finde elementet med id="redFigure" og console logge det.
Du skal finde elementet med id="yellowFigure" og console logge det. 
*/

// din kode her

var redFigure = document.getElementById("redFigure");
var yellowFigure = document.getElementById("yellowFigure");

console.log(redFigure);
console.log(yellowFigure);


/* opgave 1.2
Du skal ændre baggrundsfarve på de to elementer du har fundet i opgave 1.1
farven på elementerne skal være blå. brug evt. elelement.style.backgroundColor
*/


// din kode her
redFigure.style.backgroundColor = "blue";
yellowFigure.style.backgroundColor = "blue";



/* opgave 2.1
Du skal oprette følgende HTML elementer i Elementet med id opgaveTwo.
- et h2 med teksten: Opgave 2.1 løsning
- et p med teksten: Jeg har løst opgave 2.1
*/

let opgaveTwoElement = document.getElementById("opgaveTwo");

let nyH2 = document.createElement('h2');
nyH2.innerText = "Opgave 2.1 løsning";

let p = document.createElement('p');
p.innerText = "Jeg har løst opgave 2.1";

opgaveTwoElement.appendChild(nyH2);
opgaveTwoElement.appendChild(p);

// opgave 3 liveHTML lists
/* opgave 3.1
Du skal finde alle elementer med klassen purpleFigures og console logge resultatet
*/

let purpleFigures = document.getElementsByClassName('purpleFigures');


// din kode her


/* opgave 3.2
Du skal finde alle elementer med klassen purpleFigures og bruge array.from() til at konvertere listen
til et array hvor du kan bruge map funktionen til at ændre baggrundsfarven til rød.
array.from beskrivelse HER: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
*/

// din kode her

var purpleFiguresArray = Array.from(purpleFigures);

purpleFiguresArray.map(function(element) {
    element.style.backgroundColor = "red";
});

/* opgave 3.3
Brug din array til at ændre h3 elementets, inden i purpleFigures, tekst til RED. du kan bruge
myElement.children[0].innerHTML til at ændre 1. child elements inner html.
*/


// din kode her
purpleFiguresArray.map(function(element) {
    element.style.backgroundColor = "red";
    
    // Find h3-elementet inde i det aktuelle purpleFigures-element og ændr teksten til "RED"
    var h3Element = element.children[0];
    h3Element.innerHTML = "RED";
});


/* opgave 4
opret DOM elementer i elementet med id opgaveFour, udfra data objectet myData.
Du skal vælge element tags der giver mening i forbindelse med HTML5 semantisk tagging.
Fyld dine elementers innerHtML eller andre atributter med dine data
*/

const myData = {
    name: 'tiger',
    image: 'assets/img/standard_tiger.jpg',
    description: 'En tiger er et stort, katteagtig rovdyr med orange og sort striber i pelsen og skarpe tænder og kløer.'
};


// din kode her
var opgaveFourElement = document.getElementById("opgaveFour");
var articleElement = document.createElement('article');
var h2Element = document.createElement('h2');
h2Element.textContent = myData.name;
var imgElement = document.createElement('img');
imgElement.setAttribute('src', myData.image);
imgElement.setAttribute('alt', myData.name);
var pElement = document.createElement('p');
pElement.textContent = myData.description;
articleElement.appendChild(h2Element);
articleElement.appendChild(imgElement);
articleElement.appendChild(pElement);
opgaveFourElement.appendChild(articleElement);




