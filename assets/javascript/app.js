
    
    $(document).ready(function() { 
    
    //Initialize variables
    var timer = 120;
    var intervalId;
    var startButton = $("#start");
    var submitButton = $("<button type='button' class='btn'>" + "Submit" + "</button>");
    var gamePlay = $(".gameplay");
    var correct = 0;
    var incorrect =0;
    var unanswered = 0;
   // var submitButton = $("#submit");
    var q1 =  {
        question: "Who won the Superbowl in the 2017-2018 season?",
        answers: ["<input type='radio' name='q1' value='correct'>Philadelphia Eagles", "<input type='radio' name='q1' value='incorrect'>New England Patriots", "<input type='radio' name='q1' value='incorrect'>Pittsburg Steelers", "<input type='radio' name='q1' value='incorrect'>Minnesota Vikings"],
        flag: [true, false, false, false],
    }

    var q2 = {
        question: "What NFL Team in Charlotte, NC?" ,
        answers: ["<input type='radio' name='q2' value='incorrect'>Eagles", "<input type='radio' name='q2' value='correct'>Panthers", "<input type='radio' name='q2' value='incorrect'>Dolphins", "<input type='radio' name='q2' value='incorrect'>Jaguars"],
        flag: [false, true, false, false]
    };

    var q3 = {
        question: "What is America's past time?",
        answers: ["<input type='radio' name='q3' value='incorrect'>Soccer", "<input type='radio' name='q3' value='incorrect'>Bowling", "<input type='radio' name='q3' value='incorrect'>Quidditch", "<input type='radio' name='q3' value='correct'>Baseball"],
        flag: [false, false, false, true]
    };

    var q4 = {
        question: "What appears to be the most competitive sports in the winter olympics? (This is opinion)",
        answers: ["<input type='radio' name='q4' value='incorrect'>Hockey", "<input type='radio' name='q4' value='correct'>Curling", "<input type='radio' name='q4' value='incorrect'>Aerials", "<input type='radio' name='q4' value='incorrect'>Super-G"],
        flag: [false, true, false, false]
    };

    var q5 = {
        question: "What is the professional soccer league in the United Kingdom named?",
        answers: ["<input type='radio' name='q5' value='correct'>Premier Leage", "<input type='radio' name='q5' value='incorrect'>MLS", "<input type='radio' name='q5' value='incorrect'>Bundesliga", "<input type='radio' name='q5' value='incorrect'>Serie A"],
        flag: [true, false, false, false]
    };

    var q6 = {
        question: "How often are the olympics hosted?",
        answers: ["<input type='radio' name='q6' value='incorrect'>2 years", "<input type='radio' name='q6' value='incorrect'>3 years", "<input type='radio' name='q6' value='correct'>4 years", "<input type='radio' name='q6' value='incorrect'>5 years"],
        flag: [false, false, true, false]
    };

    var q7 = {
        question: "If Michael Phelps were a country, where would he rank on the all-time olympic gold medal list (35th)?",
        answers: ["<input type='radio' name='q7' value='incorrect'>18", "<input type='radio' name='q7' value='correct'>35", "<input type='radio' name='q7' value='incorrect'>32", "<input type='radio' name='q7' value='incorrect'>28"],
        flag: [false, true, false, false]
    };

    var q8 = {
        question: "How many actual minutes of action are there in a baseball game?",
        answers: ["<input type='radio' name='q8' value='incorrect' answer='22'>22", "<input type='radio' name='q8' value='incorrect'>1", "<input type='radio' name='q8' value='incorrect'>96", "<input type='radio' name='q8' value='correct'>18"],
        flag: [false, false, false, true]
    };
    questionPull = [q1, q2, q3, q4, q5, q6, q7, q8];
     answerPull = [];
    
    answerPull.push(q1.answers, q2.answers, q3.answers, q4.answers, q5.answers, q6.answers, q7.answers, q8.answers);


    //Run the game - click start button
    //On click, start the timer, populate all questions and create submit answers button
    startButton.on("click", function() {
        startButton.hide(".intro");
        run();
        gamePlay.show();
        //populateQuestions();
        populateQuestions();
        createSubmitButton()});     

    //Timer function - used simple timer functionality
        function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
        $(".timer").html("<h3>Time Left: " + timer + " seconds</h3>");
        };

        //  The decrement function.
        function decrement() {

        //  Decrease number by one.
            timer--;

        //  Show the number in the #timer tag.
        $(".timer").html("<h3>Time Left: " + timer + " seconds</h3>");

        //  Once number hits zero...
            if (timer === 0) {
                stop();
                alert("Time Up!");
                calculate();
                submitButton.hide();
                $(".results").append("<div>To try again, please reload the page</div>");
                $(".timer").hide();
            }
        };
        // stop timer
        function stop() {
            clearInterval(intervalId);
            };

        // reset timer
        function resetTimer() {

        }

        //  Execute the run function.
        //run();

    //Push questions to question location
    /*THIS IS HOW I ORIGINALLY BUILT, THEN BUILT A FOR LOOP TO SIMPLIFY (SEE184)
    function populateQuestions() {
            $("#q1").html("<h5>" + q1.question + "</h5>");
            $("#q1").append("<input type='radio'> " + q1.answers[0] + " ");
            $("#q1").append("<input type='radio'> " + q1.answers[1] + " ");
            $("#q1").append("<input type='radio'> " + q1.answers[2] + " ");
            $("#q1").append("<input type='radio'> " + q1.answers[3] + " ");
            $("#q2").html("<h5>" + q2.question + "</h5>");  
            $("#q2").append("<input type='radio'> " + q2.answers[0] + " ");
            $("#q2").append("<input type='radio'> " + q2.answers[1] + " ");
            $("#q2").append("<input type='radio'> " + q2.answers[2] + " ");
            $("#q2").append("<input type='radio'> " + q2.answers[3] + " ");            
            $("#q3").html("<h5>" + q3.question + "</h5>");
            $("#q3").append("<input type='radio'> " + q3.answers[0] + " ");
            $("#q3").append("<input type='radio'> " + q3.answers[1] + " ");
            $("#q3").append("<input type='radio'> " + q3.answers[2] + " ");
            $("#q3").append("<input type='radio'> " + q3.answers[3] + " ");
            $("#q4").html("<h5>" + q4.question + "</h5>");
            $("#q4").append("<input type='radio'> " + q4.answers[0] + " ");
            $("#q4").append("<input type='radio'> " + q4.answers[1] + " ");
            $("#q4").append("<input type='radio'> " + q4.answers[2] + " ");
            $("#q4").append("<input type='radio'> " + q4.answers[3] + " ");
            $("#q5").html("<h5>" + q5.question + "</h5>");
            $("#q5").append("<input type='radio'> " + q5.answers[0] + " ");
            $("#q5").append("<input type='radio'> " + q5.answers[1] + " ");
            $("#q5").append("<input type='radio'> " + q5.answers[2] + " ");
            $("#q5").append("<input type='radio'> " + q5.answers[3] + " ");
            $("#q6").html("<h5>" + q6.question + "</h5>");
            $("#q6").append("<input type='radio'> " + q6.answers[0] + " ");
            $("#q6").append("<input type='radio'> " + q6.answers[1] + " ");
            $("#q6").append("<input type='radio'> " + q6.answers[2] + " ");
            $("#q6").append("<input type='radio'> " + q6.answers[3] + " ");
            $("#q7").html("<h5>" + q7.question + "</h5>");
            $("#q7").append("<input type='radio'> " + q7.answers[0] + " ");
            $("#q7").append("<input type='radio'> " + q7.answers[1] + " ");
            $("#q7").append("<input type='radio'> " + q7.answers[2] + " ");
            $("#q7").append("<input type='radio'> " + q7.answers[3] + " ");
            $("#q8").html("<h5>" + q8.question + "</h5>");
            $("#q8").append("<input type='radio'> " + q8.answers[0] + " ");
            $("#q8").append("<input type='radio'> " + q8.answers[1] + " ");
            $("#q8").append("<input type='radio'> " + q8.answers[2] + " ");
            $("#q8").append("<input type='radio'> " + q8.answers[3] + " ");
        };*/

    
    function populateQuestions() {
        for (var i = 0; i < questionPull.length; i++) {
            $("#test").append("<h5>" + questionPull[i].question + "</h5>");
            
           /* $("#test").append("<input type='radio' name='q[i]'> " + questionPull[i].answers[0] + " " + "<input type='radio' name='q'> " + questionPull[i].answers[2] + " " + "<input type='radio' name='q'> " + questionPull[i].answers[2] + " "+ "<input type='radio' name='q'> " + questionPull[i].answers[3] + " ");*/
           $("#test").append(" " + questionPull[i].answers[0] + " " + "  " + questionPull[i].answers[1] + " " + "  " + questionPull[i].answers[2] + " " + "  " + questionPull[i].answers[3]);
        };
        /*JUST TRYING TO MAKE THE ABOVE CODE EASIER 
        for (var j = 0; j < answerPull.length; j++) {
            $("#test").append(" " + answerPull[j] + " ")
        }*/
        
       
    };

    //create done button & function that happens on submit
    function createSubmitButton() {
        $(".submit").append(submitButton);
    };

    submitButton.on("click", function() {
        if (confirm("Are you sure?")) {
            clearInterval(intervalId);
            $(".timer").hide();
            submitButton.hide();
            calculate();
            //$("#test").html("<h5>Correct: " + correct + "</h5>" + "<h5>Incorrect: " + incorrect + "</h5>" + "<h5>Unanswered: " + unanswered + "</h5>");
            $(".results").append("<div>To try again, please reload the page</div>");
        };
    });

    /*//Function to calculate the number correct/incorrect/unanswered
    $("#test").on("click","input", function() {
        if ($(this).attr("value") === "correct") {
        alert($(this).val())};
        console.log(this)
    });*/

    //Determine write versus wrong summation
    function calculate() {
        
        var question1 = $('input:radio[name="q1"]:checked').val();
        var question2 = $('input:radio[name="q2"]:checked').val();
        var question3 = $('input:radio[name="q3"]:checked').val();
        var question4 = $('input:radio[name="q4"]:checked').val();
        var question5 = $('input:radio[name="q5"]:checked').val();
        var question6 = $('input:radio[name="q6"]:checked').val();
        var question7 = $('input:radio[name="q7"]:checked').val();
        var question8 = $('input:radio[name="q8"]:checked').val();
        sumAnswers = [question1, question2, question3, question4, question5, question6, question7, question8];

        for (var i = 0; i < sumAnswers.length; i++) {

            if (sumAnswers[i] == "correct") {
                correct++;
            }
            else if (sumAnswers[i] == "incorrect") {
                incorrect++
            }
            else {
                unanswered++;
            }

            };
            $("#test").html("<h5>Correct: " + correct + "</h5>");
            $("#test").append("<h5>Incorrect: " + incorrect + "</h5>")
            $("#test").append("<h5>Unanswered: " + unanswered + "</h5>")
            //Originally wrote unanswered this way because I only have if statements for question# ==, this resulted in duplication, the code in the above line was determined after I tried else if
            //$("#test").append("<h5>Unanswered: " + (8 - correct - incorrect) + "</h5>")
        };
    });