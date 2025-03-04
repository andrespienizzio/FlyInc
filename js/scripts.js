window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        const logo = document.body.querySelector('.navbar-logo'); // Obtener el logo
        const isMobile = window.innerWidth <= 991; // Detectar si es móvil (pantallas menores a 991px)

        if (isMobile) {
            logo.src = "assets/Isotipo-8.png"; // Logo negro siempre en móviles
        } else {
            if (window.scrollY === 0) {
                navbarCollapsible.classList.remove('navbar-shrink');
                logo.src = "assets/Isotipo-7.png"; // Logo blanco
            } else {
                navbarCollapsible.classList.add('navbar-shrink');
                logo.src = "assets/Isotipo-8.png"; // Logo negro
            }
        }
    };

    // Aplica la función para reducir el navbar al cargar la página
    navbarShrink();

    // Aplica la función cuando se hace scroll en la página
    document.addEventListener('scroll', navbarShrink);

    // Aplica la función cuando se cambia el tamaño de la ventana
    window.addEventListener('resize', navbarShrink);

});
