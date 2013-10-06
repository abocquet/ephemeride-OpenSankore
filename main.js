//Variables de référence

var jours = [
	"Dimanche",
	"Lundi",
	"Mardi",
	"Mercredi",
	"Jeudi",
	"Vendredi",
	"Samedi"
];

var mois = [
	"Janvier",
	"Février",
	"Mars",
	"Avril",
	"Mai",
	"Juin",
	"Juillet",
	"Aout",
	"Septembre",
	"Octobre",
	"Novembre",
	"Décembre"
];

/*---------------------------------*/
//Fonctions de référence

Date.prototype.addDays = function(days){
    this.setDate(this.getDate() + days);
};

function pickQuote(){

	var index = Math.floor(Math.random() * quotes.length) ;
	return quotes[index][0] + "<span class='author'>" + quotes[index][1] + "</span>";

}

function refreshDate(vue, date)
{
	vue.jourSemaine.textContent = jours[date.getDay()];
	vue.jourAnnee.textContent = date.getDate();
	vue.mois.textContent = mois[date.getMonth()];
	vue.annee.textContent = date.getFullYear();

	// vue.morale.innerHTML = pickQuote();
}

/*---------------------------------*/
//Compote et liqueure de frelons ne font du bien qu'à cupidon

var vue = {

	jourSemaine: document.querySelector("#jourSemaine"),
	jourAnnee: document.querySelector("#jourAnnee"),
	mois: document.querySelector("#mois"),
	annee: document.querySelector("#annee"),
	// morale: document.querySelector("#morale")
};

var date = new Date();

var buttons = {

	previous: document.querySelector("#previous"),
	next: document.querySelector("#next")

};

previous.onclick = function(){

	date.addDays(-1);
	refreshDate(vue, date);

};

next.onclick = function(){

	date.addDays(1);
	refreshDate(vue, date);

};

refreshDate(vue, date);