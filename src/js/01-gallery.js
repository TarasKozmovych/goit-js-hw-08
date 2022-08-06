// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const ulGalleryRef = document.querySelector(".gallery");

galleryItems.forEach(({ preview, original, description }) => {
    const addGalleryItems = `
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    ulGalleryRef.innerHTML += addGalleryItems;
});
const lightbox = new SimpleLightbox(".gallery__item", {
    captionsData: "alt",
    captionDelay: "250",
});


console.log(galleryItems);
