let firstbox = document.getElementById("box"); // Matches the "box" ID in HTML
let otherbox = document.getElementById("otherbox"); // Matches the "otherbox" ID in HTML

// This function toggles the visibility of the boxes every 500ms
setInterval(function () {
  firstbox.style.display = firstbox.style.display === 'none' ? 'block' : 'none';
    otherbox.style.display = otherbox.style.display === 'none' ? 'block' : 'none';
}, 1000);
