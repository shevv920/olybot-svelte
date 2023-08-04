<script lang="ts">
  import {Link, Route, Router} from 'svelte-routing';

  import AuthButton from '~/components/auth-button.svelte';
  import Home from '~/pages/home.svelte';
  import Login from '~/pages/login.svelte';
  import Settings from '~/pages/settings.svelte';

  import {authStore} from './stores/auth-store';
</script>

<Router>
  <header>
    <nav>
      <div class="apart">
        <nav>
          <Link to="/">Home</Link>
          {#if $authStore.user}
            <Link to="/settings">Settings</Link>
          {/if}
        </nav>
        <AuthButton/>
      </div>
    </nav>
  </header>
  <main>
    <Route exact path="/">
      <Home/>
    </Route>
    <Route path="/settings">
      <Settings/>
    </Route>
    <Route path="/login">
      <Login/>
    </Route>
  </main>
</Router>
