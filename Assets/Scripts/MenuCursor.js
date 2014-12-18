var curseur : Texture2D;
var mainMenu = false;

function Start() {
    Screen.showCursor = false; 
}

function OnGUI() {
	if (Time.timeScale == 0 || mainMenu)
	{
		var positionSouris : Vector3 = Input.mousePosition;
    	var positionCurseur : Rect = Rect(positionSouris.x,Screen.height - positionSouris.y,curseur.width,curseur.height);
    	GUI.Label(positionCurseur,curseur);
	}
}