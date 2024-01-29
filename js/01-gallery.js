import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const picturesContainer = document.querySelector(`.gallery`);

const galleryMarkup = galleryItems.map((image) => {
  const divGallery = document.createElement(`div`);
  divGallery.className = `gallery__item`;

  const linkImg = document.createElement(`a`);
  linkImg.className = `gallery__link`;
  linkImg.href = image.original;

  const imgElement = document.createElement(`img`);
  imgElement.className = `gallery__image`;
  imgElement.src = image.preview;
  imgElement.alt = image.description;
  imgElement.dataset.source = image.original;

  linkImg.appendChild(imgElement);
  divGallery.appendChild(linkImg);
  return divGallery;
});

picturesContainer.append(...galleryMarkup);

picturesContainer.addEventListener("click", (event) => {
  event.preventDefault();

  const source = event.target.dataset.source;
  const description = event.target.alt;

  const instance = basicLightbox.create(
    `<img src="${source}" alt="${description}">`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", onKeyPress);
      },
      onClose: (instance) => {
        document.removeEventListener("keydown", onKeyPress);
      },
    }
  );
  instance.show();

  function onKeyPress(event) {
    if (event.key === "Escape") {
      instance.close();
    }
  }
});
