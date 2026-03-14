

let homeBtn = document.getElementById("headBtn home")
let shopBtn = document.getElementById("headBtn Shop")
let aboutBtn = document.getElementById("headBtn about")
let contBtn = document.getElementById("headBtn cont") 
let prdBox = document.getElementById("row")
let acc = document.getElementById("acc")
let signup = document.getElementById("signup")
let purch = document.getElementById("purchases")
let contact = document.querySelector("#contact button")
let prd1 = document.getElementById("prd1")
let headBtn = document.getElementById("headBtn");
 
 
purch.addEventListener('click' , function(){
    window.location.replace('wishlist.html');
})
aboutBtn.addEventListener('click' , function(){
    window.location.replace('about.html');
})
homeBtn.addEventListener('click' , function(){
    window.location.replace('index.html');
})
shopBtn.addEventListener('click' , function(){
    window.location.replace('shop.html');
})
contBtn.addEventListener('click' , function(){
    window.location.replace('contact.html');
})
acc.addEventListener('click' , function(){
    window.location.replace('login.html');
})
signup.addEventListener('click' , function(){
    window.location.replace('account.html');
})




let contactBtn = document.querySelector("#contact button"); // Selects the button inside #contact

contactBtn.addEventListener('click', function (event) {
    const confirmation = confirm("Do you really want to call +2145486?");
    if (!confirmation) {
        event.preventDefault(); // Prevent the default action
    }
});


