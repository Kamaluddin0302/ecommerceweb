import firebase from 'firebase'
import 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth';


var firebaseConfig = {
  apiKey: "AIzaSyCC7uLlQzOdmk5zS1VkkeL3WSOnXCuGUDg",
  authDomain: "commerce-12.firebaseapp.com",
  databaseURL: "https://commerce-12.firebaseio.com",
  projectId: "commerce-12",
  storageBucket: "commerce-12.appspot.com",
  messagingSenderId: "356286240049",
  appId: "1:356286240049:web:0e19ff948a0e4f74120c10"
};
let Firebase = firebase.initializeApp(firebaseConfig);

// firebase.firestore().enablePersistence()
//   .catch(function(err) {
//       if (err.code == 'failed-precondition') {
//         console.log(err)

//       } else if (err.code == 'unimplemented') {
//         console.log(err)

//       }
//   });

var provider = new firebase.auth.FacebookAuthProvider();

let providerapp = provider.setCustomParameters({'display': 'popup'});
export  {Firebase ,providerapp}