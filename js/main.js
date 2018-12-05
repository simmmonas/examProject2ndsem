//Slider
let sliderImages = document.querySelectorAll('.slide'),
    arrowLeft = document.querySelector('#arrow-left'),
    arrowRight = document.querySelector('#arrow-right'),
    current = 0;

//Clear all images
function reset(){
    for(let i = 0; i < sliderImages.length; i++){
      sliderImages[i].style.display = 'none';
    }
}
//Initializing the slider
function startSlide(){
    reset()

//show previous
function slideLeft(){
    reset();
    sliderImages[current - 1].style.display = 'block';
    current--;
}



//Left-arrow-click
arrowLeft.addEventListener('click', function(){
    if(current === 0){
        current = sliderImages.length;
        
}
    
//Show next
function slideRight(){
    reset();
    sliderImages[current + 1].style.display = 'block';
    current++;
}

    //Right-arrow-click
arrowRight.addEventListener('click', function(){
    if(current === sliderImages.length - 1){
        current = -1;
        
}
    
});
      startSlide();
    slideLeft();
    slideRightt();
  
    
    
    
