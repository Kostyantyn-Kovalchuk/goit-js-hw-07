import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// Gallery markup creation and insertion

const galleryList = document.querySelector(".gallery");

function createGalleryListMarkup(imagesArray) {
    const galleryListMarkup = imagesArray.map(element => 
        `<li class="gallery__item">
   <a class="gallery__link" href="${element.original}">
      <img class="gallery__image" src="${element.preview}" alt="${element.description}" />
   </a>
</li>`
    ).join("");

    galleryList.insertAdjacentHTML("beforeend", galleryListMarkup);
};

createGalleryListMarkup(galleryItems);

// Modal window via library

let lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });