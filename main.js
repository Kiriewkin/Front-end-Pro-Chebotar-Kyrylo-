let slideIndex = 0;
showSlides(slideIndex);

function showSlides(index) {
    const slides = document.getElementsByClassName("carousel-item");
    const dots = document.getElementsByClassName("dot");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    if (index >= slides.length) { slideIndex = slides.length - 1; }
    if (index < 0) { slideIndex = 0; }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";

    if (slideIndex === 0) {
        prevBtn.style.display = "none";
    } else {
        prevBtn.style.display = "block";
    }

    if (slideIndex === slides.length - 1) {
        nextBtn.style.display = "none";
    } else {
        nextBtn.style.display = "block";
    }
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n - 1);
}
