import { galleryItems } from './gallery-items.js';
// Change code below this line


console.log(galleryItems);

const divRef = document.querySelector(".gallery");

function createGallaryMarkup(items) {
    return items
    .map(
        (item) => `
        <div class="gallery__item">
            <a class="galery__link" href="${item.original}">
            <img 
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
            />
            </a>
            </div>`
    )
    .join("");

}

const addGalleryMarkup = createGallaryMarkup(galleryItems);

divRef.innerHTML = addGalleryMarkup;

divRef.addEventListener("click", onImageClick);

const instance = basicLightbox.create(`
<img class="modal-img" src="">`,{
    onShow: instance => {
        document.addEventListener('keydown', onEscClick);
    },

    onClose: instance => {
        document.removeEventListener('keydown', onEscClick);
    },
});


function onImageClick (evt) {
    //Забороан выдкриття картинки за посиланням
    evt.preventDefault();

    if (evt.target.nodeName !== "IMG") {
        return
    }

    instance.element().querySelector('img').src = evt.target.dataset.source;
   
    instance.show();
}

function onEscClick(evt) {
    if (evt.key === 'Escape') {
        instance.close();
        return;
    }
}

