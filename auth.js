// js/auth.js
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js';
import { getDatabase } from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js';
import { getStorage } from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-storage.js';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyB_aFqsTLYEwaPvIOC7_ptYUcTpN1eYzRY",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "digital-signage-01.firebaseapp.com",
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL || "https://digital-signage-01-default-rtdb.firebaseio.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "digital-signage-01",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "digital-signage-01.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "781351499059",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:781351499059:web:48a1e03c1004328bfdba46",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-1LST7EWBVE"
};

try {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const database = getDatabase(app);
  const storage = getStorage(app);

  window.authModule = {
    auth,
    database,
    storage,
    signOut: () => auth.signOut()
  };
  console.log('authModule inicializado:', window.authModule);

  // Dispara um evento para sinalizar que authModule está pronto
  window.dispatchEvent(new Event('authModuleLoaded'));
} catch (error) {
  console.error('Erro ao inicializar Firebase:', error);
}