//your code here
let evaluatedText = document.getElementById("evaluatedText");
let letterCount = document.getElementById("letterCount");

evaluatedText.addEventListener("input",(e)=>{
	letterCount.textContent = e.target.value.length
})
