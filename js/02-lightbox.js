import { galleryItems } from './gallery-items.js';
// Change code below this line


console.log(galleryItems);

const divRef = document.querySelector(".gallery");

function createGallaryMarkup(items) {
    return items
    .map(
        (item) => `
            <a class="gallery__item" href="${item.original}">
            <img 
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="Image ${item.description}"
            />
            </a>`
    )
    .join("");

}

const addGalleryMarkup = createGallaryMarkup(galleryItems);

divRef.innerHTML = addGalleryMarkup;

divRef.addEventListener("click", onImageClick);

function onImageClick (evt) {
    //Забороан выдкриття картинки за посиланням
    evt.preventDefault();

    if (evt.target.nodeName !== "IMG") {
        return
    }

    const lightbox  = new SimpleLightbox('.gallery a',{captionsData:"Ok"});


}

