﻿var lockRadius : float = 2;
var lockPoint : Transform;
var forceField : Transform;
private var down : int = 0;
private var free : boolean = true;

function Start() {
	forceField.renderer.enabled = false;
}

function Update() {
if (down == 1 && !free) {
	var colliders : Collider[] = Physics.OverlapSphere (lockPoint.position, lockRadius);

	for (var hit : Collider in colliders) {
		if (hit && hit.rigidbody)
			hit.rigidbody.constraints = RigidbodyConstraints.FreezePosition | RigidbodyConstraints.FreezeRotation;
		}
	 }
}

function OnTriggerEnter (collision : Collider) {
if (collision.tag != "explosion_cube") {
	down++;
	if (down == 1) {
	var colliders : Collider[] = Physics.OverlapSphere (lockPoint.position, lockRadius);
	for (var hit : Collider in colliders) {
			if (hit && hit.rigidbody)
				hit.rigidbody.constraints = RigidbodyConstraints.FreezePosition | RigidbodyConstraints.FreezeRotation;
			}
		forceField.renderer.enabled = true;
		lockPoint.particleSystem.enableEmission = false;
		free = false;
		}
	}
}

function OnTriggerExit (collision : Collider) {
if (collision.tag != "explosion_cube") {
	down--;
	if (down == 0) {
		yield WaitForSeconds(1);
		var colliders : Collider[] = Physics.OverlapSphere (lockPoint.position, lockRadius);
		for (var hit : Collider in colliders) {
			if (hit && hit.rigidbody)
				hit.rigidbody.constraints = RigidbodyConstraints.None;
			if (hit.tag == "cannon")
				hit.rigidbody.constraints = RigidbodyConstraints.FreezeRotation;
			}
		forceField.renderer.enabled = false;
		lockPoint.particleSystem.enableEmission = true;
		free = true;
		}
	}
}

function deadInside() {
down--;
	if (down == 0) {
		yield WaitForSeconds(1);
		var colliders : Collider[] = Physics.OverlapSphere (lockPoint.position, lockRadius);
		for (var hit : Collider in colliders) {
			if (hit && hit.rigidbody)
				hit.rigidbody.constraints = RigidbodyConstraints.None;
			if (hit.tag == "cannon")
				hit.rigidbody.constraints = RigidbodyConstraints.FreezeRotation;
			}
		forceField.renderer.enabled = false;
		lockPoint.particleSystem.enableEmission = true;
		free = true;
		}
}