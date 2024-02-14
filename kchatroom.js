//YOUR FIREBASE LINKS
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
room_name = localStorage.getItem("roomname")
user_name = localStorage.getItem("username")
console.log(room_name);
console.log(user_name);
function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();
function logout() {

}
function send() {
      message = document.getElementById("message").value
      firebase.database().ref(room_name).push({
            name: user_name,
            message: message,
            like: 0
      })
      document.getElementById("message").value = ""
}
