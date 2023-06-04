const btn = document.getElementById("btn")
const Mybg = document.querySelector(".herosec")
const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

btn.addEventListener("click", () => {
    let color = "#";
    for(let i = 0; i < 6; i++){
        color += hex[randomhex()];
    }
    Mybg.style.backgroundColor = color
    console.log(color)
})

function randomhex () {
    return Math.floor(Math.random () * hex.length);
}