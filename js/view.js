
// let slidePosition = 0;
// const slides = document.getElementsByClassName("col-1");
// const totalSlide = slides.length;

// console.log(slides);

// document.getElementById("prev");

// function prev(){
//     moveTonextSlide();
// }    


// document.getElementById("next");

// function next(){
//     moveToprevSlide();
// }

// function updateSlidePosition(){
//     for(let slide of slides){
//         slide.classList.remove("carosel-image-visible");
//         slide.classList.add("carosel-image-hidden");
//     }

//     slides[slidePosition].classList.add("carosel-image-visible");
// }

// function moveTonextSlide(){
//     if(slidePosition === totalSlide - 1){
//         slidePosition = 0;
//     }
//     else{
//         slidePosition++;
//     }
//     updateSlidePosition();
// }


// function moveToprevSlide(){
//     if(slidePosition === 0){
//         slidePosition = totalSlide - 1;
//     }
//     else{
//         slidePosition--;
//     }
//     updateSlidePosition();
// }


let prev = document.getElementById("prev");
let next = document.getElementById("next");
let prevleft = document.getElementsByClassName("button-left");

function nextBtn(){
    let slides = document.getElementsByClassName("col-1");
    // let wrapper = document.getElementsByClassName("images-container");
    let totalSlide = slides.length;
    console.log(slides);
    for(let slide of slides){
        console.log("before if");
        // slide.style.display = "inline-block";

        // slide.style.width = "5000px";
        // slide.style.overflow = "scroll";
        if(totalSlide - 1){
            console.log("after if");
            slide.style.display = "block";
            // slide.style.overflowX = "scroll";
            // slide.style.overflowY = "hidden";    
        }
        
    }
}