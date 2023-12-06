import { readable, writable } from "svelte/store";

export const input = writable<string>("");
export const showToast = writable<boolean>(false);
