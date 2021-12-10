var blocks=document.querySelectorAll(".block")
var classes=[]
for (let i=0;i<blocks.length;i+=1)
{
	blocks[i].addEventListener("click",add_effect)
	classes.push(blocks[i].classList[0])
}
console.log(classes)
var length=classes.length;

function add_effect()
{
	var block=this.classList[0];
	var class_name="."+block;
	document.querySelector(class_name).classList.add("selected");
	setTimeout(function(){document.querySelector(class_name).classList.remove("selected");},100)
}
function blink(class_namee)
{
	var class_name="."+class_namee;
	document.querySelector(class_name).classList.add("selected");
	setTimeout(function(){document.querySelector(class_name).classList.remove("selected");},200)
}
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
var i=0
while (i<=5)
{
	var max_limit=Math.random()*length
	var index=Math.floor(max_limit);
	var class_name="."+classes[index];
	document.querySelector(class_name).classList.add("selected");
	setTimeout(function(){document.querySelector(class_name).classList.remove("selected");},200)
	sleep(200);
	i+=1;
}
