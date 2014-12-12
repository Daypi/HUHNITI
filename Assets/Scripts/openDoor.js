var door : GameObject;
private var open : int = 0;
function OnTriggerEnter (collision : Collider) {
	if (open == 0)
		door.transform.animation.Play("open_door");
	open++;
}

function OnTriggerExit (collision : Collider) {
	if (open == 1)
		door.transform.animation.Play("close_door");
	open--;
}