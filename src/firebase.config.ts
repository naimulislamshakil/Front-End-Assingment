// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCbEL1x_j_EGE7PyLO9b3Pb_wDHzIxA2m8',
	authDomain: 'frontend-assinment.firebaseapp.com',
	projectId: 'frontend-assinment',
	storageBucket: 'frontend-assinment.appspot.com',
	messagingSenderId: '709596800265',
	appId: '1:709596800265:web:bbde961a431fa74b715fd8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
