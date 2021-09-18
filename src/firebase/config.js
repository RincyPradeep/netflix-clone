import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

  const firebaseConfig = {
    apiKey: "AIzaSyA8e_9bm3Th3X63Uoc5DDOVaoVIut6YjMA",
    authDomain: "clone-net-f8687.firebaseapp.com",
    projectId: "clone-net-f8687",
    storageBucket: "clone-net-f8687.appspot.com",
    messagingSenderId: "1016779839009",
    appId: "1:1016779839009:web:1c3cc4068319684a103560",
    measurementId: "G-TGP69NE8KF"
  };

  export default firebase.initializeApp(firebaseConfig)