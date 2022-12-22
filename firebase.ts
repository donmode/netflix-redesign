
// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCG-lo7u6bkUnLmefMdxMNtRXtNUpdiUR0',
  authDomain: 'netflix-clone-a640c.firebaseapp.com',
  databaseURL: 'https://next-firebase-stripe-39bf8-default-rtdb.firebaseio.com',
  projectId: 'netflix-clone-a640c',
  storageBucket: 'netflix-clone-a640c.appspot.com',
  messagingSenderId: '584787629694',
  appId: '1:584787629694:web:97aa072af8b0611c2eea2f',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
