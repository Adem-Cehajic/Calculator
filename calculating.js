const buts = document.querySelectorAll("button");
const screen = document.querySelector(".top");
const ans = document.querySelector(".bottom");
buts.forEach((button) => {
    button.addEventListener("click", () => {
    if(button.className == "equal") {
        ans.innerHTML = String(screen.innerHTML) + '=' + eval(String(screen.innerHTML));
        screen.innerHTML = '';
    }
    else {
    screen.innerHTML = screen.innerHTML + String(button.innerHTML);
    }})
});