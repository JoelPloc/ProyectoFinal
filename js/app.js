const leftBtm = document.querySelector("#btmIzquierdo");
const rightBtm = document.querySelector("#btmDerecho");
const leftBtm1 = document.querySelector("#btmIzquierdo1");
const rightBtm1 = document.querySelector("#btmDerecho1");
const leftBtm2 = document.querySelector("#btmIzquierdo2");
const rightBtm2 = document.querySelector("#btmDerecho2");

const content = document.querySelector(".prod");
const content1 = document.querySelector(".prod1");
const content2 = document.querySelector(".prod2");

rightBtm.addEventListener("click", ()=>{
    content.scrollLeft +=210;
})

leftBtm.addEventListener("click", ()=>{
    content.scrollLeft -=210;
})


rightBtm1.addEventListener("click", ()=>{
    content1.scrollLeft +=210;
})

leftBtm1.addEventListener("click", ()=>{
    content1.scrollLeft -=210;
})

rightBtm2.addEventListener("click", ()=>{
    content2.scrollLeft +=210;
})

leftBtm2.addEventListener("click", ()=>{
    content2.scrollLeft -=210;
})