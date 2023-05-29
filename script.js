window.addEventListener("load", function() {
    const patrate = document.querySelector(".container");
    const buton = document.querySelector(".patrat");

    buton.addEventListener("click", ()=> {
        const clonedButton = buton.cloneNode(true);
        patrate.appendChild(clonedButton);
    });
});

const p = document.querySelector("p")
p.addEventListener("click", ()=>{
    p.classList.remove("paragraf1")
    p.classList.add("paragraf2")
})