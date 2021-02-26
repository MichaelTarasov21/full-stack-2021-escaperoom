import firebase from "firebase";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAMHt38VEtOh7ggYRQLQooixyo08wxUhGc",
  authDomain: "escape-room-project-677cd.firebaseapp.com",
  projectId: "escape-room-project-677cd",
  storageBucket: "escape-room-project-677cd.appspot.com",
  messagingSenderId: "440341783920",
  appId: "1:440341783920:web:0aa7dcc75245ad05481bb5",
  measurementId: "G-VKNQM8049J",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.auth();

var provider = new firebase.auth.GoogleAuthProvider();

// provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

function signInWithPopup() {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
};
signInWithPopup();