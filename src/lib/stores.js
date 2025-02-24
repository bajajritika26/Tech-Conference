import { writable } from 'svelte/store';

// Create a writable store with darkMode defaulting to false
export const darkMode = writable(false);
