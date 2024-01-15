<script>
    import { user_authenticated } from '../js/store';
    const autentication = () => {
        $user_authenticated = true;
    }
</script>
<div class="container">
    <h1>Benvenuto, esegui il login per provare a vincere al torneo di 2048 e conquistare il titolo di campione scolastico</h1>
    <button on:click={autentication}>bottone</button>     
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

</style>