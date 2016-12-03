var bands = ["guns n roses", "def leppard", "bon jovi", "whitesnake", "warrant"];
function check()
{
  var acc_results = 0;
  var cookie_results = 0;
  setCookie("myCookie", acc_results, 21);
  var guess = [document.getElementById("q1").value.toLowerCase(),
               document.getElementById("q2").value.toLowerCase(),
               document.getElementById("q3").value.toLowerCase(),
               document.getElementById("q4").value.toLowerCase(),
               document.getElementById("q5").value.toLowerCase()];
  for(var i = 0; i < bands.length || i < guess.length; i++)
  {
    if(bands[i] == guess[i])
    {
      acc_results ++;
    }
  }
  setCookie("myCookie",acc_results,21);
  window.location = "results.html";

}

function show_results()
{
cookie_results = getCookie("myCookie");
document.getElementById("correct").innerHTML = cookie_results + "/5 correct!";


}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
