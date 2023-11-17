// Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito. Infine scrivi sulla pagina nomecognomecolorepreferito23.

// chiedere all'utente il suo nome
let userName = prompt("Inserisci il tuo nome");
// console.log(userName);


// chiedere all'utente il suo cognome
let userSurname = prompt("Inserisci il tuo cognome");
// console.log(userSurname);

// chidere all'utente il suo colore preferito
let favColor = prompt("Inserisci il tuo colore preferito");
// console.log(favColor);

// risultato della password
const userPassword = userName + userSurname + favColor + 23
// console.log(userPassword); 

document.getElementById("my_text").innerHTML = 'Ecco la tua password ' + userPassword

