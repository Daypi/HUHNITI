﻿//var Animator : GameObject;

#pragma strict

var Range : float = 1;
var MinAngle : float = 90;
var cube : Rigidbody;
var speed = 10.0;
var button : GameObject;
var spawnLocation : Transform;
var ammo : int = 5;

private var timer : boolean = true;
private var generated : int = 0;

function OnTriggerEnter(hit : Collider) {
if (hit && hit.tag == "Player") {
if (generated >= ammo)
	{
		var num : int = generated - ammo;
		var names : String = button.transform.name + "_cubeClone" + num.ToString();
		var cubeBis : GameObject = GameObject.Find(names);
		cubeBis.SendMessage("explosion");
		Destroy(cubeBis);
	}
	var name : String = button.transform.name + "_cubeClone" + generated.ToString();
	generated++;
	var cubeClone : Rigidbody = Instantiate(cube, spawnLocation.position, spawnLocation.rotation);
	cubeClone.name = name;
	cubeClone.transform.parent = this.transform;
    cubeClone.velocity = button.transform.right * (-speed);
    audio.Play();
    }
}

function pushedButtonCallback () {
	if (generated >= ammo)
	{
		var num : int = generated - ammo;
		var names : String = button.transform.name + "_cubeClone" + num.ToString();
		var cubeBis : GameObject = GameObject.Find(names);
		cubeBis.SendMessage("explosion");
		Destroy(cubeBis);
	}
	var name : String = button.transform.name + "_cubeClone" + generated.ToString();
	generated++;
	var cubeClone : Rigidbody = Instantiate(cube, spawnLocation.position, spawnLocation.rotation);
	cubeClone.name = name;
	cubeClone.transform.parent = this.transform;
    cubeClone.velocity = button.transform.right * (-speed);
    audio.Play();
}
function setTimer() {
 yield WaitForSeconds(0.5);
 timer = true;
}

function Update () {
	if (Input.GetButtonUp("Fire1") && timer)
	{
		var player = GameObject.Find("First Person Controller").transform;
		if (Vector3.Distance(player.position, transform.position) <= Range)
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