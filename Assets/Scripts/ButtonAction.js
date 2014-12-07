#pragma strict

var Range : float = 1;
var MinAngle : float = 90;

function Start () {

}

function pushedButtonCallback () {
	Debug.Log("button pressed");
}

function Update () {
	if (Input.GetButtonUp("Use"))
	{
		var player = GameObject.Find("First Person Controller").transform;
		if (Vector2.Distance(player.position, transform.position) <= Range)
		{
	     	var cubeDir = transform.position - player.position;
		    var angle = Vector3.Angle(cubeDir, player.forward);
		    if (angle < MinAngle) {
		    	pushedButtonCallback();
		    }
		}
	}
}