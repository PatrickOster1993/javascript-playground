var player;
var isMuted = false;  // Tracks whether the video is currently muted
const stickContainer = document.getElementById('stickfight-container');
const playButton = document.getElementById("play-button");

// Function to initialize the YouTube Player
function onYouTubeIframeAPIReady() {
  // Create a new YouTube player once the API is ready
  player = new YT.Player('youtube-video', {
    events: {
      'onReady': function(event) {
        // Play the video and unmute it initially
        event.target.playVideo();
        event.target.unMute();
        stickContainer.style.display = 'block';  // Hide the stickfight container initially
        playButton.innerText = "Was für Fuchs? Mach das aus!";
      }
    }
  });
}

// Button click handler to play/unmute or mute the video
document.getElementById("play-button").addEventListener("click", function() {
  var iframe = document.getElementById("youtube-video");

  // Show the iframe and hide the image only after the player is initialized
  if (!player) {
    // Load the YouTube API script if it's not already loaded
    if (!window.YT) {
      var script = document.createElement('script');
      script.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(script);
    }
    iframe.style.display = "block";  // Make the iframe visible when player is being initialized
    return; // Exit early because player isn't ready yet
  }

  // Now that the player is initialized, toggle mute/unmute
  if (isMuted) {
    player.unMute(); // Unmute the video
    isMuted = false;
    stickContainer.style.display = stickContainer.style.display === 'none' ? 'block' : 'none'; // Toggle the stickContainer display
    playButton.innerText = "Was für Fuchs? Mach das aus!";
  } else {
    player.mute(); // Mute the video
    isMuted = true;
    stickContainer.style.display = stickContainer.style.display === 'none' ? 'block' : 'none'; // Toggle the stickContainer display
    playButton.innerText = "Bring die Show zurück!";
  }
});
