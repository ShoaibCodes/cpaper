import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD1wGz5lAPfGhCnbgjgjQx7OlSwZd90ZiQ',
  authDomain: 'crypto-paper.firebaseapp.com',
  projectId: 'crypto-paper',
  storageBucket: 'crypto-paper.appspot.com',
  messagingSenderId: '1066595445571',
  appId: '1:1066595445571:web:db5f82c0fad80d4c56ddf6',
  measurementId: 'G-9BBFJBRV4Z',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const Provider = new firebase.auth.GoogleAuthProvider()

export { auth, Provider }
export default db
