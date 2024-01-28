import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const picturesContainer = document.querySelector(`.gallery`);

const galleryMarkup = galleryItems.map((image) => {
  const liElement = document.createElement("li");

  const linkImg = document.createElement(`a`);
  linkImg.className = `gallery__item`;
  linkImg.href = image.original;

  const imgElement = document.createElement(`img`);
  imgElement.className = `gallery__image`;
  imgElement.src = image.preview;
  imgElement.alt = image.description;
  imgElement.dataset.source = image.original;

  linkImg.appendChild(imgElement);
  liElement.appendChild(linkImg);

  return liElement;
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
