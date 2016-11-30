var results = 0;
var bands = ["guns n roses", "def leppard", "bon jovi", "whitesnake", "warrant"];
function check()
{
  var guess = [document.getElementById("q1").value.toLowerCase(),
               document.getElementById("q2").value.toLowerCase(),
               document.getElementById("q3").value.toLowerCase(),
               document.getElementById("q4").value.toLowerCase(),
               document.getElementById("q5").value.toLowerCase()];
  for(var i = 0; i < bands.length || i < guess.length; i++)
  {
    if(bands[i] == guess[i])
    {
      results ++;
    }
  }
  window.location = "results.html";
}

var results()
{
  
}
