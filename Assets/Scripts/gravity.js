var plane : GameObject;
var pullRadius = 2;
var pullForce = 5;
function OnTriggerEnter (collision : Collider) {
	if (collision.gameObject.tag == "Player"){
	//Physics.gravity = new Vector3(0,9.81f,0);
	var hitColliders = Physics.OverlapSphere(plane.transform.position, pullRadius);
	var forceDirection : Vector3;
	var mode: ForceMode = ForceMode.Acceleration;
	for (var i = 0; i < hitColliders.Length; i++) {
		//forceDirection = plane.transform.position - hitColliders[i].transform.position;
		if (hitColliders[i].tag != "wall" && hitColliders[i].tag != "Player") {
				if (hitColliders[i].rigidbody.useGravity == true){//hitColliders[i].rigidbody.useGravity == true) {
    		 			hitColliders[i].rigidbody.useGravity = false;
    		 		    hitColliders[i].constantForce.enabled = true;
						hitColliders[i].constantForce.force = Vector3.up;
    		 		}
    		 		else {
	    		 		hitColliders[i].rigidbody.useGravity = true;
    			 		hitColliders[i].constantForce.enabled = false;
    		 		}
    		 	//hitColliders[i].rigidbody.AddForce(0, pullForce,0, mode);//forceDirection.normalized * pullForce * Time.fixedDeltaTime);
    		}
    		
    		if (hitColliders[i].tag == "Player")
    		{
    			hitColliders[i].SendMessage("reverseGravity");
    		}
		}
	
	}
}