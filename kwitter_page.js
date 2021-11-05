var firebaseConfig = {
    apiKey: "AIzaSyA213TbiOeWcz8Ls1ORfvR2Ful67Oy2qmQ",
    authDomain: "phone-book2.firebaseapp.com",
    databaseURL: "https://phone-book2.firebaseio.com",
    projectId: "phone-book2",
    storageBucket: "phone-book2.appspot.com",
    messagingSenderId: "939905920957",
    appId: "1:939905920957:web:9fbf4eb7f3aa1364aeacd4",
    measurementId: "G-PTER3YT0J8"  
  };  
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("username");
  room_name = "3";
  function getData() {
    firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
//Start code
like_count=0
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
message_with_tag = "<h3 style='color:black;' class = 'message_h4'>" +message+ "</h3>";
name_with_tag = "<h4>" + name + "<img class = 'user_tick' src = 'tick.png'> </h4> ";
like_button = "<button class= 'span_of_year btn btn-info' id = " +firebase_message_id+ " value ="+ like +" onclick ='updateLike(this.id)'> ";

span_with_tag = "<span class = 'ok_2 glyphicon glyphicon-thumbs-up'></span>   <span class=' hey btn btn-success'> "+ like +"</span></button><hr>";

row = name_with_tag + message_with_tag +like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
  } });  });
}
getData();


function updateLike(message_id)
{
  button_id = message_id;
   like_count = localStorage.getItem("like_count"+message_id)
   if(like_count == null)
   {   
   console.log("clicked on like button - " + message_id);
   likes = document.getElementById(button_id).value;
   updated_likes = Number(likes) + 1;
   console.log(updated_likes);

   firebase.database().ref(room_name).child(message_id).update({
         like :updated_likes
   });
   localStorage.setItem("like_count"+message_id, "1");
}
}

function log_out()
{
    window.location.replace("index.html");
}
function send ()
{
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
     name:user_name,
     message:msg,
     like:0
});

    document.getElementById("msg").value = ""; 
}
