// js/auth.js
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js';
import { getDatabase } from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js';
import { getStorage } from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-storage.js';

const firebaseConfig = {
  apiKey: "AIzaSyBhj6nv3QcIHyuznWPNM4t_0NjL0ghMwFw",
  authDomain: "dsignertv.firebaseapp.com",
  databaseURL: "https://dsignertv-default-rtdb.firebaseio.com",
  projectId: "dsignertv",
  storageBucket: "dsignertv.firebasestorage.app",
  messagingSenderId: "930311416952",
  appId: "1:930311416952:web:d0e7289f0688c46492d18d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app); // Certifique-se de que o banco de dados está inicializado
const storage = getStorage(app);

window.authModule = {
    auth,
    database,
    storage,
    signOut: () => auth.signOut()
};