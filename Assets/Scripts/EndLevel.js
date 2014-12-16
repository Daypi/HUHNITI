#pragma strict
var nextLevel = "Menu";

function Start () {
	//when a scene is loaded, fade from black
	GameObject.Find("FadeInOut").animation.Play("FadeOutEnterLevel");
}

function Update () {

}

function OnTriggerStay()
{
	if (nextLevel == "Finish")
	{
		yield WaitForSeconds(14);
		GameObject.Find("FadeInOut").animation.Play("FadeOutLeaveLevel");
		yield WaitForSeconds(1);
		audio.Play();
		Application.LoadLevel("Menu");
	}
	else
	{
		GameObject.Find("FadeInOut").animation.Play("FadeOutLeaveLevel");
		audio.Play();
		yield WaitForSeconds(1);
		Application.LoadLevel(nextLevel);
	}
}