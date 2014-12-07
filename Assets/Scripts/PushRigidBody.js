#pragma strict

var pushPower = 0.5;

function OnControllerColliderHit (hit : ControllerColliderHit)
{
var body : Rigidbody = hit.collider.attachedRigidbody;

if (body == null || body.isKinematic)
	return;

if (hit.moveDirection.y < -0.3)
	return;
	
	var controller : CharacterController = GetComponent(CharacterController);
	var overallSpeed : float = controller.velocity.magnitude;		
	
	var pushDir : Vector3 = Vector3 (hit.moveDirection.x, 0, hit.moveDirection.z);
	
	body.velocity = pushDir * pushPower * overallSpeed;
}