
let burger = document.querySelector(".burger")
let burger__modal = document.querySelector(".burger__modal")

burger.addEventListener("click" , () => {
    console.log("ok");
    burger__modal.classList.toggle("burger__modal__open")

})


// car modal 

let car__modal = document.querySelector(".cars__modal")
let cars__card = document.querySelectorAll(".cars__card")
let close__card = document.querySelector(".close__card")
cars__card.forEach(item => {
    item.addEventListener("click", () =>{
        console.log("ok")
        car__modal.classList.add("cars__modal__open")
    })
    close__card.addEventListener("click", () =>{
        console.log("ok")
        car__modal.classList.remove("cars__modal__open")
    })
})

// close__card.addEventListener("click", () => {
//     cars__modal.classList.remove("cars__modal__open")
// })