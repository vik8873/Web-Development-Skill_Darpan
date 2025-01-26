

let user=document.getElementById("userinput")
document.getElementById("submitbtn").addEventListener("click",() => {
    let msg = document.getElementById("output")
    let password=user.value
if (password.length < 8) {
    msg.textContent="please enter atleast 8 character"
    msg.style.color="red"
    
} else if(!/[A-Z]/.test(password)){
    msg.textContent="please enter atleast a uppercase  character" 
    msg.style.color="red"
}
else if(!/[0-9]/.test(password)){
    msg.textContent="please enter atleast a digit between [0-9]"
    msg.style.color="red"
}
else {
    msg.textContent="Congatulations! Your Password Submitted successfully"
    msg.style.color="Green"
    alert("Congatulations! Your Password Submitted successfully")
}
    
})

