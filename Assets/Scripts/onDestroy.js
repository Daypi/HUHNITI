var explode : GameObject;
private var quitting : boolean = false;

function OnApplicationQuit(){
	quitting = true;
}

function OnLevelWasLoaded() {
	quitting = true;
}

function OnDestroy() {
	if (!quitting)
		var cubeClone : GameObject = Instantiate(explode, this.transform.position, this.transform.rotation);
}