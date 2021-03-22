import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCW52zvb1kBgC1EKN4LLnrXQpdD-Tpum50",
    authDomain: "emery-b339f.firebaseapp.com",
    projectId: "emery-b339f",
    storageBucket: "emery-b339f.appspot.com",
    messagingSenderId: "384310198840",
    appId: "1:384310198840:web:d3ec8f7598076349a0dccd"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebaseApp.auth()

export {auth}