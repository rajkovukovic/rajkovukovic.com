import { browser } from "$app/environment";

class SafeLocalStorage {
	static getItem(key: string): string | null {
		return browser ? localStorage.getItem(key) : null;
	}

	static setItem(key: string, value: string) {
		if (browser != null) {
			localStorage.setItem(key, value);
		}
	}

	static removeItem(key: string) {
		if (browser) {
			localStorage.removeItem(key);
		}
	}
}

export class SettingsStorage {
	static get language(): string | null {
		return SafeLocalStorage.getItem('language');
	}

	static set language(value: string | null) {
		if (value == null) {
			SafeLocalStorage.removeItem('language');
		} else {
			SafeLocalStorage.setItem('language', value);
		}
	}

	static get theme(): string | null {
		return SafeLocalStorage.getItem('theme');
	}

	static set theme(value: string | null) {
		if (value == null) {
			SafeLocalStorage.removeItem('theme');
		} else {
			SafeLocalStorage.setItem('theme', value);
		}
	}
}
