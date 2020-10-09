const cartButton = document.querySelector('.buttons__bascet')
const modal =document.querySelector(".modal");
const close =document.querySelector(".modal-close");

cartButton.addEventListener("click", function(event){
    modal.classList.add('open')
});

close.addEventListener("click", function(event){
    modal.classList.remove('open')
});
