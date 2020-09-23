
var firebaseConfig = {
    apiKey: "AIzaSyDW7Epyj7SRwmE1tB57GIt7bve0TUNxb6g",
    authDomain: "auth-5dd18.firebaseapp.com",
    databaseURL: "https://auth-5dd18.firebaseio.com",
    projectId: "auth-5dd18",
    storageBucket: "auth-5dd18.appspot.com",
    messagingSenderId: "336018021646",
    appId: "1:336018021646:web:9eb5da611fd0ee2af68b5f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var google_provider = new firebase.auth.GoogleAuthProvider();

firebase.auth().onAuthStateChanged(user => {
  if (!!user){
    alert(`${user.displayName || user.email}`);
  }
});

$("#loginemail").click(()=>{
  firebase.auth().signInWithEmailAndPassword($("#email").val(), $("#password").val()).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
  });
});
$("#google").click(()=>{
  firebase.auth().signInWithRedirect(google_provider);
});
$("#register").click(()=>{
  let pwd1 = $("#password2").val();
  let pwd2 = $("#password3").val();
  if (pwd1 == pwd2){
    firebase.auth().createUserWithEmailAndPassword($("#email2").val(), $("#password2").val()).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
    });
  } else {
    alert("passwords don't match");
  }
});
$("#reset").click(()=>{
  firebase.auth().sendPasswordResetEmail($("#email").val());
});
