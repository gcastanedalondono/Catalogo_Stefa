const menuHamIcon = document.querySelector ('.menu');
const mobileMenu = document.querySelector ('.mobile-menu');
menuHamIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu () {
    mobileMenu.classList.toggle ('inactive');
}


document.addEventListener('DOMContentLoaded', () => {
    const items = [
        { id: 1, title: 'Tratamiento de cejas y pestañas', imgSrc: 'pestañas.png', description: "Un tratamiento para cejas y pestañas, precio: $15.000", pageUrl: 'tratamiento_pestañas.html' },
        { id: 2, title: 'Aceites de coco virgen prensado en frío', imgSrc: 'aceite_230ml.png', description: "Aceite de coco prensado en frío, precio: $28.000", pageUrl: 'aceite_de_coco.html' },
        { id: 3, title: 'Cremas extrahumectante', imgSrc: 'crema_310g.png', description: "Crema extrahumectante para el cuidado diario, precio: $48.000", pageUrl: 'crema_extrahumectante.html' },
        { id: 4, title: 'Protectores labiales', imgSrc: 'labiales.png', description: "Protectores labiales para todo tipo de piel, precio: $85.000", pageUrl: 'protectores_labiales.html' }
    ];

    const gallery = document.querySelector('.gallery');

    // Generar los elementos de la tienda
    items.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('item');
        
        // Crear un enlace (a) para redirigir a la página correspondiente
        const anchor = document.createElement('a');
        anchor.href = item.pageUrl;  // URL a la página del producto
        anchor.classList.add('item-link');  // Añadir una clase para estilos (opcional)
        
        anchor.innerHTML = `
            <img src="${item.imgSrc}" alt="${item.title}">
            <div class="item-title">${item.title}</div>
        `;

        // Agregar el enlace a la galería
        div.appendChild(anchor);
        gallery.appendChild(div);
    });
});
