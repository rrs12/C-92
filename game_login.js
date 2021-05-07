


function adduser(){
    if(document.getElementById("player1_name_input").value==""){
        window.alert("Player 1 is required")
    }
    if(document.getElementById("player2_name_input").value==""){
        window.alert("Player 2 is required")
    }
      else{
          player1=document.getElementById("player1_name_input").value;
      player2=document.getElementById("player2_name_input").value;
  
      localStorage.setItem("Player 1 Name",player1);
      localStorage.setItem("Player 2 Name",player2);
  
      window.location="game_page.html"}  
    
}