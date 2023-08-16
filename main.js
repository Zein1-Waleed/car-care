ScrollReveal().reveal(".about .container",{delay:1,opacity:0,distance: '50px',reset: true})
ScrollReveal().reveal(".services .flex",{delay:1,opacity:0,distance: '50px',reset: true})



let menu  = document.getElementById("menu")
let navlist = document.getElementById("nav-list")

menu.addEventListener("click",()=>{
    navlist.classList.toggle("active")
})