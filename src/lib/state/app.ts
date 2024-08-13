import { SettingsStorage } from "$lib/SettingsStorage";
import type { Page } from "@sveltejs/kit";
import { writable, type Writable } from "svelte/store";

export const errorStore: Writable<Page<Record<string, string>, string | null> | null> = writable(null);

export const showSettingsStore = writable(false);

export const languageStore: Writable<string | null> = writable(SettingsStorage.language);

export const themeStore: Writable<string | null> = writable(SettingsStorage.theme);

export function nextLanguage() {
	const languages = ['en', 'de', 'es'];
	const index = languages.indexOf(SettingsStorage.language ?? '');
	const language = index < 0 ? languages[0] : languages[(index + 1) % languages.length];
	SettingsStorage.language = language;
	console.log({ language });
}

export function nextTheme() {
	const themes = ['light', 'dark', 'system'];
	const index = themes.indexOf(SettingsStorage.theme ?? '');
	const theme = index < 0 ? themes[0] : themes[(index + 1) % themes.length];
	SettingsStorage.theme = theme;
	console.log({ theme });
}
