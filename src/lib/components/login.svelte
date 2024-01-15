<!-- login.svelte -->
<script>
import { user_email, user_authenticated, user_login_progress } from '../js/store';
  
    async function signIn() {
        log.info("SIGIN");
        $user_login_progress = "true";
        if (user.email.split('@')[1] != "istitutoagnelli.it") {
            alert("Login non autorizzato, puoi registrarti solo con l'account istituzionale")
            log.error(`Unauthorized login by user ${user.email}`);
            await signOut(auth);
            $user_email = null; 
            $user_authenticated = "false";
            $user_login_progress = "false";
        } else {
            log.info(`User ${user.email} correctly signed in`);
            $user_email = user.email; 
            $user_authenticated = "true";
            $user_login_progress = "false";
        }  
    }
  </script>
  
  <div class="container">
    <h1>Benvenuto, esegui il login per provare a vincere al torneo di 2048 e conquistare il titolo di campione scolastico</h1>
    <button on:click={loginWithGoogle}>Login</button>
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
  