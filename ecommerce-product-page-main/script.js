var image_active = document.getElementById('image-down');
var image1 = document.getElementById('image-1');
var image2 = document.getElementById('image-2');
var image3 = document.getElementById('image-3');
var image4 = document.getElementById('image-4');
image1.addEventListener('click', function(){
  image_active.src = "images/image-product-1.jpg";
  //for the image select the main image and then just change the src of the main image according to the event listener of the small images
})
image2.addEventListener('click', function(){
    image_active.src = "images/image-product-2.jpg";
})
image3.addEventListener('click', function(){
    image_active.src = "images/image-product-3.jpg";
})
image4.addEventListener('click', function(){
    image_active.src = "images/image-product-4.jpg";
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
    cart2.classList.toggle('cart-item');
})