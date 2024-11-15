var player;
var isMuted = true;  // Tracks whether the video is currently muted

// Function to initialize the YouTube Player
function onYouTubeIframeAPIReady() {
  player = new YT.Player('youtube-video', {
    events: {
      'onReady': function(event) {
        // Start the video and keep it muted initially
        event.target.playVideo();
        event.target.unMute();
      }
    }
  });
}

// Button click handler to play/unmute or mute the video
document.getElementById("play-button").addEventListener("click", function() {
  // Hide the image
  document.getElementById("image-container").style.display = "none";

  // Show the iframe
  var iframe = document.getElementById("youtube-video");
  iframe.style.display = "block";

  // Toggle mute/unmute
  if (player) {
    if (isMuted) {
      player.unMute(); // Unmute the video
      isMuted = false;
    } else {
      player.mute(); // Mute the video
      isMuted = true;
    }
  }

  // Load the YouTube API script if not already loaded
  if (!window.YT) {
    var script = document.createElement('script');
    script.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(script);
  }
});