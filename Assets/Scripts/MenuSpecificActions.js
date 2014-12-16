var action : String = "Quitter";
var i = 0;

function OnMouseUp() {
     if (action == "Quitter")
     	Application.Quit();
     else if (action == "ShowLevels")
     {
     	i = 0;
     	while (i < 7)
     	{
     		GameObject.Find("LevelList").transform.GetChild(i).gameObject.SetActive(true);
     		i++;
     	}
     	i = 0;
     	while (i < 3)
     	{
     		GameObject.Find("MainMenu").transform.GetChild(i).gameObject.SetActive(false);
     		i++;
     	}
     }
	else if (action == "BackToMain")
    {
     	i = 0;
     	while (i < 7)
     	{
     		GameObject.Find("LevelList").transform.GetChild(i).gameObject.SetActive(false);
     		i++;
     	}
     	i = 0;
     	while (i < 3)
     	{
     		GameObject.Find("MainMenu").transform.GetChild(i).gameObject.SetActive(true);
     		i++;
     	}
    }	
     else if (action == "Resume")
     	GameObject.Find("First Person Controller").SendMessage("unPause");
     else
     	Application.LoadLevel(action);
}

@script RequireComponent (AudioSource)