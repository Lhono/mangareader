$(document).ready(function() {
    initPage();
});

function initPage()
{
	var manga = getUrlParameter("manga");
	var tome = intToInt3(getUrlParameter("tome"));
	var page = intToInt3(getUrlParameter("page"));
	console.log(manga + " - Tome " + tome + " - Page " + page);
	var url = "http://funquizzes.fun//uploads/manga/" + manga + "/Chapitres/" + tome + "/" + page + ".jpg";
	console.log(url);
	$('.scan-page').load('https://scan-op.com/manga/berserk/7');
	$('.scan').attr('src', url);
}

function intToInt3(numero)
{
	if(numero.length == 1)
		return '00' + numero;
	else if(numero.length == 2)
		return '0' + numero;
	else
		return numero;
}

function nextPage()
{

}

function previousPage()
{

}

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};