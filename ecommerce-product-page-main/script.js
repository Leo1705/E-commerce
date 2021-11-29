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
image_active.addEventListener('click', function(){
    
})

 var minus = document.getElementById('minus');
    var text = document.getElementById('text-change');
    //!?od tuja
    var add_to_card  = document.getElementById('add-to-card');
    var text_storage = document.getElementById('storage-cart');
    var text_price = document.getElementById('final-price');
    //!?do tuja
    var delete_icon = document.getElementById('delete-icon');
    var cart_item = document.getElementById('cart-item');
    var btn_check = document.getElementById('btn-check');
    var cart_text = document.getElementById('cart-text');
    var old_text = document.getElementById('old-price');
    var notification = document.getElementById('notification');
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
    if(cart2.classList.contains('cart')){
        cart2.style.display  = "block";
        delete_icon.style.display = "block";
        text_price.style.display = "inline-block";
         text_storage.style.display  = "inline-block";       
         old_text.style.display = "inline-block";

    }
    else{
        delete_icon.style.display  ="none";
        text_storage.style.display = "none";
        text_price.style.display = "none";
    old_text.style.display = "none";
    }
    
})
add_to_card.addEventListener('click', function(e){
    if(text.textContent == "0"){
        alert("You cannot purchase nothing! Please select.");
    }
    else{
text_storage.textContent = text.textContent;
text_price.textContent =  "$" + text.textContent * 125;
cart_item.style.display = "flex";
btn_check.style.display = "block";
cart_text.style.display = "none";
notification.textContent = text.textContent;
notification.style.display = "inline-flex";
    }

})
delete_icon.addEventListener('click', function(e){
cart_item.style.display = "none";
btn_check.style.display = "none";
cart_text.style.display = "block";

    notification.style.display = "none";

})
