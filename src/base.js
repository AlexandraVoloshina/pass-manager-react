import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyARQ221Ok6yqhQ60awixUHIj_z7M18ycbg",
    authDomain: "password-manager-4c968.firebaseapp.com",
    databaseURL: "https://password-manager-4c968-default-rtdb.firebaseio.com/",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;