let button = document.getElementById("icone")
button.addEventListener("click", () => {
    let nav = document.getElementById("nav")
    let ul = document.getElementById("ul")
    nav.classList.toggle("nav")
    ul.classList.add("ul2")
    ul.classList.remove("ul1")
})