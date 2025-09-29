// Injects the navbar.html contents into the element with id="navbar-container"
document.addEventListener('DOMContentLoaded', function() {
  fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
      const container = document.getElementById('navbar-container');
      if (container) {
        container.innerHTML = data;
      }
    });
});
