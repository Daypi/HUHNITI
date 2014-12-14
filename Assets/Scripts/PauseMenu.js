var paused = false;
var MouseLookScript = "MouseLook.cs";
var yRotation;

function Start () {
    
}

function Update () {
	//if escape key is pressed, go back to menu
	if (Input.GetKeyDown(KeyCode.Escape))
	{
		if (!paused)
		{
			paused = true;
			Time.timeScale = 0;
			yRotation = transform.rotation;
			GameObject.Find("Main Camera").SendMessage("BlockCamera");
			GameObject.Find("Main Camera").transform.parent = null;
			//show 
			GameObject.Find("PauseMenu").transform.GetChild(0).gameObject.SetActive(true);
			GameObject.Find("PauseMenu").transform.GetChild(1).gameObject.SetActive(true);
			GameObject.Find("PauseMenu").transform.GetChild(2).gameObject.SetActive(true);
		}
		else
		{
			unPause();
		}
	}
	
}

function unPause()
{
	paused = false;
	Time.timeScale = 1;
	transform.rotation = yRotation;
	GameObject.Find("Main Camera").transform.parent = this.transform;
	GameObject.Find("Main Camera").SendMessage("UnblockCamera");
	GameObject.Find("PauseMenu").transform.GetChild(0).gameObject.SetActive(false);
	GameObject.Find("PauseMenu").transform.GetChild(1).gameObject.SetActive(false);
	GameObject.Find("PauseMenu").transform.GetChild(2).gameObject.SetActive(false);

}