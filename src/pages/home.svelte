<script lang="ts">
  import {authStore} from '~/stores/auth-store';
</script>

<h1>
  Home
</h1>
<main>
  {#if $authStore.loggedIn}
    <p>{$authStore.user?.email}</p>
  {/if}
</main>