import Rebase from 're-base';
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAkTi2kvcR_5T8EXJZ7LjA9rYiTsYeT8Dg",
    authDomain: "poki-18d0c.firebaseapp.com",
    databaseURL: "https://poki-18d0c.firebaseio.com",
    projectId: "poki-18d0c",
    storageBucket: "poki-18d0c.appspot.com",
    messagingSenderId: "688715105666"
};
  
const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database());
const facebookProvider = new firebase.auth.FacebookAuthProvider();

export { app, base, facebookProvider }