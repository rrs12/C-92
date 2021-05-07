player_1 = localStorage.getItem("Player 1 Name")
player_2 = localStorage.getItem("Player 2 Name")

player1_score = 0;
player2_score = 0;

question_turn = player_1;
answer_turn = player_2;

document.getElementById("player1_name").innerHTML = player_1 + ":"
document.getElementById("player2_name").innerHTML = player_2 + ":"

document.getElementById("player1_score").innerHTML = player1_score
document.getElementById("player2_score").innerHTML = player2_score

document.getElementById("player_question").innerHTML = "Question Turn-" + player_1
document.getElementById("player_answer").innerHTML = "Answer Turn-" + player_2

function send() {
  get_word = document.getElementById("word").value
  word = get_word.toLowerCase()
  if (word.length < 6) {
    window.alert("Enter Minimum 6 Character Word");
  }
else{ 
charAt1 = word.charAt(1)

length_divide_2 = Math.floor(word.length / 2)
charAt2 = word.charAt(length_divide_2)

length_minus_1 = word.length - 1;
charAt3 = word.charAt(length_minus_1)

length_divide_2_1 = Math.floor(word.length / 2) + 1
charAt4 = word.charAt(length_divide_2_1)



remove_charAt1 = word.replace(charAt1, "_")
remove_charAt2 = remove_charAt1.replace(charAt2, "_")
remove_charAt3 = remove_charAt2.replace(charAt3, "_")
console.log(remove_charAt3)
remove_charAt4 = remove_charAt3.replace(charAt4, "_")
console.log(remove_charAt4)

question_word = "<h4 id='word_display'>Q. " + remove_charAt4 + "</h4>";
input_box = "<br>Answer: <input type='text' id='input_check_box'>"
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
row = question_word + input_box + check_button;
document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";}

  } 


function check() {
  get_answer = document.getElementById("input_check_box").value;
  console.log(get_answer)
  answer = get_answer.toLowerCase();
  console.log(answer)

  if (word == answer) {

    if (answer_turn == player_2) {
      player2_score++
      document.getElementById("player2_score").innerHTML = player2_score
    } else {
      player1_score++
      document.getElementById("player1_score").innerHTML = player1_score
    }
  }

  if (answer_turn == player_2) {
    answer_turn = player_1;
    document.getElementById("player_answer").innerHTML = "Answer Turn-" + answer_turn
  } else {
    answer_turn = player_2;
    document.getElementById("player_answer").innerHTML = "Answer Turn-" + answer_turn
  }

  if (question_turn == player_2) {
    question_turn = player_1;
    document.getElementById("player_question").innerHTML = "Question Turn-" + question_turn
  } else {
    question_turn = player_2;
    document.getElementById("player_question").innerHTML = "Question Turn-" + question_turn
  }

  document.getElementById("output").innerHTML = "";
}