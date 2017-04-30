
/*
Exercice : profil GitHub
*/
function verifAdress(champ)
{
   var isAdress = /^[0-9a-zA-Z]{34}$/.test(data);
   if(!isAdress.test(champ.value))
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function verifTransacHash(champ)
{
   var isAdress = /^[0-9A-Fa-f]{64}$/.test(data);
   if(!isAdress.test(champ.value))
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}


function verifBlocHash(champ)
{
   var isAdress = /^[0-9A-Fa-f]{64}$/.test(data);
   if(!isAdress.test(champ.value))
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}


function verifBlockNum(champ)
{
   var isAdress = /^[0-9]{6}$/.test(data);
   if(!isAdress.test(champ.value))
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function verifForm(f)
{
   var adressOk = verifAdress(f.adress);
   var transacOk = verifTransacHash(f.transac);
   var blochashOk = verifBlocHash(f.blochash);
   var blocknumOk = verifBlockNum(f.blocknum);
   
   if(adressOk && transacOk && blochashOk && blocknumOk)
      return true;
   else
   {
      alert("Veuillez remplir correctement tous les champs");
      return false;
   }
}

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
