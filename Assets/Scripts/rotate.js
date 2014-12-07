//var Animator : GameObject;
var ball : Rigidbody;
var speed = 30.0;
var canon : GameObject;
var thing : Transform;

function OnTriggerEnter (collision : Collider) {

if (collision.gameObject.tag == "Player"){
	var ballClone : Rigidbody = Instantiate(ball, thing.position, thing.rotation);
    ballClone.velocity = canon.transform.right * speed;
	}
}