var image = document.getElementById('image-1');
var image2 = document.getElementById('image-2');
var image3 = document.getElementById('image-3');
var image4 = document.getElementById('image-4');
image.addEventListener('click', function(){
  
  //for the image select the main image and then just change the src of the main image according to the event listener of the small images
})

 var minus = document.getElementById('minus');
    var text = document.getElementById('text-change');
    var count = text.textContent;
    
var plus  = document.getElementById('plus');
minus.addEventListener('click', function(){
count--;
if(text.textContent == 0){
    count++;
    text.textContent = count;
}
else{

    text.textContent = count;
}

})

plus.addEventListener('click', function(){
    count++;
    
    text.textContent = count;
    
})
var cart = document.querySelector('.cart-logo');
var cart2  = document.querySelector('.cart');
cart.addEventListener('click', function(){
    cart2.classList.toggle('cart');
})