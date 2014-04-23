# m3uStreamPlayer #
**HTML5 Player from m3u playlist**

Use playlist from Icecast server with audio/video HTML5 element.

Use case: Icecast setup with several relays servers; If currently used server 
failed, the next one is automatically used.    
For setting up Icecast Relay, see http://www.icecast.org/docs/icecast-2.1.0/icecast2_relay.html


## HTML ##

Use a ```<video>``` tag and set playlist url with data-playlist attribute.
Ex:
```html
<video id="video" controls loop autoplay width="640" 
    data-playlist="http://live.cloudfrancois.fr/playlist/faimaison">
</video> 
```


## JS ##
Load m3uStreamPlayer.js file after your ```<video>``` tag
```html
<script src="m3uStreamPlayer.js"></script>
```

and init script

```js
m3uStreamPlayer.init({selector: '#video', debug: false});
```

### Options ###

- **selector** : (string) Use querySelectorAll syntax
- **debug** : (bool) Printed in console

*NB :* You can simply pass a selector string like ```m3uStreamPlayer.init('#video');```


## Example ##

Working example with FAImaison.net streaming playlist in faimaison.html file, 
and on <a href="http://faimaison.net">faimaison.net</a>