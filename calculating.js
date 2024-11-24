const buts = document.querySelectorAll("button");
const screen = document.querySelector(".top");
const ans = document.querySelector(".bottom");
let answer = 0;
buts.forEach((button) => {
    button.addEventListener("click", () => {
    if(button.className == "equal") {
        answer = eval(String(screen.innerHTML));
        ans.innerHTML = String(screen.innerHTML) + '=' + eval(String(screen.innerHTML));
    }
    else {
        if(button.className == "clear"){
            screen.innerHTML = '';
        }
        else{
            if(button.className == "answer"){
                screen.innerHTML = screen.innerHTML + String(answer);
            }
            else {
                screen.innerHTML = screen.innerHTML + String(button.innerHTML);
            }
        }
    }})
});