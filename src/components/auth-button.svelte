<script lang="ts">
  import {Link} from 'svelte-routing';

  import {authStore, logout} from '~/stores/auth-store';
</script>

{#if $authStore.loggedIn}
  <a href="/#logout" on:click|preventDefault={logout}>
    Logout
  </a>
{:else}
  <Link to="/login">
    Login
  </Link>
{/if}
