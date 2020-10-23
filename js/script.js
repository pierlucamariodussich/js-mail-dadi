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
        hello.innerHTML =  " " + findEmail; //scrivi nella nuova pagina benvenuto e email
        ghost.className = " hidden"; //togli tutto il contenuto precedente
        game.className = " row"; // attiva il contenuto del cantainer game
      }
    }
})


// gioco dadi

var meDice = document.getElementById("me-dice");
var cDice = document.getElementById("computer-dice");
var result = document.getElementById("result");

// effetti risultati

var mLight = document.getElementById("me-light");
var cLight = document.getElementById("c-light");

// collego immagini ai risultati
var cUno = document.getElementById("c-uno");
var cDue = document.getElementById("c-due");
var cTre = document.getElementById("c-tre");
var cQuattro = document.getElementById("c-quattro");
var cCinque = document.getElementById("c-cinque");
var cSei = document.getElementById("c-sei");

var mUno = document.getElementById("me-uno");
var mDue = document.getElementById("me-due");
var mTre = document.getElementById("me-tre");
var mQuattro = document.getElementById("me-quattro");
var mCinque = document.getElementById("me-cinque");
var mSei = document.getElementById("me-sei");

// bottone

var btnStart = document.getElementById("start");

btnStart.addEventListener("click",
function (){

  var meDice = (Math.floor(Math.random()* 6) + 1);
  var cDice = (Math.floor(Math.random()* 6) + 1);

  // collego le immagini
  if (meDice == 1){
    mUno.className = "dado ";
    mDue.className = "dado hidden";
    mTre.className = "dado hidden ";
    mQuattro.className = "dado hidden";
    mCinque.className = "dado hidden";
    mSei.className = "dado hidden";
  } else if  ( meDice == 2){
    mUno.className = "dado hidden";
    mDue.className = "dado ";
    mTre.className = "dado hidden ";
    mQuattro.className = "dado hidden";
    mCinque.className = "dado hidden";
    mSei.className = "dado hidden";
  } else if  (meDice == 3){
    mUno.className = "dado hidden";
    mDue.className = "dado hidden";
    mTre.className = "dado ";
    mQuattro.className = "dado hidden";
    mCinque.className = "dado hidden";
    mSei.className = "dado hidden";
  } else if  (meDice == 4){
    mUno.className = "dado hidden";
    mDue.className = "dado hidden";
    mTre.className = "dado hidden ";
    mQuattro.className = "dado ";
    mCinque.className = "dado hidden";
    mSei.className = "dado hidden";
  } else if  (meDice == 5){
    mUno.className = "dado hidden";
    mDue.className = "dado hidden";
    mTre.className = "dado hidden ";
    mQuattro.className = "dado hidden";
    mCinque.className = "dado ";
    mSei.className = "dado hidden";
  } else  {
    mUno.className = "dado hidden";
    mDue.className = "dado hidden";
    mTre.className = "dado hidden ";
    mQuattro.className = "dado hidden";
    mCinque.className = "dado hidden";
    mSei.className = "dado ";
  }

  if (cDice == 1){
    cUno.className = "dado";
    cDue.className = "dado hidden";
    cTre.className = "dado hidden";
    cQuattro.className = "dado hidden";
    cCinque.className = "dado hidden";
    cSei.className = "dado hidden";
  } else if (meDice == 2){
    cUno.className = "dado hidden";
    cDue.className = "dado ";
    cTre.className = "dado hidden";
    cQuattro.className = "dado hidden";
    cCinque.className = "dado hidden";
    cSei.className = "dado hidden";
  } else if (meDice == 3){
    cUno.className = "dado hidden";
    cDue.className = "dado hidden";
    cTre.className = "dado ";
    cQuattro.className = "dado hidden";
    cCinque.className = "dado hidden";
    cSei.className = "dado hidden";
  } else if (meDice == 4){
    cUno.className = "dado hidden";
    cDue.className = "dado hidden";
    cTre.className = "dado hidden ";
    cQuattro.className = "dado";
    cCinque.className = "dado hidden";
    cSei.className = "dado hidden";
  } else if (meDice == 5){
    cUno.className = "dado hidden";
    cDue.className = "dado hidden";
    cTre.className = "dado hidden ";
    cQuattro.className = "dado hidden";
    cCinque.className = "dado ";
    cSei.className = "dado hidden";
  } else {
    cUno.className = "dado hidden";
    cDue.className = "dado hidden";
    cTre.className = "dado hidden ";
    cQuattro.className = "dado hidden";
    cCinque.className = "dado hidden";
    cSei.className = "dado ";
  }

// risultato

  if (meDice > cDice){
    result.innerHTML = "Hai vinto";
    mLight.className = " riquadro me-dice bg-green"
    cLight.className = " riquadro computer-dice bg-red"
    result.className = "green"

  } else if (meDice < cDice){
    result.innerHTML = "Hai perso! Ritenta";
    mLight.className = " riquadro me-dice bg-red"
    cLight.className = " riquadro computer-dice bg-green"
    result.className = "red"
  } else if (meDice === cDice){
    result.innerHTML = "Pareggio! Ritenta";
    mLight.className = " riquadro me-dice bg-green"
    cLight.className = " riquadro computer-dice bg-green"
    result.className = "normal"
  } else {
    result.innerHTML = "";
  }

})
