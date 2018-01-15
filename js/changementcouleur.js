document.addEventListener('keypress', function(e){
	var touche = String.fromCharCode(e.charCode); // Récupération de la touche
	touche = touche.toUpperCase(); // Pour gérer indifféremment minuscules et majuscules
	var couleur = "";
	switch (touche) // associer chaque touche à une couleur
	{
		case 'R':
			couleur = 'red';
			break;
		case 'J':
			couleur = 'yellow';
			break;
		case 'V':
			couleur = 'green';
			break;
		case 'B':
			couleur = 'blue';
			break;
		default:
			alert(touche + ' n\'est pas une touche gérée');
	}
	// appliquer le changement de couleur de fond à toutes les div
	var listDiv = document.getElementsByTagName('div');
	for (var i = 0; i < listDiv.length; i++) {
		listDiv[i].style.backgroundColor = couleur;
	}
})