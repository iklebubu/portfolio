document.addEventListener('DOMContentLoaded', function () {
    var infoDiv = document.getElementById('info');
    var containerDiv = document.getElementById('container');

    containerDiv.addEventListener('click', function (event) {
        // Toggle the 'show' class for the info div
        infoDiv.classList.toggle('show');

        // Set the top and left properties based on cursor coordinates
        // If cursor x + div greater than right screen
        if((Number(event.clientX) + infoDiv.offsetWidth) > 
        (Number(window.innerWidth))) {
            infoDiv.style.left = event.clientX - infoDiv.offsetWidth + 'px';
        } else {
          infoDiv.style.left = event.clientX + 'px';
        }

        // If cursor y + div greater than right screen
        if((Number(event.clientY) + infoDiv.offsetHeight) > 
        (Number(window.innerHeight))) {
            infoDiv.style.top = event.clientY - infoDiv.offsetHeight + 'px';
        } else {
          infoDiv.style.top = event.clientY + 'px';
        }




        // Stop the click event propagation to prevent it from immediately closing the div
        event.stopPropagation();
      });

      // Close the info div when clicking outside of it
      document.addEventListener('click', function () {
        // Remove the 'show' class to hide the info div
        infoDiv.classList.remove('show');
      });

      infoDiv.addEventListener('click', function (event) {
        event.stopPropagation();
      });
});