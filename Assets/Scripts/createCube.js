//var Animator : GameObject;
var cube : Rigidbody;
var speed = 10.0;
var button : GameObject;
var spawnLocation : Transform;
var ammo : int = 5;

private var generated : int = 0;

function OnTriggerEnter (collision : Collider) {

if (collision.gameObject.tag == "Player" && generated >= ammo)
	{
	var num : int = generated - ammo;
	var names : String = button.transform.name + "_cubeClone" + num.ToString();
	var cubeBis : GameObject = GameObject.Find(names);
	cubeBis.SendMessage("explosion");
	Destroy(cubeBis);
	}

if (collision.gameObject.tag == "Player"){
	var name : String = button.transform.name + "_cubeClone" + generated.ToString();
	generated++;
	var cubeClone : Rigidbody = Instantiate(cube, spawnLocation.position, spawnLocation.rotation);
	cubeClone.name = name;
	cubeClone.transform.parent = this.transform;
    cubeClone.velocity = button.transform.right * (-speed);
	}
}