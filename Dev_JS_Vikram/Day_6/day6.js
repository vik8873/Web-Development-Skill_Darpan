let target = Math.floor(Math.random()*10+1)
let i = 1
document.getElementById("btn").addEventListener("click", () => {
    let b = parseInt(document.getElementById("user").value, 10)
    let a = document.getElementById("output")
    if (b===target) {
        a.textContent="Correct! You Win";
        a.style.color="green"
    }
    else {
        a.textContent=`You Entered Wrong number ${i} times` 
        a.style.color="Red"
        i++
    }
})