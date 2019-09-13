import {Firebase,providerapp} from '../firrebase/firebase'
function savedata(data){
    Firebase.firestore().collection('product').add(data)
}
// Subse
function loginfacebook(){
    return new Promise((resolve,reject)=>{
    Firebase.auth().signInWithPopup(providerapp)
    .then((result)=> {
      var user = result.user;
      resolve(user)
    }).catch(function(error) {
      var credential = error.credential;
      reject(credential)
    });
    })
    }
    
export {savedata , loginfacebook}