import { galleryItems } from './gallery-items.js';
// Change code below this line


console.log(galleryItems);

const divRef = document.querySelector(".gallery");

function createGallaryMarkup(items) {
    return items
    .map(
        (item) => `
        <div class="gallery">
            <a class="galery__item" href="${item.original}">
            <img 
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            title="${item.description}"
            />
            </a>
            </div>`
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

    const gallery = new SimpleLightbox('.gallery a', {captionDelay:250,});

  
}
