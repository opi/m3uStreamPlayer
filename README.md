# HTML5 Video Player from Icecast playlist #

## HTML ##

Use a ```<video>``` tag and set playlist url with data-playlist attribute.
Ex:
```
<video id="video" controls loop autoplay width="640" 
    data-debug="true"
    data-playlist="http://live.cloudfrancois.fr/playlist/faimaison">
</video> 
```

data-debug attribute can be used for debugging purpose. 


## JS ##
Load icecastVideoPlayer.js file after your ```<video>``` tag:
```
<script src="icecastVideoPlayer.js"></script>
```

## CSS ##
For a responsive player, set
```
video { 
    max-width: 100%;
    height: auto;
}
```

## Example ##

Working example with FAImaison.net streaming playlist in faimaison.html file