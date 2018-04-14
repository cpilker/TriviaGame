# TriviaGame

# What the Project is

* The purpose of the game [Basic Game] is to give the user a set amount of time to ask 8 multiple choice questions. 

* The questions in this game are directed towards sports (mixed sports). 

  * The game ends when the time runs out, or the player has answered all the questions and hit the SUBMIT button [Alert will show]. The page will reveal the number of questions that players answer correctly, incorrectly, and/or unaswered..

* The player is limited to one answer per question.

* A timer is displayed in the upper portion of the page.

# How to Start/Functions

* Upon navigating to the page, a button renders (part of HTML, not dynamically) saying Let's Play.

* Once selected, the Let's Play button is hidden through jQuery tools and the timer, 8 questions, applicable answers and Submit button render.

    * The questions, answers are rendered dynamically by being pulled from various arrays in the app.js page. They are pushed to established containers within the HTML.

    * Various For loops force the questions and answers to be displayed with one another; therefore, each questions answers are displayed directly below the question.

    * Each <input>has a unique attribute (name) to prevent multiple answers on a given question.

* When an answer is selected, nothing immediately happens. There is blocked code that was used to ensure the value of the input tag could be read; however, this was then substituted with a For Loop to calculate all answers at the end of the game, or when time runs out.

* The player has to methods to proceed to the results pages.

    * Option 1 - the player can allow time to expire.

    * Option 2- the player can hit the submit button.

    * Two separate functions are built to trigger each option; however, there is a single calculate function in place to determine the #correct, incorrect, and/or unanswered.

* The results are dynamically pushed to the existing div to overwrite the questions/answers and hide all buttons.

* The player is then able to reload the page (must used the browser reload) to start over. The questions do not rotate positions, nor do the answers.