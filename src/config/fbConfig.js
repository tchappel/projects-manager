// import basic features of firebase library
import firebase from 'firebase/app';
// import database
import 'firebase/firestore';
// import authentication features
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    // project identification key to connect to the backend
    apiKey: "AIzaSyBniZPaI9OW4HiBppufD4WFPcAHtrODCtI",
    authDomain: "projects-manager-573b7.firebaseapp.com",
    databaseURL: "https://projects-manager-573b7.firebaseio.com",
    projectId: "projects-manager-573b7",
    storageBucket: "",
    messagingSenderId: "600021472956",
    appId: "1:600021472956:web:4526ca3398ec1221d562b9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize store
firebase.firestore();

export default firebase;
