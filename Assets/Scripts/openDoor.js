﻿var door : GameObject;
private var openInt : int = 0;
function OnTriggerEnter (collision : Collider) {
	if (openInt == 0)
		{
			door.transform.animation.PlayQueued("open_door", QueueMode.CompleteOthers);
		}
	openInt++;
}

function OnTriggerExit (collision : Collider) {
	if (openInt == 1)
		door.transform.animation.PlayQueued("close_door", QueueMode.CompleteOthers);
	openInt--;
}