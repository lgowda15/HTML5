document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.querySelector(".gallery");
    const lightbox = document.querySelector(".lightbox");
    const lightboxImage = document.querySelector(".lightbox-image");
    const closeBtn = document.querySelector(".close");
    
    gallery.addEventListener("click", function(e) {
      if (e.target.tagName === "IMG") {
        const imgSrc = e.target.getAttribute("src");
        lightboxImage.setAttribute("src", imgSrc);
        lightbox.style.display = "flex";
      }
    });
    
    closeBtn.addEventListener("click", function() {
      lightbox.style.display = "none";
    });
  });
  