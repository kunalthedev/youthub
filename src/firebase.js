import firebase from "firebase/app";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDkoU-RIcFE4PubYk_5j8onp8WGkk9ShSc",
  authDomain: "youthuub.firebaseapp.com",
  projectId: "youthuub",
  storageBucket: "youthuub.appspot.com",
  messagingSenderId: "286096511538",
  appId: "1:286096511538:web:d503aef47ec8d30b1ca22b",
};

firebase.initializeApp(firebaseConfig);
export default firebase.auth();
