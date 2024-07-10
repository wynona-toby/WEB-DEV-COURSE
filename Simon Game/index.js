const buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let points = 0;
let started = false;

$(document).keydown((event) => {
  if (event.key === "Enter" && !started) {
    startGame();
  }
  if (event.key === "Escape") {
    $("#rules-sheet").fadeOut();
  }
});

$("#rules-btn").click(() => {
  $("#rules-sheet").fadeIn();
});

$(".close").click(() => {
  $("#rules-sheet").fadeOut();
});

$("#start-btn").click(() => {
  if (!started) {
    startGame();
  }
});


$(".btn").click(function() {
  const userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length - 1);
});

function startGame() {
  $("#start-btn").hide();
  $("#level-title").text(`Level ${level}`);
  nextSequence();
  started = true;
}

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      points += 10;
      $("#points-title").html(`<span style="text-shadow: 0 0 10px #fff">${points}</span>`);
      setTimeout(() => {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").html(`Game Over. You scored <span style="color: #bada55">${points} points.</span> <br>Press button or Enter to Restart`);

    setTimeout(() => $("body").removeClass("game-over"), 200);

    startOver();
  }
}


function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text(`Level ${level}`);
  const randomChosenColour = buttonColours[Math.floor(Math.random() * 4)];
  gamePattern.push(randomChosenColour);

  let i = 0;
  const interval = setInterval(() => {
    $(`#${gamePattern[i]}`).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(gamePattern[i]);
    i++;
    if (i >= gamePattern.length) {
      clearInterval(interval);
    }
  }, 600);
}

function animatePress(currentColor) {
  $(`#${currentColor}`).addClass("pressed");
  setTimeout(() => $(`#${currentColor}`).removeClass("pressed"), 100);
}

function playSound(name) {
  new Audio(`sounds/${name}.mp3`).play();
}

function startOver() {
  level = 0;
  points = 0;
  gamePattern = [];
  started = false;
  $("#points-title").text(`Points: ${points}`);
  $("#start-btn").text("Restart").show();
}
