var ele = document.body.querySelector(".box");
var eleAnswer = document.body.querySelector(".answer");

var question =prompt("what animal do i want?");

// this is the conditional of my program

if(question=="cat" || question=="CAT"||question=="Cat"){
    ele.innerHTML="you got the right animal, which is a cat";
}else if(question=="dog" || question=="DOG"||question=="Dog"){
    ele.innerHTML="you got the right animal, which is a dog";
} else{
    ele.innerHTML="sorry the animal was a cat or dog. u stink";
}

var question_two=Number(prompt("what is the first number"));
var question_three=Number(prompt("what is the second number?"));

if(question_two>3&&question_three<10){
    eleAnswer.innerHTML="the numbers are good";
}else{
    eleAnswer.innerHTML="the numbers are bad";
}
// &&s mean it has to run true for both variables
// === is used for strict equality while == is used for loose equality