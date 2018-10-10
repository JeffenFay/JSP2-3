//déclaration de variable lastname pour l'évènement
var lastname = document.getElementById("lastname");
//Ajout de l'écouteur d'évènement keydown pour écouter l'appui de touches
lastname.addEventListener("keydown", function( event ) {
  //Variable de mise à jour de saisie
  var lastnameInput = document.getElementById("lastname");
  //Affichage de la saisie
  alert(lastnameInput.value);
}, true);
