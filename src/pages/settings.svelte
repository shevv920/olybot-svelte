<script lang="ts">
  import Switch from '~/components/switch.svelte';
  import {authStore} from '~/stores/auth-store';
</script>

<h1>
  Settings
</h1>
<form class="column" on:submit|preventDefault={e => console.log(e)}>
  <label for="login">Channel name</label>
  <input id="login" maxlength=100 type="text" value={$authStore.user.login}>
  <Switch label="Enabled"/>
  <button type="submit">
    Save
  </button>
</form>
