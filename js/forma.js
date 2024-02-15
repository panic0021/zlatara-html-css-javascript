function validacijaForme() {
    var ime = document.getElementById('ime').value;
    var prezime = document.getElementById('prezime').value;
    var radioButtons = document.getElementsByName('izbor');
    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            var pitanje = radioButtons[i].value;
            break;
        }
    }
    var checkboxes = document.getElementsByName('odgovor');
    var odgovor=[];
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            odgovor = checkboxes[i].value + ' | ' + odgovor;
        }
    }

    var poruka=document.getElementById('poruka').value;
    var placanje=document.getElementById('kartica').value;
    alert('Ime:' + ime + ' Prezime: ' + prezime + '\n Pitanje je vezano za: ' + pitanje + '\nKorisnik želi da mu odgovor stigne na: ' + odgovor+'\nPoruka:\n'+poruka+'\nNačin plaćanja: '+placanje);
}

function provera(){
    var ime=document.getElementById('ime').value;
    var prezime=document.getElementById('prezime').value;
    ime=ime.trim();
    prezime=prezime.trim();
    if(ime[0].toUpperCase()!=ime[0]){
        alert('Mora veliko slovo pocetno slovo imena!');
        return false;
    }
    if(prezime[0].toUpperCase()!=prezime[0]){
        alert('Mora veliko slovo pocetno slovo prezimena!');
        return false;
    }
    var radioButtons = document.getElementsByName('izbor');
    var postoji=false;
    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            postoji=true;
            break;
        }
    }
    if(!postoji){
        alert('Morate izabrati neku opciju!');
        return false;
    }
    return true;
}

function funkcijaForme(){
    if(provera()){
        validacijaForme();
   }
}