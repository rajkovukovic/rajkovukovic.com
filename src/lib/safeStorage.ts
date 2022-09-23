class SafeStorage {
	clear() {
		try {
			return localStorage.clear();
		} finally {
			// noop
		}
	}

	getItem(key: string): any {
		try {
			const raw = localStorage.getItem(key);
			return raw == null ? null : JSON.parse(raw);
		} catch (error) {
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

	setItem(key: string, value: any) {
		try {
			return localStorage.setItem(key, JSON.stringify(value));
		} finally {
			// noop
		}
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