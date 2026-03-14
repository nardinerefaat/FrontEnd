// NAV BUTTONS
let homeBtn = document.getElementById("homeBtn")
let shopBtn = document.getElementById("shopBtn")
let aboutBtn = document.getElementById("aboutBtn")
let contBtn = document.getElementById("contactBtn")

// OTHER ELEMENTS
let prdBox = document.getElementById("row")
let acc = document.getElementById("acc")
let purch = document.getElementById("purchases")
let signup = document.getElementById("signup")

// CONTACT BUTTON
let contactBtn = document.querySelector("#contact button")


// NAVIGATION
if(purch){
purch.addEventListener("click",function(){
window.location.href="wishlist.html"
})
}

if(aboutBtn){
aboutBtn.addEventListener("click",function(){
window.location.href="about.html"
})
}

if(homeBtn){
homeBtn.addEventListener("click",function(){
window.location.href="index.html"
})
}

if(shopBtn){
shopBtn.addEventListener("click",function(){
window.location.href="shop.html"
})
}

if(contBtn){
contBtn.addEventListener("click",function(){
window.location.href="contact.html"
})
}

if(acc){
acc.addEventListener("click",function(){
window.location.href="login.html"
})
}

if(signup){
signup.addEventListener("click",function(){
window.location.href="account.html"
})
}


// CONTACT CONFIRMATION
if(contactBtn){

contactBtn.addEventListener("click",function(event){

const confirmation = confirm("Do you really want to call +2145486?")

if(!confirmation){
event.preventDefault()
}

})

}
