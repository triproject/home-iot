import { writable } from 'svelte/store';

const userStore = writable({
	isLoggedIn: false,
	name: '',
	email: ''
});

export default userStore;
