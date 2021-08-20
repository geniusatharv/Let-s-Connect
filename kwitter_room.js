var firebaseConfig = {
    apiKey: "AIzaSyBw3_eQ5PLtMEgmwrKhT8fy4QUspYnc5Ok",
    authDomain: "kwitter-f9777.firebaseapp.com",
    databaseURL: "https://kwitter-f9777-default-rtdb.firebaseio.com",
    projectId: "kwitter-f9777",
    storageBucket: "kwitter-f9777.appspot.com",
    messagingSenderId: "42576921890",
    appId: "1:42576921890:web:364abac66df0269293d17b",
    measurementId: "G-3Y0HSGYT00"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("username");
  document.getElementById("username").innerHTML = "Welcome " + user_name;
  function addRoom()
  {
        room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
              purpose : "adding room name"
        });
        localStorage.setItem("room_name", room_name);
        window.location = "kwitter_page.html";
  }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
     console.log("Room Name - " + Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >"+Room_names+"</div><hr>"
     document.getElementById("output").innerHTML += row;
    });});}
getData();
function redirectToRoomName()
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}
