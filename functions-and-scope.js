// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];
const cumLaude = [];

/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6

// 1. Write a for loop that runs through grades.length.
// 2. IF function to select all numbers >= 8.
// 3. push the number >= 8 to another array. Create an empty array to receive.

// for (const grade of grades) {
//     if (grade >= 8){
//         cumLaude.push(grades[grade]);
//     }
//     console.log(cumLaude);
// }
//
// console.log(cumLaude.length);  // 6 Cum Laude members.

for (let i = 0;i < grades.length; i++){
    if (grades[i] >= 8){
        cumLaude.push(grades[i]);
    }
}

// console.log(cumLaude);
const numberOfCumLaude = cumLaude.length;
console.log(numberOfCumLaude);


/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3

// STAPPENPLAN //

// 1. allows input via parameter
// 2. check input whether above or equal to 8
// 3. Return number of cum laude students


function checkGrades(numbers) {
    let cumLaudes = [];
    let cumLaudes2 = [];

    // in de loop gebruiken we geen return, want we willen alles afgaan
    for(let i = 0; i < grades.length; i++) {
        if (grades[i] >= 8) {
            cumLaudes.push(grades[i]);
        }
    }
    for (let j = 0; j <numbers.length; j++){
        if (numbers[j] >= 8) {
            cumLaudes2.push(numbers[j]);
        }
    }

    // als de loop klaar is, dan returnen we hoeveel hoge cijfers we hebben verzameld:
    return cumLaudes.length;
    return cumLaudes2.length;
}

console.log(checkGrades(grades));
console.log(checkGrades([6,4,5])); // DIT WERKT NIET! SEND HELP.



// function checkGrades(input) {
//     let cumLaudes = [];
//
//     // in de loop gebruiken we geen return, want we willen alles afgaan
//     for(let i = 0; i < grades.length; i++) {
//         if (grades[i] >= 8) {
//             cumLaudes.push(grades[i]);
//         }
//     }
//     for (let j = 0; j <input.length; j++){
//         if (input[j] >= 8) {
//
//         }
//     }
//
//     // als de loop klaar is, dan returnen we hoeveel hoge cijfers we hebben verzameld:
//     return cumLaudes.length;
// }


// console.log(showCumLaude(8,9,2,6,6,7,8,9));
// console.log(showCumLaude(grades));
// console.log(showCumLaude([6,4,5]));




/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6.642857142857143

//STAPPENPLAN //

// 1. We need to add up all the arrays in the function and divide by number of individual array items
// 2. We use grades.length to ensure all are included

const sum = 0;

const sumUp = grades.reduce(function (a,b){
    return a + b;
})

console.log(sumUp);

const divideBy = (sumUp) => {
    return sumUp;
}

const division = sumUp/grades.length;
console.log(division);


/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// Verwachte uitkomsten:
//averageGrade(grades) geeft 6.642857142857143
//averageGrade([6, 4, 5]) geeft xxxx
//averageGrade([8, 9, 4, 6, 10]) geeft xxxx

//Het lukt mij helaas niet met het maken van een functie die werkt voor verschillende scenarios. Net zoals 1b.






/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!

const divisionSolution = console.log(division.toFixed(2));



/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 9

// STAPPENPLAN
// 1. FOR LOOP THAT RUNS THROUGH ARRAY.
// 2. IF statement saying if next array item is greater, push that to another empty array.
// 3. push highest number to the empty array somehow.

// const highestNumber = [];








/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10
