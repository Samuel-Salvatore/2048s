<!-- login.svelte -->
<script>
import { user_email, user_authenticated } from '../js/store';
import {signOut, signInWithRedirect  } from 'firebase/auth';
let provider = null;
  let auth = null;
  let user = {};
    async function signIn() {
        signInWithRedirect(auth, provider);
        if (user_email.split('@')[1] != "istitutoagnelli.it") {
            alert("Login non autorizzato, puoi registrarti solo con l'account istituzionale")
            log.error(`Unauthorized login by user ${user_email}`);
            await signOut(auth);
            $user_authenticated = "false";
        } else {
            log.info(`User ${user_email} correctly signed in`);
            $user_authenticated = "true";
        }  
    }
  </script>
  
  <div class="container">
    <h1>Benvenuto, esegui il login per provare a vincere al torneo di 2048 e conquistare il titolo di campione scolastico</h1>
    <button on:click={signIn}>Login</button>
  </div>
  
  <style>
    .container {
      width: 75%;
      margin: auto;
    }
  
    h1 {
      text-align: center;
      margin-top: 15%;
      font-family: 'Clear Sans', 'Helvetica Neue', Arial, sans-serif;
      font-weight: bold;
      font-size: 35px;
    }
  
    button {
      margin-top: 20px;
      padding: 10px 15px;
      background-color: #4285f4;
      color: white;
      border: none;
      cursor: pointer;
    }
  </style>
  