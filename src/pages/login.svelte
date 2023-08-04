<script lang="ts">
  import {navigate} from 'svelte-routing';

  import {authStore, update} from '~/stores/auth-store';


  const apiURL = `${import.meta.env.VITE_API_ENDPOINT}/auth`;

  if ($authStore.loggedIn) {
    navigate('/')
  }
  const testUser = {
    user: {
      id: 'test_id',
      login: 'test_login',
      display_name: 'test_display_name',
      email: 'test@emailssfg.gg',
      enabled: true,
    },
    loggedIn: true
  };
</script>


<a href={apiURL}>Connect Twitch</a>
<button on:click={() => update(testUser)}>test login</button>