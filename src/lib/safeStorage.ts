import { browser } from "$app/environment";
import { availableLanguages } from "./constants";

class SafeStorage {
	clear() {
		try {
			return localStorage.clear();
		} finally {
			// noop
		}
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	getItem(key: string): any {
		try {
			const raw = localStorage.getItem(key);
			const parsed = raw == null ? null : JSON.parse(raw);

			// Check if the parsed value is a number stored as a string and convert it back to a number
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			if (typeof parsed === 'string' && !isNaN(parsed as any)) {
				return Number(parsed);
			}

			return parsed;
		} catch {
			return null;
		}
	}

	removeItem(key: string) {
		try {
			return localStorage.removeItem(key);
		} finally {
			// noop
		}
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	setItem(key: string, value: any) {
		try {
			if (value == null) {
				localStorage.removeItem(key);
			} else {
				localStorage.setItem(key, JSON.stringify(value));
			}
		} catch {
			// noop
		}
	}

	get language(): string | null {
		const value = this.getItem('language');
		return availableLanguages.includes(value) ? value : getUserPreferredLanguage();
	}

	set language(value: string | null) {
		this.setItem('language', value);
	}

	get theme(): string | null {
		const value = this.getItem('theme');
		return typeof value === 'string' ? value : null;
	}

	set theme(value: string | null) {
		this.setItem('theme', value);
	}

	get passwordGeneratorCharacterCount(): number | null {
		const value = this.getItem('passwordGenerator.characterCount');
		return typeof value === 'number' ? value : null;
	}

	set passwordGeneratorCharacterCount(value: number | null) {
		this.setItem('passwordGenerator.characterCount', value);
	}

	get passwordGeneratorUseSpecialCharacters(): boolean | null {
		const value = this.getItem('passwordGenerator.useSpecialCharacters');
		return typeof value === 'boolean' ? value : null;
	}

	set passwordGeneratorUseSpecialCharacters(value: boolean | null) {
		this.setItem('passwordGenerator.useSpecialCharacters', value);
	}
}

export const safeStorage = new SafeStorage();

export function getUserPreferredLanguage(requestHeaders?: Headers): string {
	let browserLanguages: string[] = [];

	if (browser) {
		browserLanguages = (navigator.languages || [navigator.language]).slice();
	} else if (requestHeaders) {
		// Server-side: Use request headers to get the preferred language
		const acceptLanguage = requestHeaders.get('accept-language');
		if (acceptLanguage) {
			browserLanguages = acceptLanguage.split(',').map(lang => lang.split(';')[0]);
		}
	}

	// Fallback to 'en' if no languages are detected
	if (browserLanguages.length === 0) {
		return availableLanguages[0];
	}

	for (const lang of browserLanguages) {
		const primaryLang = lang.split('-')[0]; // Extract the primary language code, e.g., 'en' from 'en-US'
		if (availableLanguages.includes(primaryLang)) {
			return primaryLang;
		}
	}

	// Default to the first available language if no match is found
	return availableLanguages[0];
}
