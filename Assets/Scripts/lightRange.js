#pragma strict

var duration : float = 4.0;
private var originalRange : float;
originalRange = light.range;

function Update () {
	var amplitude : float = Mathf.PingPong( Time.time, duration );
	amplitude = amplitude / duration * 0.5 + 0.3;
	light.range = originalRange * amplitude;
}