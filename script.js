//selecting pop-box popoverlay button
var popoverlay=document.querySelector(".popoverlay")
var popbox=document.querySelector(".pop-box")
var addpopbutton=document.getElementById("add-pop-button")

addpopbutton.addEventListener("click",function(){
    popoverlay.style.display="block"
    popbox.style.display="block"
})



//select cancel button
var cancelpop=document.getElementById("cancel-pop")
cancelpop.addEventListener("click",function(event){
    event.preventDefault()
    popoverlay.style.display="none"
    popbox.style.display="none"
})


//select container,add-book,book-title-input,book-author-input,book-description-input

var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var booktitleinput=document.getElementById("book-title-input")
var bookauthorinput=document.getElementById("book-author-input")
var bookdescriptioninput=document.getElementById("book-description-input")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
    <h5>${bookauthorinput.value}</h5>
    <p>${bookdescriptioninput.value}</p>
    <button onclick="deletebk(event)">Delete</button>`
    container.append(div)
    popoverlay.style.display="none"
    popbox.style.display="none"
})

function deletebk(event)
{
    event.target.parentElement.remove()
}