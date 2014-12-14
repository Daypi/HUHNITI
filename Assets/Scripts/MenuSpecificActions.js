var levelSuivant : String = "Quitter";

function OnMouseUp() {
     if (levelSuivant == "Quitter")
     	Application.Quit();
     else if (levelSuivant == "Resume")
     	GameObject.Find("First Person Controller").SendMessage("unPause");
     else
     	Application.LoadLevel(levelSuivant);
}

@script RequireComponent (AudioSource)