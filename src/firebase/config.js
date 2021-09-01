import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDJwtAX4KowLiHJSa5PDAXMf0ZK-cr_Xbo",
    authDomain: "netflix-clone-eca3d.firebaseapp.com",
    projectId: "netflix-clone-eca3d",
    storageBucket: "netflix-clone-eca3d.appspot.com",
    messagingSenderId: "625107181776",
    appId: "1:625107181776:web:7cb7aeff4f9c3c1729fed5",
    measurementId: "G-WEVM52Q0QY"
  };

  export default firebase.initializeApp(firebaseConfig)