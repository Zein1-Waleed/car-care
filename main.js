ScrollReveal().reveal(".about .container",{delay:1,opacity:0,distance: '50px',reset: true})
ScrollReveal().reveal(".services .flex",{delay:1,opacity:0,distance: '50px',reset: true})



let menu  = document.getElementById("menu")
let navlist = document.getElementById("nav-list")

menu.addEventListener("click",()=>{
    navlist.classList.toggle("active")
})

let modalIcon = document.querySelector("#modal-icon h3");
let modal = document.getElementById("modal")
let modalImg = document.querySelector(".modal img")
let certifimages = document.getElementById("cetifimages").children;


for(let i = 0; i < certifimages.length;i++){
    certifimages[i].addEventListener("click",(e)=>{
        modalImg.src = e.target.src
        modal.classList.add('active')
    })
}


modalIcon.addEventListener("click",()=>{
    modal.classList.remove("active")
})