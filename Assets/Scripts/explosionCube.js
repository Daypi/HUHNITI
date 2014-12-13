var radius = 5.0;
var power = 10.0;
var body : GameObject;
function Start(){
	var explosionPos : Vector3 = transform.position;
	var i = 0;
	var colliders : Collider[] = Physics.OverlapSphere (explosionPos, radius);
	for (var hit : Collider in colliders) {
		if (hit && hit.rigidbody && hit.transform.tag == "explosion_cube")
			hit.rigidbody.AddExplosionForce(power, explosionPos, radius, 3.0);
	}
	for (i = 0; i < 6; i++) {
		yield WaitForSeconds(0.4);
		for (var hit : Collider in colliders) {
			if (hit && hit.rigidbody && hit.transform.tag == "explosion_cube")
				hit.transform.renderer.enabled = false;
		}
		yield WaitForSeconds(0.1);
		for (var hit : Collider in colliders) {
			if (hit && hit.rigidbody && hit.transform.tag == "explosion_cube")
				hit.transform.renderer.enabled = true;
		}
	}
	//this.transform.animation.Play();
	//yield WaitForSeconds(3);
	Destroy(body);
}