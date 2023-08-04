import {writable} from 'svelte/store';

import type {User} from '~/types/user';

type AuthData = {
  loggedIn: boolean;
  user: User | null;
}

function init() {
  const authStore = writable<AuthData>(
    JSON.parse(localStorage.getItem('auth-data')) || {loggedIn: false, user: null},
  );
  const broadcastChannel = new BroadcastChannel('auth-data-bs-channel');

  authStore.subscribe(value => localStorage['auth-data'] = JSON.stringify(value));

  broadcastChannel.onmessage = (event: any) => {
    if (event.data.key === 'auth-data') {
      authStore.set(JSON.parse(event.data.newValue));
    }
  };

  const update = ({loggedIn, user}: AuthData) => {
    authStore.set({loggedIn, user});
    broadcastChannel.postMessage({key: 'auth-data', newValue: JSON.stringify({loggedIn, user})});
  };

  const logout = () => update({loggedIn: false, user: null});


  return {authStore, logout, broadcastChannel, update};
}

export const {logout, broadcastChannel, update, authStore} = init();
