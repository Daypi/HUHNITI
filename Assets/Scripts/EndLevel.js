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
	GameObject.Find("FadeInOut").animation.Play("FadeOutLeaveLevel");
	yield WaitForSeconds(1);
	Application.LoadLevel(nextLevel);
}