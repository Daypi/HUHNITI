var ball : Rigidbody;
var speed = 30.0;
var angle = 5.0;
var cannon : GameObject;
var level : GameObject;
var Range : float = 1;
var MinAngle : float = 90;
var generationPoint : Transform;
var ammo : int = 5;

private var timer : boolean = true;
private var generated : int = 0;
private var count : int = 0;


function OnTriggerEnter(hit : Collider) {
	if (hit && hit.tag == "Player" && timer) {
	if (cannon.rigidbody.constraints == RigidbodyConstraints.FreezeRotation){
	if (generated < ammo)
	{
		var name : String = cannon.transform.name + "_ballClone" + generated.ToString();
		generated++;
		var ballClone : Rigidbody = Instantiate(ball, generationPoint.position, generationPoint.rotation);
		ballClone.name = name;
		ballClone.transform.parent = level.transform;
		ballClone.velocity = cannon.transform.right * speed;
		ballClone.velocity.y = angle;
		timer = false;
		setTimer();	
		}
	else {

			var names : String = cannon.transform.name + "_ballClone" + count.ToString();
			count = (count + 1) % ammo;
			var ballBis : GameObject = GameObject.Find(names);
			ballBis.renderer.enabled = false;
			ballBis.rigidbody.transform.position = generationPoint.position;
			ballBis.renderer.enabled = true;
			ballBis.rigidbody.velocity = cannon.transform.right * speed;
			ballBis.rigidbody.velocity.y = angle;
			timer = false;
			setTimer();	
			}
		}
	}
}

function pushedButtonCallback ()
{
	if (cannon.rigidbody.constraints == RigidbodyConstraints.FreezeRotation){
	if (generated < ammo)
	{
		var name : String = cannon.transform.name + "_ballClone" + generated.ToString();
		generated++;
		var ballClone : Rigidbody = Instantiate(ball, generationPoint.position, generationPoint.rotation);
		ballClone.name = name;
		ballClone.transform.parent = level.transform;
		ballClone.velocity = cannon.transform.right * speed;
		ballClone.velocity.y = angle;		
		}
	else {

			var names : String = cannon.transform.name + "_ballClone" + count.ToString();
			count = (count + 1) % ammo;
			var ballBis : GameObject = GameObject.Find(names);
			ballBis.renderer.enabled = false;
			ballBis.rigidbody.transform.position = generationPoint.position;
			ballBis.renderer.enabled = true;
			ballBis.rigidbody.velocity = cannon.transform.right * speed;
			ballBis.rigidbody.velocity.y = angle;
		}
	}
}

function setTimer() {
yield WaitForSeconds(3);
timer = true;
}

function Update () {
	if (Input.GetButtonUp("Fire1") && timer)
	{
		var player = GameObject.Find("First Person Controller").transform;
		if (Vector2.Distance(player.position, transform.position) <= Range)
		{
	     	var cubeDir = transform.position - player.position;
		    var angle = Vector3.Angle(cubeDir, player.forward);
		    if (angle < MinAngle) {
		    	pushedButtonCallback();
		    	timer = false;
		    	setTimer();
		    }
		}
	}
}