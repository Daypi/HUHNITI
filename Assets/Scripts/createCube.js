//var Animator : GameObject;
var cube : Rigidbody;
var speed = 10.0;
var button : GameObject;
var spawnLocation : Transform;
var level : GameObject;

function OnTriggerEnter (collision : Collider) {

if (collision.gameObject.tag == "Player"){
	var cubeClone : Rigidbody = Instantiate(cube, spawnLocation.position, spawnLocation.rotation);
	cubeClone.transform.parent = level.transform;
    cubeClone.velocity = button.transform.right * (-speed);
	}
}