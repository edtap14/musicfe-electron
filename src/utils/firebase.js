// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDz1Sf_r2P530aAp7-6yHcHGUW7CpEiKyw',
	authDomain: 'musicfy-v1-b3c4b.firebaseapp.com',
	projectId: 'musicfy-v1-b3c4b',
	storageBucket: 'musicfy-v1-b3c4b.appspot.com',
	messagingSenderId: '516948971222',
	appId: '1:516948971222:web:b05d94640b106410964377',
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const initFirebase = initializeApp(firebaseConfig);

export const db = getFirestore(initFirebase);
