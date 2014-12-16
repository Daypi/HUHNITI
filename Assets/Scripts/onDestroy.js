var explode : GameObject;

function explosion(){
	var cubeClone : GameObject = Instantiate(explode, this.transform.position, this.transform.rotation);
}
