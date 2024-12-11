const menuHamIcon = document.querySelector ('.menu');
const mobileMenu = document.querySelector ('.mobile-menu');
menuHamIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu () {
    mobileMenu.classList.toggle ('inactive');
}


document.addEventListener('DOMContentLoaded', () => {
    const items = [
        { id: 1, title: 'Aceite de coco 100 ml, precio $15.000', imgSrc: 'aceite_100ml.png', description: "Un aceite solo para tu uso personal. Es ideal para el cuidado de la piel, el cabello y la salud en general. Su versatilidad lo convierte en un excelente aliado tanto en la cocina como en tu rutina de belleza diaria. Disfruta de sus propiedades hidratantes, nutritivas y revitalizantes. ¡Natural, saludable y multifuncional! precio: $15.000" },
        { id: 2, title: 'Aceite de coco 230 ml, precio $28.000', imgSrc: 'aceite_230ml.png', description: "Un aceite más grande para tus necesidades. Es ideal para el cuidado de la piel, el cabello y la salud en general. Su versatilidad lo convierte en un excelente aliado tanto en la cocina como en tu rutina de belleza diaria. Disfruta de sus propiedades hidratantes, nutritivas y revitalizantes. ¡Natural, saludable y multifuncional! precio $28.000" },
        { id: 3, title: 'Aceite de coco 450 ml, precio $48.000', imgSrc: 'aceite_450ml.png', description: "Ideal para el uso diario. Es ideal para el cuidado de la piel, el cabello y la salud en general. Su versatilidad lo convierte en un excelente aliado tanto en la cocina como en tu rutina de belleza diaria. Disfruta de sus propiedades hidratantes, nutritivas y revitalizantes. ¡Natural, saludable y multifuncional! precio $48000" },
        { id: 4, title: 'Aceite de coco 950 ml, precio $85.000', imgSrc: 'aceite_950ml.png', description: "Perfecto para familias. Es ideal para el cuidado de la piel, el cabello y la salud en general. Su versatilidad lo convierte en un excelente aliado tanto en la cocina como en tu rutina de belleza diaria. Disfruta de sus propiedades hidratantes, nutritivas y revitalizantes. ¡Natural, saludable y multifuncional! precio $85.000" }
    ];

    const gallery = document.querySelector('.gallery');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const modalDescription = document.getElementById('modal-description'); // Seleccionamos el div para la descripción
    const buyButton = document.getElementById('buy-button');
    const closeButton = document.querySelector('.close');

    let currentItem = null;

    // Generar los elementos de la tienda
    items.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('item');
        div.innerHTML = `
            <img src="${item.imgSrc}" alt="${item.title}">
            <div class="item-title">${item.title}</div>
        `;
        div.addEventListener('click', () => openModal(item));
        gallery.appendChild(div);
    });

    function openModal(item) {
        modal.style.display = 'block';
        modalImage.src = item.imgSrc;
        modalDescription.textContent = item.description; // Establecer la descripción en el modal
        currentItem = item;
    }

    function closeModal() {
        modal.style.display = 'none';
        currentItem = null;
    }

    closeButton.addEventListener('click', closeModal);

    buyButton.addEventListener('click', () => {
        if (currentItem) {
            const phoneNumber = '573233948782'; // Reemplaza con el número de WhatsApp
            const whatsappMessage = encodeURIComponent(`Hola, quiero comprar el ${currentItem.title}.`);
            const url = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
            window.open(url, '_blank');
            closeModal();
        }
    });

    window.addEventListener('click', event => {
        if (event.target === modal) {
            closeModal();
        }
    });
});
