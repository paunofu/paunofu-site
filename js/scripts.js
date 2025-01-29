document.addEventListener("DOMContentLoaded", function () {
    console.log("El document s'ha carregat correctament.");

    // Exemple de funcionalitat per canviar color en fer clic
    const links = document.querySelectorAll("#repo-list li a");
    links.forEach(link => {
        link.addEventListener("click", function () {
            alert("Redirigint a: " + this.href);
        });
    });
});
