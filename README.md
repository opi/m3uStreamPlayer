# m3uStreamPlayer : HTML5 Player from m3u playlist #

Use playlist from Icecast server with audio/video HTML5 element.

Use case: Playlist with several slaves server; If currently used server 
failed, the next one is automatically used.
 

## HTML ##

Use a ```<video>``` tag and set playlist url with data-playlist attribute.
Ex:
```
<video id="video" controls loop autoplay width="640" 
    data-playlist="http://live.cloudfrancois.fr/playlist/faimaison">
</video> 
```


## JS ##
Load m3uStreamPlayer.js file after your ```<video>``` tag, 
and init script

```
<script src="m3uStreamPlayer.js"></script>
<script>m3uStreamPlayer.init({selector: '#video', debug: false});</script>
```

### Options ###

* *selector* : (string) Use querySelectorAll syntax
* *debug* : (bool) Printed in console


## CSS ##
For a responsive video player, set
```
video { 
    max-width: 100%;
    height: auto;
}
```

## Example ##

Working example with FAImaison.net streaming playlist in faimaison.html file