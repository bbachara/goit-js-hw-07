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

// first option - forEach
galleryMarkup.forEach((div) => {
  div.addEventListener("click", (event) => {
    event.preventDefault();

    const instance = basicLightbox.create(
      `
        <img src="${div.querySelector("img").dataset.source}" alt="${
        div.querySelector("img").alt
      }">
      `,
      {
        onShow: (instance) => {
          document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
              instance.close();
            }
          });
        },
      }
    );

    instance.show();
  });
});

// second option - .map
// galleryMarkup.map((div) => {
//   const instance = basicLightbox.create(
//     `
//       <img src="${div.querySelector("img").dataset.source}" alt="${
//       div.querySelector("img").alt
//     }">
//     `,
//     {
//       onShow: (instance) => {
//         document.addEventListener("keydown", (e) => {
//           if (e.key === "Escape") {
//             instance.close();
//           }
//         });
//       },
//     }
//   );

//   div.addEventListener("click", (event) => {
//     event.preventDefault();
//     instance.show();
//   });

//   return instance;
// });
