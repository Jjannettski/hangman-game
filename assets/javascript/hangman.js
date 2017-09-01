window.onload = function () {


// This is the alphabet array for the buttons
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

  var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }

  var space;
  var guess ;             
  var correctGuess ;
  var storedGuess = [ ];  
  var word ;

  // Create stored guesses ul
   result = function () {
    wordHolder = document.getElementById('holder');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      storedGuess.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }

  var displayLives = document.getElementById("mylives");
  var lives ;
  
  // Shows the user how many remaining lives they have
   comments = function () {
    displayLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      displayLives.innerHTML = "Game Over";
    }
    for (var i = 0; i < storedGuess.length; i++) {
      if (correctGuess + space === storedGuess.length) {
        displayLives.innerHTML = "You Win!";
      }
    }
  }

  // Check if user inputs match the correct letters in the word
   check = function () {
    list.onclick = function () {
      var choices = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === choices) {
          storedGuess[i].innerHTML = choices;
          correctGuess += 1;
        } 
      }
      var j = (word.indexOf(choices));
      if (j === -1) {
        lives -= 1;
        comments();
        animate();
      } else {
        comments();
      }
    }
  }
  
    
  // User Interactions

var chosenOption;

  play = function () {
    options = [
        ["rise-against", "a-day-to-remember", "linkin-park", "all-time-low", "lustra", "bowling-for-soup", "simple-plan"],
    ];

    chosenOption = options[Math.floor(Math.random() * options.length)];
    word = chosenOption[Math.floor(Math.random() * chosenOption.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();

    storedGuess = [ ];
    lives = 12;
    correctGuess = 0;
    space = 0;
    result();
    comments();

  }

  play();
  
  //Reset Button

  document.getElementById('reset').onclick = function() {
    window.location.reload();
  }
}


