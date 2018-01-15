document.addEventListener('keypress', function(e){
	var touche = String.fromCharCode(e.charCode); // Récupération de la touche
	touche = touche.toUpperCase(); // Pour gérer indifféremment minuscules et majuscules
	

	if (touche == 'R') {

		// appliquer le changement de couleur de fond à toutes les div
		var listDiv = document.getElementsByTagName('div');
		for (var i = 0; i < listDiv.length; i++) {
			listDiv[i].style.backgroundColor = 'red';
		}

	}

	else {
		alert(touche + ' n\'est pas une touche gérée');
	}

})