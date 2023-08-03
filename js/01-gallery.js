import { galleryItems } from './gallery-items.js';
// Change code below this line

// Gallery markup creation and insertion

const galleryList = document.querySelector(".gallery");

function createGalleryListMarkup(imagesArray) {
    const galleryListMarkup = imagesArray.map(element =>
        `<li class="gallery__item">
    <a class="gallery__link" href="${element.original}">
    <img
    class="gallery__image"
    src="${element.preview}"
    data-source="${element.original}"
    alt="${element.description}"/>
    </a>
    </li>`).join("");
    
    galleryList.insertAdjacentHTML("beforeend", galleryListMarkup);
};

createGalleryListMarkup(galleryItems);

// Event delegation

galleryList.addEventListener("click", handleClick);

// Modal window via library + close modal via Escape

function handleClick(event) {
    event.preventDefault();
    if (event.currentTarget === event.target) {
    return;
  }
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}">`, {
    onShow: () => {
        galleryList.addEventListener("keydown", handleCloseModal);
    },
    
    onClose: () => {
        galleryList.removeEventListener("keydown", handleCloseModal);
    },
    });
        
    instance.show();

    function handleCloseModal(event) {
        if (event.code === "Escape") {
            instance.close()
        }
    }
   
};