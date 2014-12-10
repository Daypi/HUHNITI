var level : GameObject;
var player : GameObject;
function OnTriggerEnter (collision : Collider) {
	var pos : Vector3 = this.transform.position;
	if (collision.gameObject.tag == "Player"){
		//player.transform.parent = level.transform;
		level.transform.RotateAround (Vector3.zero, Vector3.right,180);
		
		//level.transform.localEulerAngles = new Vector3(180,0,0);
		//level.transform.Rotate(180,0,0);//Vector3.right * 180);
		
		/*level.transform.localEulerAngles.x = 180;
		level.transform.localEulerAngles.y = 0;
		level.transform.localEulerAngles.z = 0;*/
		
		/*level.transform.rotation = Quaternion.AngleAxis(180, Vector3.right);*/
		
		//player.transform.position = pos;
		yield;
		player.transform.position = pos;
		player.SendMessage("stopMovement");
		//player.transform.parent = null;
	}
}