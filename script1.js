var button = document.getElementsByTagName("button")[0];
var buttonTwo = document.getElementsByClassName("button2")[0];
var questionTwo = document.getElementsByClassName("qTwo");
var answerTwo = document.getElementsByClassName("q");
var wrongTwo = document.getElementsByClassName("wTwo");


	button.addEventListener("click", function () {
		if(questionTwo = answerTwo){
			alert("You're Correct!!!");
		}
	})

	questionTwo === answerTwo;




	buttonTwo.addEventListener("click", function () {
		if(questionTwo = wrongTwo){
			alert("You're Wrong!!!");
		}
	})
	 questionTwo === wrongTwo;