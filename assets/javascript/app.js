
//Global Variables

var totalCorrect=0;
var totalWrong=0;

var indexLoop=0; // This is a ghetto loop constructor.

//DOM Element for Reference

var answerDiv= $("#answers");

// # of Questions Gotten Correct or Wrong.

// Timer Variables
var timeClockForQuestion;
var counterOne=15;

var timeClockForAnswerDisplay;
var counterTwo=10;

//Question Array

var answerObjectArray={

    questions : [
        "What is the Capital of Your Mom?",
        "Who is Your Daddy and What Does He Do?",
        "Can Anyone Help Me Here?",
        "Insert Question 4 Here",
        "Will I Get a Good Grade For This Homework?"
    ],

    answerPairs : {
        questionOneAnswers: ["Paris","Who Cares?","Bikini Bottom","Crippling Depression"],
        questionTwoAnswers: ["Gives Me Fatherly Lessons","Beats My Ass","Went to get Milk and Cigarettes and Never Came Back","This is Getting Dark"],
        questionThreeAnswers: ["No","Maybe","Yes","What is Life?"],
        questionFourAnswers: ["place-0","place-1","place-2","place-3"],
        questionFiveAnswers: ["Yes","Yes","Yes","No"]
    }
};

//Hide the Score Section that Will Be Updated in the End.
$("#scoreSection").hide(); 

$(document).ready(function() {

  
    //Initializes the Game
    $("#clickToStartGame").on("click", function() {
        $("#startSection").hide();
        initGame();
        
    });

    function initGame() {
        console.log(totalWrong+" "+"This is totalWrong");
        console.log(totalCorrect+" "+"This is totalCorrect")
        if (indexLoop===0) {
            runClockForQuestion();
            for (var i=0;i<answerObjectArray.answerPairs.questionOneAnswers.length;i++) {
                var newButton=$("<button>").addClass("questionOneButtons"+[i]);
                newButton.addClass("btn btn-info btn-large btn-block");
                var newDiv=$("<div>").css(
                    {"margin" : "20px"}
                                                );
                $(newButton).text(answerObjectArray.answerPairs.questionOneAnswers[i]);
                $(newDiv).append(newButton);
                $(answerDiv).append(newDiv);
            }

            $("#question").text(answerObjectArray.questions[0]);

            $("body").on("click",".questionOneButtons0", function () {
                winnerChickenDinner(answerObjectArray.answerPairs.questionOneAnswers[0]);
                winnerGiphy();
            });

            $("body").on("click",".questionOneButtons1", function () {
                loserChickenDinner(answerObjectArray.answerPairs.questionOneAnswers[0],answerObjectArray.answerPairs.questionOneAnswers[1])
                loserGiphy();
            });

            $("body").on("click",".questionOneButtons2", function () {
                loserChickenDinner(answerObjectArray.answerPairs.questionOneAnswers[0],answerObjectArray.answerPairs.questionOneAnswers[2])
                loserGiphy();
            });

            $("body").on("click",".questionOneButtons3", function () {
                loserChickenDinner(answerObjectArray.answerPairs.questionOneAnswers[0],answerObjectArray.answerPairs.questionOneAnswers[3])
                loserGiphy();
            });
        }

        if (indexLoop===1) {
            runClockForQuestion();
            for (var i=0;i<answerObjectArray.answerPairs.questionTwoAnswers.length;i++) {
                var newButton=$("<button>").addClass("questionTwoButtons"+[i]);
                newButton.addClass("btn btn-info btn-large btn-block");
                var newDiv=$("<div>").css(
                    {"margin" : "20px"}
                                                );
                $(newButton).text(answerObjectArray.answerPairs.questionTwoAnswers[i]);
                $(newDiv).append(newButton);
                $(answerDiv).append(newDiv);
            }
            $("#question").text(answerObjectArray.questions[1]);

            $("body").on("click",".questionTwoButtons0", function () {
                loserChickenDinner(answerObjectArray.answerPairs.questionTwoAnswers[3],answerObjectArray.answerPairs.questionTwoAnswers[0])
                loserGiphy();
            });

            $("body").on("click",".questionTwoButtons1", function () {
                loserChickenDinner(answerObjectArray.answerPairs.questionTwoAnswers[3],answerObjectArray.answerPairs.questionTwoAnswers[1])
                loserGiphy();
            });

            $("body").on("click",".questionTwoButtons2", function () {
                loserChickenDinner(answerObjectArray.answerPairs.questionTwoAnswers[3],answerObjectArray.answerPairs.questionTwoAnswers[2])
                loserGiphy();
            });

            $("body").on("click",".questionTwoButtons3", function () {
                winnerChickenDinner(answerObjectArray.answerPairs.questionTwoAnswers[3]);
                winnerGiphy();
            });
        }

        if (indexLoop===2) {
            runClockForQuestion();
            for (var i=0;i<answerObjectArray.answerPairs.questionThreeAnswers.length;i++) {
                var newButton=$("<button>").addClass("questionThreeButtons"+[i]);
                newButton.addClass("btn btn-info btn-large btn-block");
                var newDiv=$("<div>").css(
                    {"margin" : "20px"}
                                                );
                $(newButton).text(answerObjectArray.answerPairs.questionThreeAnswers[i]);
                $(newDiv).append(newButton);
                $(answerDiv).append(newDiv);
            }
            $("#question").text(answerObjectArray.questions[2]);

            $("body").on("click",".questionThreeButtons0", function () {
                loserChickenDinner(answerObjectArray.answerPairs.questionThreeAnswers[1],answerObjectArray.answerPairs.questionThreeAnswers[0])
                loserGiphy();
            });

            $("body").on("click",".questionThreeButtons1", function () {
                winnerChickenDinner(answerObjectArray.answerPairs.questionThreeAnswers[1]);
                winnerGiphy();
            });

            $("body").on("click",".questionThreeButtons2", function () {
                loserChickenDinner(answerObjectArray.answerPairs.questionThreeAnswers[1],answerObjectArray.answerPairs.questionThreeAnswers[2])
                loserGiphy();
            });

            $("body").on("click",".questionThreeButtons3", function () {
                loserChickenDinner(answerObjectArray.answerPairs.questionThreeAnswers[1],answerObjectArray.answerPairs.questionThreeAnswers[3])
                loserGiphy();
            });
        }
        if (indexLoop===3) {
            runClockForQuestion();
            for (var i=0;i<answerObjectArray.answerPairs.questionFourAnswers.length;i++) {
                var newButton=$("<button>").addClass("questionFourButtons"+[i]);
                newButton.addClass("btn btn-info btn-large btn-block");
                var newDiv=$("<div>").css(
                    {"margin" : "20px"}
                                                );
                $(newButton).text(answerObjectArray.answerPairs.questionFourAnswers[i]);
                $(newDiv).append(newButton);
                $(answerDiv).append(newDiv);
            }
            $("#question").text(answerObjectArray.questions[3]);

            $("body").on("click",".questionFourButtons0", function () {
                loserChickenDinner(answerObjectArray.answerPairs.questionFourAnswers[2],answerObjectArray.answerPairs.questionFourAnswers[0])
                loserGiphy();
            });

            $("body").on("click",".questionFourButtons1", function () {
                loserChickenDinner(answerObjectArray.answerPairs.questionFourAnswers[2],answerObjectArray.answerPairs.questionFourAnswers[1])
                loserGiphy();
            });

            $("body").on("click",".questionFourButtons2", function () {
                winnerChickenDinner(answerObjectArray.answerPairs.questionFourAnswers[2]);
                winnerGiphy();
            });

            $("body").on("click",".questionFourButtons3", function () {
                loserChickenDinner(answerObjectArray.answerPairs.questionFourAnswers[2],answerObjectArray.answerPairs.questionFourAnswers[3])
                loserGiphy();
            });
        }

        if (indexLoop===4) {
            runClockForQuestion();
            for (var i=0;i<answerObjectArray.answerPairs.questionFiveAnswers.length;i++) {
                var newButton=$("<button>").addClass("questionFiveButtons"+[i]);
                newButton.addClass("btn btn-info btn-large btn-block");
                var newDiv=$("<div>").css(
                    {"margin" : "20px"}
                                                );
                $(newButton).text(answerObjectArray.answerPairs.questionFiveAnswers[i]);
                $(newDiv).append(newButton);
                $(answerDiv).append(newDiv);
            }
            $("#question").text(answerObjectArray.questions[4]);

            $("body").on("click",".questionFiveButtons0", function () {
                winnerChickenDinner(answerObjectArray.answerPairs.questionFiveAnswers[0]);
                winnerGiphy();
            });

            $("body").on("click",".questionFiveButtons1", function () {
                winnerChickenDinner(answerObjectArray.answerPairs.questionFiveAnswers[1]);
                winnerGiphy();
            });

            $("body").on("click",".questionFiveButtons2", function () {
                winnerChickenDinner(answerObjectArray.answerPairs.questionFiveAnswers[2]);
                winnerGiphy();
            });

            $("body").on("click",".questionFiveButtons3", function () {
                loserChickenDinner(answerObjectArray.answerPairs.questionFiveAnswers[3],answerObjectArray.answerPairs.questionFiveAnswers[0]);
                loserGiphy();
            });
        }
        
        if (indexLoop===5) {
            clearInterval(timeClockForAnswerDisplay);
            clearInterval(timeClockForQuestion);
            $("#scoreSection").show();
            $("#correctDisplay").text(totalCorrect);
            $("#wrongDisplay").text(totalWrong);
            endGameGiphy();
        }
        
    }

    //Timer Functions

    //Timer Function for When You Need to Answer a Question. This is a setInterval
    function runClockForQuestion() {
        clearInterval(timeClockForQuestion);
        $("#timerHolder").html("TIMER: "+counterOne);
        timeClockForQuestion = setInterval(countDownClockForQuestion, 1000);
    };
  
    function countDownClockForQuestion() {
        counterOne--;
        $("#timerHolder").html("TIMER: "+counterOne);
        if (counterOne<=-1) {
            clearInterval(timeClockForQuestion);
            $("#timerHolder, #question, #answers").empty();
            if (indexLoop===0) {
                $("#answers").text("The Correct Answer: "+'"'+answerObjectArray.answerPairs.questionOneAnswers[0]+'"');
                $("#answers").append("<p>You Pick--Wait! Hold up! You're too much of a coward to pick an answer?</p>");
            }
            if (indexLoop===1) {
                $("#answers").text("The Correct Answer: "+'"'+answerObjectArray.answerPairs.questionTwoAnswers[3]+'"');
                $("#answers").append("<p>You Pick--Wait! Hold up! You're too much of a coward to pick an answer? The first question should be a lot harder. Or at least I think I coded it in that way? Is there a bug in my code?</p>");
            }
            if (indexLoop===2) {
                $("#answers").text("The Correct Answer: "+'"'+answerObjectArray.answerPairs.questionThreeAnswers[2]+'"');
                $("#answers").append("<p>You Pick--Wait! Hold up! You're too much of a coward to pick an answer? The first question should be a lot harder. Or at least I think I coded it in that way? Is there a bug in my code? Am I just repeating over and over again? Is this loop going to stop?</p>");
            }
            if (indexLoop===3) {
                $("#answers").text("The Correct Answer: "+'"'+answerObjectArray.answerPairs.questionFourAnswers[2]+'"');
                $("#answers").append("<p>Please Pick Something Next Time! You're KILLING ME HERE!</p>");
            }
            if (indexLoop===4) {
                $("#answers").text("The Correct Answer: "+'"'+answerObjectArray.answerPairs.questionFiveAnswers[2]+'"');
                $("#answers").append("<p>You're not going to give me a good grade? But I'm Funny?<p>");
            }
            cowardGiphy();
            totalWrong++;
            counterTwo=10;
            runCorrectAnswerDisplay();
        }
    };

    //Timer Function for when the correct answer and your answer is displayed. 
    
    function runCorrectAnswerDisplay() {
        clearInterval(timeClockForAnswerDisplay);
        $("#timerHolder").html("The Second Timer: "+counterTwo);
        timeClockForAnswerDisplay = setInterval(countDownCorrectAnswer, 1000);
    };
  
    function countDownCorrectAnswer() {
        counterTwo--;
        $("#timerHolder").html("The Second Timer: "+counterTwo);
        if (counterTwo<=-1) {
            clearInterval(timeClockForAnswerDisplay);
            indexLoop++;
            console.log(indexLoop+" "+"This is indexLoop");
            counterOne=10;
            $("#timerHolder, #question, #answers, #gif-holder").empty();
            initGame();
        }
    };

    //Functions for When You Click a Button. You Either Get it Correct or Wrong.

    function winnerChickenDinner(answer) {
   
        totalCorrect++;
        counterTwo=10;
        $("#timerHolder, #question, #answers").empty();
        $("#answers").text("The Correct Answer: "+'"'+answer+'"');
        var newDiv=$("<div>").text("You Picked: "+'"'+answer+'"'+". Well Done!");
        $("#answers").append(newDiv);
        clearInterval(timeClockForQuestion);
        runCorrectAnswerDisplay();
    };

    //Functions to display Giphy API
    function loserChickenDinner(answer,wrongAnswer) {
   
        totalWrong++;
        counterTwo=10;
        $("#timerHolder, #question, #answers").empty();
        $("#answers").text("The Correct Answer: "+'"'+answer+'"');
        var newDiv=$("<div>").text("You Picked: "+'"'+wrongAnswer+'"'+". YOU F*****G IDIOT!");
        $("#answers").append(newDiv);
        clearInterval(timeClockForQuestion);
        runCorrectAnswerDisplay();
    };

    function loserGiphy () {
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=lose&api_key=dc6zaTOxFJmzC";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            var randomNumber=Math.floor(Math.random()*10) + 1;
            var newImage=$("<img>");
            newImage.attr("src",response.data[randomNumber].images.fixed_height.url)
            newImage.addClass("rounded mx-auto d-block");
            $("#gif-holder").empty();
            $("#gif-holder").append(newImage);
        });
    }

    function winnerGiphy () {
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=win&api_key=dc6zaTOxFJmzC";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            var randomNumber=Math.floor(Math.random()*10) + 1;
            var newImage=$("<img>");
            newImage.attr("src",response.data[randomNumber].images.fixed_height.url)
            newImage.addClass("rounded mx-auto d-block");
            $("#gif-holder").empty();
            $("#gif-holder").append(newImage);
        });
    }

    function cowardGiphy () {
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=coward&api_key=dc6zaTOxFJmzC";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            var randomNumber=Math.floor(Math.random()*10) + 1;
            var newImage=$("<img>");
            newImage.attr("src",response.data[randomNumber].images.fixed_height.url)
            newImage.addClass("rounded mx-auto d-block");
            $("#gif-holder").empty();
            $("#gif-holder").append(newImage);
        });
    }

    function endGameGiphy () {
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=congratulations&api_key=dc6zaTOxFJmzC";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            var randomNumber=Math.floor(Math.random()*10) + 1;
            var newImage=$("<img>");
            newImage.attr("src",response.data[randomNumber].images.fixed_height.url)
            newImage.addClass("rounded mx-auto d-block");
            $("#gif-holder-x").append(newImage);
        });
    }


});


