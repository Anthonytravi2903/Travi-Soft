jQuery(document).ready( $ => {
        $('.site-header .menu-principal .menu').slicknav({
            label:'',
            appendTo: '.site-header'
        });

        /**Agregar Slider */
        if($('.listado-testimoniales').length > 0 ) {
            $('.listado-testimoniales').bxSlider({
                auto: true,
                mode: 'fade',
                controls: false,
                speed: 1100
            });
        }

        /**Mapa de leaflet en la pagina contacto */

        const lat= document.querySelector('#lat').value;
        const lng= document.querySelector('#lng').value;
        const direccion= document.querySelector('#direccion').value;

        if(lat && lng && direccion){
            var map = L.map('mapa').setView([lat, lng], 15);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);
            
            L.marker([lat, lng]).addTo(map)
                .bindPopup(direccion)
                .openPopup();
        }

      
});

/** Agrega posicion fija al header al hacer scroll*/
window.onscroll = () =>{
    const scroll = window.scrollY;

    const headerNav = document.querySelector('.barra-navegacion');
    const footerNav = document.querySelector('.boton-w');
    const documentBody = document.querySelector('body');
    // Si la cantidad de Scroll e smayor a "(un valor)", agregar una clase
    if(scroll >300) {
        headerNav.classList.add('fixed-top');
        footerNav.classList.add('fixed-w');
        documentBody.classList.add('ft-activo');
    } else{
        headerNav.classList.remove('fixed-top');
        footerNav.classList.remove('fixed-w');
        documentBody.classList.remove('ft-activo');
    }
}