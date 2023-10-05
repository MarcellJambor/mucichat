import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; 

export const auth= firebase.initializeApp ({

    apiKey: "AIzaSyD2jRzEiv4ebWiYpD6Qoamv153lk9QrOcE",
  
    authDomain: "mucichat-49a61.firebaseapp.com",
  
    projectId: "mucichat-49a61",
  
    storageBucket: "mucichat-49a61.appspot.com",
  
    messagingSenderId: "332914121780",
  
    appId: "1:332914121780:web:f17e546aa9cda7fea0fe61"
  
  }).auth();