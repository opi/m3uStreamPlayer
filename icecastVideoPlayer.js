// Prevent IE8 from bugging when a console.log call is left
if (!window.console) window.console = {};
if (!window.console.log) window.console.log = function () { };

// Get video HTML element
var v = document.querySelector("#video");


/**
 * Functions
 */

v.init = function() {
  this.sources = [];
  this.debug = (v.getAttribute('data-debug') == "true") ? true : false;
  this.getPlaylistSources();
}

// Load playlist form Icecast server, and store sources urls.
v.getPlaylistSources = function() {
  var that = this;

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = process;
  xhr.open("GET", v.getAttribute('data-playlist'), true);
  xhr.send();
  function process() {
    if (xhr.readyState == 4) {
      var resp = xhr.responseText;

      // m3uToUrl From https://github.com/aitorciki/jquery-playlist/blob/master/jquery.playlist.js
      that.sources = resp.match(/^(?!#)(?!\s).*$/mg).filter(function(element){return (element);});
      if (that.debug) console.log("Sources: "+that.sources);

      // Immediatly load & play first source
      that.src = that.sources[0];
      if (that.getAttribute('autoplay')) that.play();
    }
  }        
}

// Get current source index
v.getSourceIdx = function() {
  for(var i = 0; i < this.sources.length; i++){
    if (this.currentSrc == this.sources[i]) return i;
  }
  return 0;
}

// Jump to next source.
v.nextSource = function() {
  var sourceIdx  = this.getSourceIdx();
  var nextSourceIdx = (sourceIdx == this.sources.length -1 ) ? 0 : sourceIdx + 1;

  this.src = this.sources[nextSourceIdx];
  if (this.debug) console.log("Source updated: "+this.src);
  this.play();
}

// Randomize source.
v.randomizeSource = function(play) {
  this.src = this.sources[Math.floor(Math.random()*this.sources.length)];
  // this.currentTime = 0;
  if (this.debug) console.log("Source randomized: "+this.src);
  this.play();
}

// Display human readable message in console.
v.errorMessage = function(event) {
  switch (event.target.error.code) {
    case event.target.error.MEDIA_ERR_ABORTED:
      return "The fetching process for the media resource was aborted by the user agent at the user's request.";
    case event.target.error.MEDIA_ERR_NETWORK:
      return "A network error of some description caused the user agent to stop fetching the media resource, after the resource was established to be usable.";
    case event.target.error.MEDIA_ERR_DECODE:
      return "An error of some description occurred while decoding the media resource, after the resource was established to be usable.";
    case event.target.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
      return "The media resource indicated by the src attribute was not suitable.";
    default:
      return "An unknown error occurred.";
  }
}


/**
 * Events
 */
v.addEventListener('loadedmetadata', function(){ // playing / loadedmetadata
  // this.currentTime = 0;
  // that.setCurrentTime(0);
});

// Show current source
v.addEventListener('play', function(e) {
  if (this.debug) console.log("Play: "+this.currentSrc);
});

// On error, update source, and play again
v.addEventListener('error', function(e) {
  if (this.debug) console.log("Error: " + this.errorMessage(e));
  this.nextSource();
});

// On end, update source, and play again
v.addEventListener('ended', function() {
  if (this.debug) console.log("Ended");
  this.nextSource();
});

// On pause, update source, and play again
v.addEventListener('pause', function() {
  if (this.debug) console.log("Pause");
  // this.nextSource(); // For debug purpose only !
});      

// Video Init
v.init();
