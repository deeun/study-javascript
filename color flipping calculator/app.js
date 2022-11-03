let target = document.getElementById("target");

const buttons = document.querySelectorAll(".btn");
buttons.forEach((button)=>{
    button.addEventListener("click", targetColor = () => {
        if(target.innerHTML === "0") {
            target.style.color = "black"
        } else if (target.innerHTML < 0) {
            target.style.color = "red"
        } else if (target.innerHTML > 0) {
            target.style.color = "green"
        }
    })
})

const decrease = () => {
    target.innerHTML = Number(target.innerHTML) -1;
}
const reset = () => {
    target.innerHTML = 0;
}
const increase = () => {
    target.innerHTML = Number(target.innerHTML) + 1;
}

const bgColorChange = () => {
    let randomColor = Math.floor(Math.random()*1000000);
    let colorCode = "#" + randomColor;

    document.getElementById("outer_container").style.backgroundColor = colorCode;
}