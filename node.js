function change(event)
{
    var color="yellow";
    event.style.color=color;
}


// ----------------------unorderedlist/menuicon/closemenu/background/parent-container-----------------------------------------------------


var unorderedlist=document.querySelector(".unorderedlist")
// var closeicon=document.querySelector(".btn") 
var background=document.querySelector(".background")
var menulist=document.querySelector(".menuicon")
var parent=document.querySelector(".parent-container")

menulist.addEventListener("click",function(event)
{
  event.preventDefault()
  unorderedlist.style.display="block"
  closeicon.style.display="block" 
  background.style.display="block"
  parent.style.display="block"
})

var closeicon=document.getElementById("closeit") 

 closeicon.addEventListener("click",function()
{
  // event.preventDefault()
  // parent.style.display="none"
  background.style.display="none"
  closeicon.style.display="none"
  unorderedlist.style.display="none"
} )



