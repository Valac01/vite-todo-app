import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyAPSwOqS91XvULjjvbCIvTk8BeywkeOgUk',
  authDomain: 'vue-ocr.firebaseapp.com',
  databaseURL: 'https://vue-ocr.firebaseio.com',
  projectId: 'vue-ocr',
  storageBucket: 'vue-ocr.appspot.com',
  messagingSenderId: '826831374427',
  appId: '1:826831374427:web:6e819193fb8dcd4388177e',
  measurementId: 'G-36KG1KTSSQ',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export const db = firebaseApp.firestore()
