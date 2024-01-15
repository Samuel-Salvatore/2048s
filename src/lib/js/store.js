import { readable, writable } from 'svelte/store';
import { UAParser } from 'ua-parser-js';
import { browser } from '$app/environment';

// export const is_mobile = readable(false);
export const is_mobile = readable(false, (set) => {
	let ua_parser = new UAParser();
	let is_mobile = ua_parser.getResult().device.type
		? ua_parser.getResult().device?.type
		: 'desktop';

	set(is_mobile != 'desktop');
});

//game status
export const star_game = writable(true);

//current game score and best score
export let score = writable(0);

//game local best score backed by localStorage
export const best_score = writable((browser && localStorage.getItem('best_score')) || '0');
best_score.subscribe((val) => {
	if (browser) return (localStorage.best_score = val);
});

const local_user_email = localStorage._user_email;
const local_user_authenticated = localStorage._user_authenticated;
const local_user_login_progress = localStorage._user_login_progress;
const local_user_last_mex_id = localStorage._user_last_mex_id;


export const user_email = writable(local_user_email || null);
export const user_authenticated = writable(local_user_authenticated || false);
export const user_login_progress = writable(local_user_login_progress || false);
export const last_feedback = writable(0);
export const title_bar = writable(0);
export const cloud_mex = writable(0);
export const last_mex_id = writable(local_user_last_mex_id || 0);

user_email.subscribe((value) => localStorage._user_email = value);
user_authenticated.subscribe((value) => localStorage._user_authenticated = value);
user_login_progress.subscribe((value) => localStorage._user_login_progress = value);
last_mex_id.subscribe((value) => localStorage._user_last_mex_id = value);