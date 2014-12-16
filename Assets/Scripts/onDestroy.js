var explode : GameObject;
var onButton = false;
var buttonContact : String;
function explosion(){
	var cubeClone : GameObject = Instantiate(explode, this.transform.position, this.transform.rotation);
	
	if (onButton) {
		var button : GameObject = GameObject.Find(buttonContact);
		button.SendMessage("deadInside");
	}
}

function OnTriggerEnter(hit : Collider) {
	if (hit.tag == "button") {
		onButton = true;
		buttonContact = hit.name;
	}
}

function OnTriggerExit(hit : Collider) {
 	if (hit.tag == "button") {
	 	onButton = false;
 	}
}