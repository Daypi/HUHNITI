 #pragma strict

public class MusicSingleton extends MonoBehaviour
{
	public static var instance : MusicSingleton;
	public var musicMainMenu : AudioClip;
	public var musicLevel : AudioClip;
	public static var musicTime = 0;

	function Awake()
	{
		if ( instance != null && instance != this )
		{
			Destroy( this.gameObject );
			return;
		}
		else
		{
			instance = this;
		}
		DontDestroyOnLoad( this.gameObject );
	}

	function OnLevelWasLoaded( level : int )
	{
		if ( level == 0 )
		{
			audio.Stop();
			audio.clip = musicMainMenu;
			audio.Play();
		}
		else
		{
			audio.Stop();
			audio.clip = musicLevel;
			audio.time = musicTime;
			audio.Play();
		}
	}

	public static function GetInstance() : MusicSingleton
	{
		return instance;
	}

	function Update()
	{
		musicTime = audio.time;
	}
}
 