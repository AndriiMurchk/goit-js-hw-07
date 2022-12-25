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

function onImageClick (evt) {
    //Забороан выдкриття картинки за посиланням
    evt.preventDefault();

    if (evt.target.nodeName !== "IMG") {
        return
    }

    const instance = basicLightbox.create(`
        <img src="${evt.target.dataset.source}" width="800" height="600">
`);

instance.show();

divRef.addEventListener("keydown", (evt) => {
    if (evt.code==="Escape") {
        instance.close();
    }
});
}

function blockStandartAction(evt) {
    evt.preventEDefault();
}
