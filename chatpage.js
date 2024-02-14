const firebaseConfig = {
    apiKey: "AIzaSyA-NSVXcDGr1o-mgN7HX90DCi5lTEi_qP0",
    authDomain: "kwitter-ce294.firebaseapp.com",
    databaseURL: "https://kwitter-ce294-default-rtdb.firebaseio.com",
    projectId: "kwitter-ce294",
    storageBucket: "kwitter-ce294.appspot.com",
    messagingSenderId: "284579771756",
    appId: "1:284579771756:web:ffb537db7ddaa47b41ef49",
    measurementId: "G-X50V4L7286"
};
//ADD YOUR FIREBASE LINKS HERE
firebase.initializeApp(firebaseConfig)


username = localStorage.getItem("username")
document.getElementById("username").innerHTML = username
function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                //Start code
                console.log(Room_names);
                row = "<div class= room_name onclick= redirect(this.id) id= '" + Room_names + "'>" + Room_names + "</div> <hr>"
                document.getElementById("output").innerHTML += row
                //End code
          });
    });
}
getData();
function logout() { }
function addroom() {
    roomname = document.getElementById("roomname").value
    firebase.database().ref("/").child(roomname).update({
          purpose: "New Room Added"
    })
    localStorage.setItem("roomname", roomname)
    window.location="kchatroom.html"
    

}
function redirect(id) {
    localStorage.setItem("roomname", id)
    window.location="kchatroom.html"
}
