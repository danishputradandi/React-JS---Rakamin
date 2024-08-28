import { initializeApp } from  "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyALJhtW3Vq9E0AnsLgXadYrrYPculTKgJY",
    authDomain: "clonee-project-e287d.firebaseapp.com",
    projectId: "clonee-project-e287d",
    storageBucket: "clonee-project-e287d.appspot.com",
    messagingSenderId: "218586937213",
    appId: "1:218586937213:web:4c8efd8d0c77ae2904fe14"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();