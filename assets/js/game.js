// set the variables

    var wins=0;
    var loses=0;
    var totalScore= 0;

// set the random number
//The random number shown at the start of the game should be between 19 - 120
    var targetNumber;
    function randomNumber() {
    var targetNumber = Math.floor(Math.random()*102)+19;
    console.log(targetNumber);
    $("#target-number").html(targetNumber)
    }

//Each crystal should have a random hidden value between 1 - 12
    var red;
    var blue;
    var orange;
    var green;
    function crystalReset() {
        red = Math.floor(Math.random()*12)+1;
    console.log(red)

        blue = Math.floor(Math.random()*12)+1;
    console.log(blue)

        orange = Math.floor(Math.random()*12)+1;
    console.log(orange)

        green = Math.floor(Math.random()*12)+1;
    console.log(green)
    }

//When the player clicks on a crystal, it will add a specific amount of points to the player's total score.
    
    function crystalclick() {
    $("#red_crystal").on("click",function(){
        //debugger
        totalScore +=red;
        $("#total-score").html(totalScore)
        if ( totalScore === targetNumber) {
            wins++;
            $("#wins").text(wins)
            restart();
        } else if ( totalScore > targetNumber) {
            loses++;
            $("#loses").text(loses)
            restart();
        }
    })
    $("#blue_crystal").on("click",function(){
        totalScore +=blue;
        $("#total-score").html(totalScore)
        if ( totalScore === targetNumber) {
            wins++;
            $("#wins").text(wins)
            restart();
        } else if ( totalScore > targetNumber) {
            loses++;
            $("#loses").text(loses)
            restart();
        }
    })
    $("#orange_crystal").on("click",function(){
        totalScore +=orange;
        $("#total-score").html(totalScore)
        if ( totalScore === targetNumber) {
            wins++;
            $("#wins").text(wins)
            restart();
        } else if ( totalScore > targetNumber) {
            loses++;
            $("#loses").text(loses)
            restart();
        }
    })
    $("#green_crystal").on("click",function(){
        totalScore +=green;
        $("#total-score").html(totalScore)
        if ( totalScore === targetNumber) {
            wins++;
            $("#wins").text(wins)
            restart();
        } else if ( totalScore > targetNumber) {
            loses++;
            $("#loses").text(loses)
            restart();
        }
    })

}


//The player wins if their total score matches the random number from the beginning of the game.
//The game restarts whenever the player wins or loses.
    // if ( totalScore === targetNumber) {

    //     wins++;
    //     restart();
    // } else if ( totalScore > targetNumber) {
    //     loses++;
    //     restart();
    // }

// initial page loading
    randomNumber()
    crystalReset()
    crystalclick()

//When the game begins again, the player should see a new random number. 
//Also, all the crystals will have four new hidden values. 
//Of course, the user's score (and score counter) will reset to zero.
    function restart() {
            randomNumber()
            crystalReset()
            var totalScore = 0;
            $("#total-score").html(totalScore)
            crystalclick()
    }