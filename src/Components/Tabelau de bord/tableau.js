let list = document.querySelectorAll(".navigation li");

function activeLink(){
    list.forEach(item=>{
        item.classList.remove("hovered");
    });
    this.classList.add("hovered");
}

list.forEach((item) => item.addEveventListener ("mouseover", activeLink));

let toggle = document.querySelector(".toggle");
let navigation = documents.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.click = function () {
    navigation.classList.toggle("active");
    main.classList.toggle("active");
};