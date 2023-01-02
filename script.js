// Exercises XP Ninja


// Exercise 1 : Age Difference

// 1. Étant donné les années de naissance de deux personnes, trouvez la date à laquelle la plus jeune a exactement la moitié de l'âge de la plus âgée.
let annee_1 = 1995
let annee_2 = 2005
let cherche
// LA FORMULE DE CALCULE: cherche - annee_2 = (cherche - annee_1) / 2
cherche = 2 * annee_2 - annee_1
console.log(`La date est: ${cherche}`)


// Exercise 2 : Codes Postaux
// Exercice plus
// Premiere partie : sans expressions régulières
let zipCode = prompt("Entre votre code postal: ")
if (!isNaN(zipCode) && Number(zipCode) <= 99999 && zipCode.trim() == zipCode && zipCode.length == 5)
    console.log("Reussir")
else
    console.log("Echec")

// Part 2 : avec expressions régulières
let regex = /^(\d){5}$/
if (regex.test(zipCode))
    console.log("Reussir")
else
    console.log("Echec")


// Exercise 3 : Mot Secret
// Exercice plus
// 1. Invitez l'utilisateur à saisir un mot et enregistrez-le dans une variable.
let word = prompt("Entre un mot svp: ")
// 2. Supprimez toutes les voyelles du mot et console.logez le résultat.
console.log(word.replace(/[aeiouy]/ig, ''))
// Bonus : Remplacez les voyelles par un autre caractère et console.logez le résultat
let word2 = word.replace(/a/ig, '1')
                .replace(/e/ig, '2')
                .replace(/i/ig, '3')
                .replace(/o/ig, '4')
                .replace(/u/ig, '5')
console.log(word2)
