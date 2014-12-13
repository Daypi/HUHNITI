//var Animator : GameObject;
var ball : Rigidbody;
var speed = 30.0;
var angle = 5.0;
var cannon : GameObject;
var generationPoint : Transform;
var ammo : int = 5;
private var generated : int = 0;
private var count : int = 0;
function OnTriggerEnter (collision : Collider) {

if (generated >= 5 && collision.gameObject.tag == "Player")
{
	var names : String = "ballClone" + count.ToString();
	count = (count + 1) % 5;
	var ballBis : GameObject = GameObject.Find(names);
	ballBis.renderer.enabled = false;
	ballBis.rigidbody.transform.position = generationPoint.position;
	ballBis.renderer.enabled = true;
	ballBis.rigidbody.velocity = cannon.transform.right * speed;
	ballBis.rigidbody.velocity.y = 5;			
	}
else {
	if (collision.gameObject.tag == "Player")
	{
		var name : String = "ballClone" + generated.ToString();
		generated++;
		var ballClone : Rigidbody = Instantiate(ball, generationPoint.position, generationPoint.rotation);
		ballClone.name = name;
		ballClone.transform.parent = cannon.transform;
	   	ballClone.velocity = cannon.transform.right * speed;
	   	ballClone.velocity.y = 5;
		}
	}
}