/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        const logo = document.querySelector('.navbar-brand img'); // Seleccionamos la imagen del logo
        
        if (!navbarCollapsible) {
            return;
        }
        
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink');
            // Cambiar el logo a Imagotipo-2 cuando no hay scroll
            logo.src = 'assets/Imagotipo-2.png';
        } else {
            navbarCollapsible.classList.add('navbar-shrink');
            // Cambiar el logo a Imagotipo-3 cuando hay scroll
            logo.src = 'assets/Imagotipo-4.png';
        }
    };

    // Inicializa la función de shrink del navbar
    navbarShrink();

    // Aplicar el efecto de shrink al hacer scroll
    document.addEventListener('scroll', navbarShrink);

    // Activar Bootstrap Scrollspy en el navbar
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

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
