var level : GameObject;
var player : GameObject;
function OnTriggerEnter (collision : Collider) {
	var pos : Vector3 = this.transform.position;
	//var tr : Transform = player.getComponent(Transform);
	if (collision.gameObject.tag == "Player"){
		player.transform.parent = level.transform;
		//level.transform.RotateAround (Vector3.zero, Vector3.right,180);
		//level.transform.RotateAround(level.collider.bounds.center, Vector3.right, 180);
		//level.transform.localEulerAngles = new Vector3(180,0,0);
		//player.SendMessage("stopMovement");
		level.transform.Rotate(Vector3.right * 180);
		//player.SendMessage("ResumeMovement");

		/*level.transform.localEulerAngles.x = 180;
		level.transform.localEulerAngles.y = 0;
		level.transform.localEulerAngles.z = 0;*/
		
		//yield;
		/*level.transform.rotation = Quaternion.AngleAxis(180, Vector3.right);*/
		player.transform.position.y = player.transform.position.y - 2;
		//player.transform.Rotate(Vector3.forward * 180 * Time.deltaTime);
		//player.transform.position = pos;
		//yield;
		player.transform.parent = null;
		//player.transform.position = pos;
		
		player.SendMessage("reverseGravity");
	}
}