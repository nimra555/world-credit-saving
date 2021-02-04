
let slidePosition = 0;
const slides = document.getElementsByClassName("col-1");
const totalSlide = slides.length;

console.log(slides);

document.getElementById("prev");

function prev(){
    moveTonextSlide();
}    


document.getElementById("next");

function next(){
    moveToprevSlide();
}

function updateSlidePosition(){
    for(let slide of slides){
        slide.classList.remove("carosel-image-visible");
        slide.classList.add("carosel-image-hidden");
    }

    slides[slidePosition].classList.add("carosel-image-visible");
}

function moveTonextSlide(){
    if(slidePosition === totalSlide - 1){
        slidePosition = 0;
    }
    else{
        slidePosition++;
    }
    updateSlidePosition();
}


function moveToprevSlide(){
    if(slidePosition === 0){
        slidePosition = totalSlide - 1;
    }
    else{
        slidePosition--;
    }
    updateSlidePosition();
}