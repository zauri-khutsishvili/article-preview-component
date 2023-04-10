const shareSection = document.querySelector(".article-preview__share-section");
const shareButton = document.querySelector(".article-preview__share-button");
const shareButtonReturn = document.querySelector(".article-preview__share-button--clicked");

shareButton.addEventListener("click", () => {
    shareSection.classList.toggle("hidden");
})

shareButtonReturn.addEventListener("click", () => {
    shareSection.classList.add("hidden");
})