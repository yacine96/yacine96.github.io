        
/* Ici la fonction traitant les requetes du TP1*/

var formElt = document.querySelector("form");
formElt.addEventListener("submit", function (e) {
    e.preventDefault();
    var nomProfil = formElt.elements.profil.value;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = this.responseText;
            var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
            document.getElementById("demo").innerHTML = jsonPretty;
        }
    };
    var nomProfil=formElt.elements.profil.value;
    xmlhttp.open("GET", "https://bitcoin.mubiz.com/"+nomProfil, true);
    xmlhttp.send();
    
});

/*Essai de code d'une des fonctions correspondant à la requete Block Hash mais elle ne fonctionne pas très bien*/

function afficheBlockhash(){
var formElt = document.querySelector("form");
formElt.addEventListener("submit", function (e) {
    e.preventDefault();
    var blockhash = formElt.elements.inputBlock.value;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = this.responseText;
            var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
            document.getElementById("demo1").innerHTML = jsonPretty;
        }
    };
    var nomProfil=formElt.elements.inputBlock.value;
    xmlhttp.open("GET", "https://bitcoin.mubiz.com/block_hash/"+blockhash, true);
    xmlhttp.send();
    
});
}

