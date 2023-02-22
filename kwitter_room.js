
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyDDp8ehPn4bWWGBMtgbjjZIVzGzeP73ewY",
  authDomain: "kwitter-application-64f91.firebaseapp.com",
  databaseURL: "https://kwitter-application-64f91-default-rtdb.firebaseio.com",
  projectId: "kwitter-application-64f91",
  storageBucket: "kwitter-application-64f91.appspot.com",
  messagingSenderId: "96873235412",
  appId: "1:96873235412:web:4e15754fc63aca81a1cc41"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
