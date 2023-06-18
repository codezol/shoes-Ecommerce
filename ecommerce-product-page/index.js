let review = document.querySelector(".review");
let checkoutReview = document.querySelector(".checkoutReview");
let productImgs = document.querySelectorAll(".products-imgs div img");
let checkotImgs = document.querySelectorAll(".chckout-container .imgs img");
const closebtn = document.querySelector(".close")
//handling pictures clicks
const  setReview = (img = "product-1",container = review) => {
    container.classList.remove("product-1","product-2","product-3","product-4")
    let clickedList = document.querySelectorAll(".clicked")
    clickedList.forEach(clicked => {
        clicked.classList.remove("clicked")
    })
    container.classList.add(img);
    
}
setReview()
setReview("product-1",checkoutReview)
function addClickBehavior(arr,container){
    
    arr.forEach((img,index)=> {
        img.addEventListener("click", () => {
            setReview(`product-${index + 1}`,container)
            img.classList.add("clicked")
        })
    })
}
addClickBehavior(productImgs,review)
addClickBehavior(checkotImgs,checkoutReview)
//handling the products number 
const productNumber = document.querySelector(".product-number");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
plus.addEventListener("click", () => {
   
    productNumber.innerText = parseInt(productNumber.innerText) + 1
})
minus.addEventListener("click", () => {
   if(productNumber.innerText > 0) {
    productNumber.innerText = parseInt(productNumber.innerText) - 1
   }
    
})
//display cart
const cartIcon = document.querySelector(".cart-icon");
const cart = document.querySelector(".cart-display")
cartIcon.addEventListener("click", () => {
    if(cart.style.display == "none"){
        cart.style.display = "flex"
    }else {
        cart.style.display = "none"
    }
})
//handle add to card 
const empty_cart = document.querySelector(".empty-cart");
const cartContent = document.querySelector(".cartContent")

const addToCard = document.querySelector(".cart-btn");
const total = document.querySelector(".total");
const result = document.querySelector(".result");
const deleteBtn = document.querySelector(".delete");
const productNum = document.querySelector(".product-num");
addToCard.addEventListener("click", () => {
   if(parseInt( productNumber.innerText) === 0){
    cartContent.style.display = "none"
    empty_cart.style.display = "block"
   }else{
    cartContent.style.display = "flex"
    empty_cart.style.display = "none"
   }
   if(parseInt(productNumber.innerText) > 0){
    productNum.style.display = "block"
    productNum.innerText = productNumber.innerText
}
    total.innerText = productNumber.innerText;
    result.innerText = ` $${parseInt( productNumber.innerText) * 125}.00`
})
deleteBtn.addEventListener("click", () => {
     productNum.style.display = "none"
    cartContent.style.display = "none"
    empty_cart.style.display = "block"
})
//handle the moda display
const checkoutBtn = document.querySelector(".checkoutBtn");
const checkoutContainer = document.querySelector(".chckout-container")
review.addEventListener("click", () => {
    checkoutContainer.style.display = "flex";
    cart.style.display = "none";
    closebtn.style.display = "block";
})
//handle close click

console.log(closebtn)
closebtn.addEventListener("click", () => {
    console.log("clicked");
    checkoutContainer.style.display = "none"
})


//handle clicking left and right arrow
const next = document.querySelector(".icon-next");
const previous = document.querySelector(".icon-previous");
const responsivePrevious = document.querySelector(".responsive-previous")
const responsiveNext = document.querySelector(".responsive-next")
next.addEventListener('click', () => {
    handlePreviousOrNextClick("+",checkoutReview)

})
responsiveNext.addEventListener('click', () => {
    handlePreviousOrNextClick("+",review)

})
previous.addEventListener("click", () => {
    
    handlePreviousOrNextClick("-",checkoutReview)
})
responsivePrevious.addEventListener("click", () => {

    handlePreviousOrNextClick("-",review)
})
function getCurrentImg(){
    const currentImg = document.querySelector(".clicked");
    return Array.from(checkotImgs).indexOf(currentImg)
}
function handlePreviousOrNextClick(sign,review){
    next.classList.remove("last")
    responsiveNext.classList.remove("last")
    const currentImgIndex = getCurrentImg();
    previous.classList.remove("last")
    responsivePrevious.classList.remove("last")
    let ImgIndex;
    if(sign === "+"){
        ImgIndex = currentImgIndex + 1
    }else{
        ImgIndex = currentImgIndex - 1
    }
    setReview(`product-${ImgIndex + 1}`,review)
    
    checkotImgs.forEach((img,index) => {
        
        if(ImgIndex === index){
            img.classList.add("clicked")
            
        }
    })
    if(ImgIndex >= checkotImgs.length - 1) {
        next.classList.add("last")
        responsiveNext.classList.add("last")
    }else if(ImgIndex < 1){
        console.log("previous")
        previous.classList.add("last")
        responsivePrevious.classList.add("last")
    }
}
//handle menu click and colse click
const menu = document.querySelector(".menu");
const ul = document.querySelector("header ul");
const closeMenu = document.querySelector(".close-menu");
const dark = document.querySelector(".dark")
menu.addEventListener('click', () => {
  
        ul.style.display = "block";
        closeMenu.style.display = "block";
        dark.style.display = "block"
        cart.style.display = "none"
})
closeMenu.addEventListener('click', () => {
        ul.style.display = "none"
        dark.style.display = "none";
        
})
