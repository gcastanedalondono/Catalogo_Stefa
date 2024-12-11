const menuHamIcon = document.querySelector ('.menu');
const mobileMenu = document.querySelector ('.mobile-menu');
menuHamIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu () {
    mobileMenu.classList.toggle ('inactive');
}


document.addEventListener('DOMContentLoaded', () => {
    const items = [
        { id: 1, title: 'Protector labial de coco, precio :$9.000', imgSrc: 'labial_coco.png', description:"Cuida y revitaliza tus labios con nuestro Protector Labial Natural, enriquecido con aceite de coco, cera de abeja, manteca de karité y vitamina E. La combinación de estos ingredientes proporciona una hidratación profunda, creando una barrera protectora contra el viento, el frío y la deshidratación. El aceite de coco y la manteca de karité nutren y suavizan, mientras que la cera de abeja protege y la vitamina E combate los signos de envejecimiento, dejando tus labios suaves, hidratados y saludables.Precio: $9000" },
        { id: 2, title: 'Protector labial de coco y sandia, precio: $9000', imgSrc: 'labial_sandia.png', description:"Nuestro Protector Labial Natural es la combinación perfecta de ingredientes nutritivos para mantener tus labios suaves, hidratados y protegidos. Con aceite de coco y manteca de karité, proporciona una hidratación profunda y una nutrición intensa, mientras que la cera de abeja crea una barrera protectora contra las agresiones externas. La vitamina E aporta propiedades antioxidantes que ayudan a restaurar la salud de tus labios, y el extracto de sandía añade un toque refrescante, proporcionando una sensación de frescura y suavidad. Precio: $9000" },
        { id: 3, title: 'labial de coco, menta y mango, precio: $14000', imgSrc: 'labial_menta.png',description:"Hidrata y revitaliza tus labios con nuestro Protector Labial Vegano, formulado con aceite de coco, manteca de mango, sacha inchi y aceite esencial de menta. Su combinación única nutre profundamente, protege contra la sequedad y deja una sensación fresca y mentolada. Ideal para labios secos o agrietados, ¡disfruta de labios suaves y saludables con una fórmula 100% natural. Precio: $14.000" },
        { id: 4, title: 'labial de coco, toronja y mango, precio: $14000', imgSrc: 'labial_citrico.png',description:"Protector labial, a base de aceite de coco, aceite de sachainchi, manteca de mango y aceites esenciales citricos(mandarina, pomelo y naranja), Precio: $14.000" },
       
    ];

    const gallery = document.querySelector('.gallery');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const modalDescription = document.getElementById('modal-description');
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
        div.addEventListener('click', () => {
            openModal(item);
        });
        gallery.appendChild(div);
    });

    function openModal(item) {
        modal.style.display = 'block';
        modalImage.src = item.imgSrc;
        modalDescription.textContent = item.description;
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

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
});