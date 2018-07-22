# TriviaGame
Timed Quiz Game

The Answer Key For Your Sake:

Question 1: Paris
Question 2: This is Getting Dark
Question 3: Maybe
Question 4: place-2 (just a note this is a reference to the placeholders I did when making this code)
Question 5: Yes (All three "Yes" will trigger the correct answer function)

Logic of the Game:

1. Global Variables and Hidden Content

Global Variables
--------
I set up the global variables outside the document.ready(function...) because it messed up the code when it was inside. The global variables pertain to:

Total amount gotten correct
Total amount gotten wrong

IndexLoop
    This is the most important construct of the entire game. I call this my "ghetto loop constructor" because it's such a ratchet fix of moving the game forward and switching between question and "break screens" (more on this). This IndexLoop increases as the game progresses or rather whenever the break section ends.

An element div set to a variable for ease of use later on.

Two Distinct Variable Timers (one set to 15, other set to 10)

    One timer is for when a question is displayed.
    The second timer is for when the "break" section is introduced that tells you if you got a correct or wrong or didn't answer at all the previous question. 

    ^ More on these specific timers later on. However, the main point is that these timers are in an infinity loop essentially. When one timer ends, it resets the second timer vice versa.

Object/Array Answer:

    To hold the questions and answers for the trivia game.

    As a note, this could have been a lot cleaner but I just wanted to make an object. If they were two separate arrays it would still work and the variable names would be shorter and easier to debug.

Hidden Content
-----
This is the scoreboard that is hidden within the HTML. It will only be displayed once it hits a specific indexLoop number.

2. The entire game is initialized by clicking the "Test Your Knowledge" button. This runs the initGame().

3. initGame()-- Running the beginning Code

    The indexLoop starts at 0 and will run the block of code at 0. Within this code is where we start to get nasty.

4. Running the Timer Function

The first thing the "0" code wil run is the runClockForQuestion() function.

Functions
-----
Timer Functions:

    The Functionality of This Code:
        
        Below: The Timer Functions for the Displayed Question

        function runClockForQuestion()
            Also again clears the interval before anything else.
            This displays when the counter starts (so it doesn't do that janky thing where the counter is only shown once it ticks down one second).
            THen it rans the actual interval counter aka the tick rate of the counter.

        function countDownClockForQuestion()
            Decreases the timer variables with each second.
            Also again displays the counter within the HTML.
            If the counter hits -1 (set to -1 so the user gets to see the counter hit 0) it will run a set of code.

            *IMPORANT* IT WILL CLEAR THE INTERVAL OF THE runClockForQuestion() *IMPORTANT*


            The code depends on the IndexLoop which is visually matched with the question that was just seen on screen. 

            *IMPORTANT* THIS CODE INTRODUCES THE BREAK SECTION AFTER THE QUESTION *IMPORTANT*



            This is essentially dynamically displays HTML elements saying that you suck for not picking an answer. Each IndexLoop has a unique phrase when you don't answer.
            Outside of the conditional statement, the code that is always going to be ran is an increase in the wrong variable, resets the counter for the second timer function.
            It resets the counter for the second timer function in order to keep the switching of the question and break screen (so the counter isn't just 0 on the screen the entire time)

            *IMPORTANT* THEN IT RUNS THE TIMER FUNCTION FOR THE CORRECT ANSWER *IMPORANT*
        
        Below: The Timer Functions for the Break Screen

        Similar to the above logic, the function runCorrectAnswerDisplay(), runs essentially the same as the first timer function previously mentioned.

        When the countDownCorrectAnswer() hits -1, it empties out the div elements (clearing out the break screen messages) and clears the interval of the runCorrectAnswerDisplay.

        *IMPORTANT* When it ends, it increases the indexLoop, which will run the second set of code within the initGame and ad infinitum (because the indexLoop is increasing forever unless I introduce an end function which I do at the end). *IMPORTANT*

        It also resets the counter of the first timer as well, which will be seen in the next question after the break screen.

    --

5. Dynamically generating the questions, answers, and buttons from the Object Array.

    For Loop
    ---

    Within the for loop, I take the questions generated within the array and create a button and add a unique class (which will allow me to diffrentiate between the buttons when I click them). I append this button to the HTML. I also style the buttons within this loop as well. 

    Then from the dynamically generated buttons with unique classes, I create onclick events for them. Depending on whether it was the right or wrong answer that I designated, it will either run the winnerChickenDinner function or the loserChickenDinner function.

    winnerChickenDinner function
        It empties out the html elements and generates new HTMl that acknowledges that you got the correct answer.
        It also resets the timer for the break screen (since thus far we've only acknowledged the reset of the second timer when the first timer runs out). 
        Clears the interval for the first timer.
        Runs the break section that is designated by the index loop. 
        Also adds to the total correct variable.

    loserChickenDinner function
        Does the same thing but shows the "loser" part of the break section.
        Also adds to the total wrong variable.

6. The code can keep repeating itself as long as you give a block of code to execute for the current indexLoop that it is on.

7. It eventually ends when the indexLoop hits 5.

    If (indexLoop===5) {

        This clears all the timer intervals (I think really as more of a safety measure).
        I show the hidden scoreboard that shows how much you got wrong or correct.
        The game is ended as there is no code to run with the Index Loop (it is given an end)

    }

8. CONCLUSION/TLDR

Game starts when you click the start button. A timer will be displayed along with the questions and answers that were dynamically generated. If you click a button whether right or wrong it will send you to a break page that tells you the right answer and the answer you picked. The variables that hold the total amount of correct and wrong are updated. If you don't click anything, it leads you to the break question and gives you some sarcastic and witty line. When this break section ends, it increases the indexLoop and runs the initFunction again, but this time the indexLoop will point to a different code with a different set of questions and answers (once again dynamically generated). The game will eventually end when it hits the specified indexLoop of five which will show the scoreboard (with the updated variables) and clear all the interval timers and empty out all the unneccessary HTML elements.

9. I added Giphys whenever you click a button (changes depending on win or lose) or don't answer. Unique for each event. It appends at the end of the page. They are also in functions for easier use.

