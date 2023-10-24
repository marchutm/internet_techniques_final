const container = document.getElementById('image');
const images = [
    {src: 'img/lysica/image1.jpg', caption: 'Tabliczka na szczycie'},
    {src: 'img/lysica/image2.jpg', caption: 'Panorama ze szczytu'},
	{src: 'img/lysica/image3.jpg', caption: 'Cmentarz żołnierzy AK'},
	{src: 'img/lysica/image4.jpg', caption: 'kaplica św. Franciszka'}
];
let currentIndex = 0;

const caption = container.querySelector('figcaption');

container.addEventListener('click', (event) => {
    const image = container.querySelector('img');
    const rect = image.getBoundingClientRect();
    if (event.clientX - rect.left < rect.width / 2) {
        currentIndex = currentIndex - 1 < 0 ? images.length - 1 : currentIndex - 1;
    } else {
        currentIndex = currentIndex + 1 === images.length ? 0 : currentIndex + 1;
    }
    // Dodanie klasy z animacją fade-out
    image.classList.add('fade-out');
    caption.classList.add('fade-out');
    // Obsługa zdarzenia transitionend po zakończeniu animacji
    image.addEventListener('transitionend', () => {
        image.src = images[currentIndex].src;
        caption.textContent = images[currentIndex].caption;
        // Usunięcie klasy z animacją fade-out
        image.classList.remove('fade-out');
        caption.classList.remove('fade-out');
        // Dodanie klasy z animacją fade-in
        image.classList.add('fade-in');
        caption.classList.add('fade-in');
        // Usunięcie klasy z animacją fade-in po zakończeniu animacji
        image.addEventListener('transitionend', () => {
            image.classList.remove('fade-in');
            caption.classList.remove('fade-in');
        });
    });
});
