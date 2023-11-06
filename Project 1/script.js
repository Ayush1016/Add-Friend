var suggestion = document.querySelector("h5")
var add = document.querySelector("#add")
var remove = document.querySelector("#remove")

add.addEventListener("click",function(){
        suggestion.innerHTML=" Friend Request Sent"
        suggestion.style.color="green"
       
})

remove.addEventListener("click",function(){
    suggestion.innerHTML="Stranger"
    suggestion.style.color="red"
})



