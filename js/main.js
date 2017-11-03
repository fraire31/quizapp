

var quizAnswers = [ 'american indians', 'true', 'for thier land', 'false', 'pencil', 42,
'ladybug', 39, 'drug overdoses', 'orange'];

//answers to quiz
var answerone = quizAnswers[0]
var answertwo = quizAnswers[1]
var answerthree = quizAnswers[2]
var answerfour = quizAnswers[3]
var answerfive = quizAnswers[4]
var answersix = quizAnswers[5]
var answerseven = quizAnswers[6]
var answereight = quizAnswers[7]
var answernine = quizAnswers[8]
var answerten = quizAnswers[9]

var answers = [answerone, answertwo, answerthree, answerfour, answerfive,
answersix, answerseven, answereight, answernine, answerten];

//users input values
var firstanswer = document.getElementById('firstanswer').value.toLowerCase()
var secondanswer = document.getElementById('secondanswer').value
var thirdanswer = document.getElementById('thirdanswer').value.toLowerCase()
var fourthanswer = document.getElementById('fourthanswer').value
var fifthanswer = document.getElementById('fifthanswer').value.toLowerCase()
var sixthanswer = document.getElementById('sixthanswer').value.toLowerCase()
var seventhanswer = document.getElementById('seventhanswer').value.toLowerCase()
var eightanswer = document.getElementById('eightanswer').value.toLowerCase()
var ninthanswer = document.getElementById('ninthanswer').value.toLowerCase()
var tenthanswer = document.getElementById('tenthanswer').value 

var inputValues = [ firstanswer, secondanswer, thirdanswer, fourthanswer,
fifthanswer, sixthanswer, seventhanswer, eightanswer, ninthanswer, tenthanswer];

//divs to change color when user get answer corrent or incorrect
var firstquestion = document.getElementById('firstquestion')
var secondquestion = document.getElementById('secondquestion')
var thirdquestion = document.getElementById('thirdquestion')
var fourthquestion = document.getElementById('fourthquestion')
var fifthquestion = document.getElementById('fifthquestion')
var sixthquestion = document.getElementById('sixthquestion')
var seventhquestion = document.getElementById('seventhquestion')
var eightquestion = document.getElementById('eightquestion')
var ninthquestion = document.getElementById('ninthquestion')
var tenthquestion = document.getElementById('tenthquestion')

var divQuestions = [ firstquestion, secondquestion, thirdquestion, fourthquestion,
fifthquestion, sixthquestion, seventhquestion, eightquestion, ninthquestion,tenthquestion
]

function submitquiz(){
	for (i = 0; i < quizAnswers.length; i++){
		if (answerone == firstanswer){
			firstquestion.setAttribute('style', 'color: green;')
			return
		}else{
			firstquestion.setAttribute('style', 'color:red;')
		}
		if (answertwo == secondanswer){
			secondquestion.setAttribute('style','color:green;')
			return
		}else{
			secondquestion.setAttribute('style','color:red;')
		}
		if (answerthree == thirdanswer){
			thirdquestion.setAttribute('style','color:green;')
			return
		}else{
			thirdquestion.setAttribute('style','color:red;')
		}
		if (answerfour == fourthanswer){
			fourthquestion.setAttribute('style','color:green;')
			return
		}else{
			fourthquestion.setAttribute('style','color:red;')
		}
		if (answerfive == fifthanswer){
			fifthquestion.setAttribute('style','color:green;')
			return
		}else{
			fifthquestion.setAttribute('style','color:red;')
		}
		if (answersix == sixthanswer){
			sixthquestion.setAttribute('style','color:green;')
			return
		}else{
			sixthquestion.setAttribute('style','color:red;')
		}
		if (answerseven == seventhanswer){
			seventhquestion.setAttribute('style','color:green;')
			return
		}else{
			seventhquestion.setAttribute('style','color:red;')
		}
		if (answereight == eightanswer){
			eightquestion.setAttribute('style','color:green;')
			return
		}else{
			eightquestion.setAttribute('style','color:red;')
		}
		if (answernine == ninthanswer){
			ninthquestion.setAttribute('style','color:green;')
			return
		}else{
			ninthquestion.setAttribute('style','color:red;')
		}
		if (answerten == tenthanswer){
			tenthquestion.setAttribute('style','color:green;')
			return
		}else{
			tenthquestion.setAttribute('style','color:red;')
		}
	}
}



