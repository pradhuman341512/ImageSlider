// Referece btn 

var btnLeft = document.getElementById("prev_btn");
var btnRight = document.getElementById("next_btn");

// referece to slider

var slider = document.querySelector('.container .slider');

btnRight.addEventListener('click',nextSlider);

function nextSlider() {
    slider.appendChild(slider.firstElementChild);
}


btnLeft.addEventListener('click',prevSlider);

function prevSlider() {
    slider.prepend(slider.lastElementChild);
}

// Auto sliding

function autoSlide(){
    deleteInterval = setInterval(timer,2000);
    function timer() {
        nextSlider();
    }
}
autoSlide();

// Stop Auto sliding mouse is over

slider.addEventListener('mouseover',deleteAutoSlideing);
btnRight.addEventListener('mousemove',deleteAutoSlideing);
btnLeft.addEventListener('mouseover',deleteAutoSlideing);

function deleteAutoSlideing(){
    clearInterval(deleteInterval);
}


// start auto sliding mouse is leave

slider.addEventListener('mouseleave',autoSlide);
btnRight.addEventListener('mouseleave',autoSlide);
btnLeft.addEventListener('mouseleave',autoSlide);


