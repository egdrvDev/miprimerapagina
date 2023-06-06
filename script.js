function showAlert() {
    alert('Si haces click en mi avatar, ¡te transportara a mi canal de youtube!');
}

document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})