count="0";
function Comments()
{
    if(count == "1")
    {
     user_name = document.getElementById("msg").value;     
      if(user_name != "")
      {      
      window.location.replace("comment_page.html");
      localStorage.setItem("username", user_name);
      }
      else
      {
        document.getElementById("msg").placeholder = "Type your name first";
        document.getElementById("msg").style= "border-color:red;"
      }
    }
    else
    {
       document.getElementById("msg").style="visibility:visible;";
       document.getElementById("comment").innerHTML = "Next >>";
       count="1"
    }
    
}
function read()
{
  window.location.href = "img/normal_book.html";
}
