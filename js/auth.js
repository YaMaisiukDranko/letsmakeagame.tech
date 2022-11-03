import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
    } else {
        // User is signed out
        // ...
    }
});

function login(){
    var userEmail = document.getElementById("email-field").value;
    var userPassword = document.getElementById("password-field").value;

    window.alert("login button" + userEmail + userPassword);
}