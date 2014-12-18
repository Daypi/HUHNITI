#pragma strict
var couleurEntrer : Color = Vector4(183, 184, 127, 255);
var couleurSortie : Color = Vector4(199, 199, 199, 255);
var tailleEntrer : float = 45;
var tailleSortie : float = 45;
var son : AudioClip;

function Start()
{
	guiText.material.color = couleurSortie;
	guiText.fontSize = tailleSortie;
}

function OnMouseEnter() {
	audio.PlayOneShot(son);
    guiText.material.color = couleurEntrer;
    guiText.fontSize = tailleEntrer;
}
function OnMouseExit() {
    guiText.material.color = couleurSortie;
    guiText.fontSize = tailleSortie;
}