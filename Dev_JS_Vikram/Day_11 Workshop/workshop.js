
 let a = []

function addrating() {
    let rating = parseInt(document.getElementById("rating").value)
    
    if (rating>=1 && rating <=10) {
        a.push(parseInt(rating))
        document.getElementById("rating").value = "";
        alert("Rating added!")
    } else {
        alert("Please enter a valid rating between 1 and 10.");
    
    }
}

function calculateavg() {
    if (a.length !==0) {
         let result = document.getElementById("result")
         let  finalRating=0;
         for (let index = 0; index < a.length; index++) {
            let b = (a[index])
            finalRating = (finalRating+b)
            
        }
        finalRating = finalRating/a.length
        alert (`Final Rating of movie is ${finalRating}`)
        result.innerHTML = 
        `Final Rating: ⭐ ${ finalRating } / 10`;
}
else{
    alert("No ratings submitted yet!")
}
}