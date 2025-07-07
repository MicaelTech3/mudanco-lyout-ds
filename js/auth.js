```javascript
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js';
import { getDatabase } from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js';
import { getStorage } from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-storage.js';

const firebaseConfig = {
  apiKey: "AIzaSyB_aFqsTLYEwaPvIOC7_ptYUcTpN1eYzRY",
  authDomain: "digital-signage-01.firebaseapp.com",
  databaseURL: "https://digital-signage-01-default-rtdb.firebaseio.com",
  projectId: "digital-signage-01",
  storageBucket: "digital-signage-01.firebasestorage.app",
  messagingSenderId: "781351499059",
  appId: "1:781351499059:web:48a1e03c1004328bfdba46",
  measurementId: "G-1LST7EWBVE"
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
} catch (error) {
    console.error('Erro ao inicializar Firebase:', error);
    window.authModule = {
        auth: null,
        database: null,
        storage: null,
        signOut: () => Promise.resolve()
    };
} finally {
    window.dispatchEvent(new Event('authModuleLoaded'));
}
```