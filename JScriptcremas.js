const menuHamIcon = document.querySelector ('.menu');
const mobileMenu = document.querySelector ('.mobile-menu');
menuHamIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu () {
    mobileMenu.classList.toggle ('inactive');
}



document.addEventListener('DOMContentLoaded', () => {
    const items = [
        { id: 1, title: 'Crema extrahumectante de 90g, precio: $13.000', imgSrc: 'crema_90g.png', description: "Una crema como para llevar en el bolso. combina los beneficios del aceite de coco, la vitamina E y el tomillo para ofrecerte una experiencia única de cuidado y bienestar. El aceite de coco proporciona una hidratación profunda, dejando la piel suave y sedosa, mientras que la vitamina E actúa como potente antioxidante, protegiendo y revitalizando tu piel. El tomillo, con sus propiedades antisépticas, ayuda a calmar y refrescar la piel, dejándola con una sensación de frescura duradera.  Precio:$13000" },
        { id: 2, title: 'Crema extrahumectante de 310g, precio: $28.000', imgSrc: 'crema_310g.png', description: "Combina los beneficios del aceite de coco, la vitamina E y el tomillo para ofrecerte una experiencia única de cuidado y bienestar. El aceite de coco proporciona una hidratación profunda, dejando la piel suave y sedosa, mientras que la vitamina E actúa como potente antioxidante, protegiendo y revitalizando tu piel. El tomillo, con sus propiedades antisépticas, ayuda a calmar y refrescar la piel, dejándola con una sensación de frescura duradera., precio $28.000" },
        { id: 3, title: 'Crema extrahumectante de 470g, precio: $44.000', imgSrc: 'crema_470g.png', description: "combina los beneficios del aceite de coco, la vitamina E y el tomillo para ofrecerte una experiencia única de cuidado y bienestar. El aceite de coco proporciona una hidratación profunda, dejando la piel suave y sedosa, mientras que la vitamina E actúa como potente antioxidante, protegiendo y revitalizando tu piel. El tomillo, con sus propiedades antisépticas, ayuda a calmar y refrescar la piel, dejándola con una sensación de frescura duradera.Precio $48000" }
     
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
