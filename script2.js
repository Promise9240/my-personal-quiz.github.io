var button = document.getElementsByTagName("button")[0];
var buttonThree = document.getElementsByClassName("button3")[0];
var questionThree = document.getElementsByClassName("qThree");
var wrongThree = document.getElementsByClassName("wThree");
var answerThree = document.getElementsByClassName("r");


button.addEventListener("click", function () {
	if(questionThree = wrongThree){
		alert("You're Wrong!!!");
	}
})

questionThree === wrongThree;




buttonThree.addEventListener("click", function () {
	if (questionThree = answerThree){
		alert("You're Correct!!!");
	}
})
questionThree === answerThree;