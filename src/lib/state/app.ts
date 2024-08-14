import { SettingsStorage } from "$lib/SettingsStorage";
import type { Page } from "@sveltejs/kit";
import { BehaviorSubject, merge, Observable, of } from 'rxjs';
import { delay, distinctUntilChanged, map, skip, startWith, switchMap } from 'rxjs/operators';

export const errorStore = new BehaviorSubject<Page<Record<string, string>, string | null> | null>(null);

export const showSettingsStore = new BehaviorSubject(false);

export const languageStore = new BehaviorSubject<string | null>(SettingsStorage.language);

export const themeStore = new BehaviorSubject<string | null>(SettingsStorage.theme);

export const availableLanguages = ['en', 'de', 'es'];
export const availableThemes = ['light', 'dark', 'auto'];

export function setLanguage(language: string) {
	SettingsStorage.language = language;
	languageStore.next(language);
}

export function setTheme(theme: string) {
	SettingsStorage.theme = theme;
	themeStore.next(theme);
}

export function nextLanguage() {
	const index = availableLanguages.indexOf(SettingsStorage.language ?? '');
	const language = index < 0 ? availableLanguages[0] : availableLanguages[(index + 1) % availableLanguages.length];
	setLanguage(language);
}

export function nextTheme() {
	const index = availableThemes.indexOf(SettingsStorage.theme ?? '');
	const theme = index < 0 ? availableThemes[0] : availableThemes[(index + 1) % availableThemes.length];
	setTheme(theme);
}

export type InfoPanelData = {
	language?: string | null;
	theme?: string | null;
}

export const infoPanelStore: Observable<InfoPanelData | null> = merge(
	languageStore.pipe(distinctUntilChanged(), skip(1), map(language => ({ language }))),
	themeStore.pipe(distinctUntilChanged(), skip(1), map(theme => ({ theme })))
)
	.pipe(
		switchMap(value =>
			of(null).pipe(delay(100), startWith(value))
		),
		startWith(null),
	);
