// Pobieranie elementu formularza

var formularz = document.querySelector(".search-container form");

// Ustawienie zdarzenia na formularzu
formularz.addEventListener("submit", function(e) {
// Zatrzymanie domyślnego zachowania formularza
e.preventDefault();

// Pobranie wartości z pola tekstowego
var mountainName = formularz.querySelector("input[type='text']").value;

// Przesłanie użytkownika na odpowiednią stronę
switch (mountainName.toLowerCase()) {
case "łysica":
window.location.href = "lysica.html";
break;
case "ślęża":
window.location.href = "sleza.html";
break;
case "skopiec":
window.location.href = "skopiec.html";
break;
case "kłodzka góra":
window.location.href = "klodzka_gora.html";
break;
case "chełmiec":
window.location.href = "chelmiec.html";
break;
case "biskupia kopa":
window.location.href = "biskupia_kopa.html";
break;
case "lubomir":
window.location.href = "lubomir.html";
break;
case "szczeliniec wielki":
window.location.href = "szczeliniec_wielki.html";
break;
case "czupel":
window.location.href = "czupel.html";
break;
case "waligóra":
window.location.href = "waligora.html";
break;
case "skalnik":
window.location.href = "skalnik.html";
break;
case "jagodna":
window.location.href = "jagodna.html";
break;
case "kowadło":
window.location.href = "kowadlo.html";
break;
case "lackowa":
window.location.href = "lackowa.html";
break;
case "wielka sowa":
window.location.href = "wielka_sowa.html";
break;
case "wysoka":
window.location.href = "wysoka.html";
break;
case "orlica":
window.location.href = "orlica.html";
break;
case "rudawiec":
window.location.href = "rudawiec.html";
break;
case "wysoka kopa":
window.location.href = "wysoka_kopa.html";
break;
case "mogielica":
window.location.href = "mogielica.html";
break;
case "skrzyczne":
window.location.href = "skrzyczne.html";
break;
case "radziejowa":
window.location.href = "radziejowa.html";
break;
case "turbacz":
window.location.href = "turbacz.html";
break;
case "tarnica":
window.location.href = "tarnica.html";
break;
case "śnieżnik":
window.location.href = "snieznik.html";
break;
case "śnieżka":
window.location.href = "sniezka.html";
break;
case "babia góra":
window.location.href = "babia_gora.html";
break;
case "rysy":
window.location.href = "rysy.html";
break;
case "wykaz szczytów":
window.location.href = "wykaz_szczytow.html";
break;
case "strona domowa":
window.location.href = "strona_domowa.html";
break;
case "o koronie gór polski":
window.location.href = "o_koronie_gor_polski.html";
break;
case "historia":
window.location.href = "historia.html";
break;
case "zasady zdobycia":
window.location.href = "zasady_zdobycia.html";
break;
case "galeria":
window.location.href = "galeria.html";
break;
case "kontakt":
window.location.href = "kontakt.html";
break;

// Tutaj trzeba dodać pozostałe szczyty i ich adresy
// W przypadku braku strony dla danego szczytu
default:
alert("Nie znaleziono strony dla tego szczytu");
}
});

/*var strona = document.getElementById("search").value;
function szukaj(){
	switch(strona.toLowerCase()){
		case "łysica":
		window.location.href = "lysica.html";
		break;
		default:
	alert("Nie znaleziono strony dla tego szczytu");
	}
}*/