window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector('#mainNav');
    const logo = document.querySelector('.navbar-brand img');

    if (!navbarCollapsible || !logo) {
        return;
    }

    if (window.scrollY === 0 && window.innerWidth > 768) {
        navbarCollapsible.classList.remove('navbar-shrink');
        logo.src = 'assets/Imagotipo-2.png';
        logo.style.display = "block"; // Asegura que el logo sea visible
    } else {
        navbarCollapsible.classList.add('navbar-shrink');
        logo.src = 'assets/Imagotipo-4.png';
        logo.style.display = "block"; // Evita que desaparezca al hacer zoom
    }
    };


    // Inicializa la función de shrink del navbar
    navbarShrink();

    // Aplicar el efecto de shrink al hacer scroll
    document.addEventListener('scroll', navbarShrink);

    // Aplicar el cambio también al redimensionar la ventana
    window.addEventListener('resize', navbarShrink);

    // Activar Bootstrap Scrollspy en el navbar
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    }

    // Cerrar el navbar responsive cuando un item es clickeado
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activar el plugin SimpleLightbox para los items del portfolio
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});
