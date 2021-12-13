const bouton = document.getElementById("continuer");

const code_secret = "586";

bouton.addEventListener('click', () =>{
    let saisie = document.getElementById("zone_de_saisie").value;
    if(saisie == code_secret)
    {
        location.replace('ily.html');
    }
    else{
        document.getElementById("saisir").innerHTML = "Le mot de passe est incorrect <3";
        document.getElementById("saisir").style.color = 'red';
    }
});


//<>|