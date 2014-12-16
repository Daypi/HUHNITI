var forceField : Transform;
private var down : int = 0;

function OnTriggerEnter (collision : Collider) {
if (collision.tag != "explosion_cube") {
	down++;
	if (down == 1) {
		forceField.renderer.enabled = false;
		forceField.collider.enabled = false;
		}
	}
}

function OnTriggerExit (collision : Collider) {
if (collision.tag != "explosion_cube") {
	down--;
	if (down == 0) {
		yield WaitForSeconds(0.3);
		forceField.renderer.enabled = true;
		forceField.collider.enabled = true;
		}
	}
}

function deadInside() {
down--;
	if (down == 0) {
		yield WaitForSeconds(0.3);
		forceField.renderer.enabled = true;
		forceField.collider.enabled = true;
		}
}