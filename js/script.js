// arrey con tutte le email del database

var users = ["aaaaa@hotmail.it", "bbbb@libero.it", "ccccc@gmail.com", "dddddd@virgilio.it"];

// collego tutti gli id
var btnVerificaEmail = document.getElementById("verifica-email");
var btnAddEmail = document.getElementById("aggiungi-email")
var message = document.getElementById("message");
var findEmail = document.getElementById("find-email")
var ghost = document.getElementById("display")
var game = document.getElementById("game")
var hello= document.getElementById("welcome")
findEmail = findEmail.value

// aggiungere nuovo utente
btnAddEmail.addEventListener("click",
function (){
        var newUser = prompt("");
        users.push(newUser);
})

//  click

btnVerificaEmail.addEventListener("click",
function (){

//  email non trovata

    message.innerHTML = "Email non registrata. Crea un nuovo utente"; //messaggio email non trovata
    message.className = "red"; //evidenzio scritta

//  ricerca email
    for (var i = 0; i < users.length ; i++) {
      if (users[i] == findEmail){  //se trovi l'email
        hello.innerHTML = "Benvenuto " + findEmail; //scrivi nella nuova pagina benvenuto e email
        ghost.className = " hidden"; //togli tutto il contenuto precedente
        game.className = " row"; // attiva il contenuto del cantainer game
      }
    }
})


// gioco dadi
