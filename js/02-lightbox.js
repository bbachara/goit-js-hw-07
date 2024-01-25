import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const picturesContainer = document.querySelector(`.gallery`);

const galleryMarkup = galleryItems.map((image) => {
  const li = document.createElement("li");

  const link = document.createElement(`a`);
  link.className = `gallery__item`;
  link.href = image.original;

  const imgElement = document.createElement(`img`);
  imgElement.className = `gallery__image`;
  imgElement.src = image.preview;
  imgElement.alt = image.description;
  imgElement.dataset.source = image.original;

  link.appendChild(imgElement);
  li.appendChild(link);

  return li;
});

picturesContainer.append(...galleryMarkup);

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionsDataAlt: "Image description",
});
gallery.on("show.simplelightbox", function () {
  console.log("Lightbox is shown");
});
