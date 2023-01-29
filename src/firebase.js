import firebaseConfig from "./firebaseconfig";
import {initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage' 
import {getAuth} from 'firebase/auth'

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const database = getFirestore(app)
const storage = getStorage(app)

export {auth , database , storage}