<script lang="ts">
	let global: any = typeof window !== 'undefined' ? window : {};

	const maxCharacterCount = 24;
	let characterCount = global.initialCharacterCount ?? 8;
	let useSpecialCharacters = global.initialUseSpecialCharacters ?? true;
	let password = global.initialPassword ?? '';
	let copiedToClipboardTimer: any;

	copiedToClipboardTimer = setTimeout(
		() => (copiedToClipboardTimer = setTimeout(() => (copiedToClipboardTimer = null), 1500)),
		1000
	);

	const specialCharacters = '-+.:,!?*';
	const specialCharactersSet = new Set(specialCharacters.split(''));

	function getRandom(max: number) {
		return Math.floor(Math.random() * max);
	}

	function randomCharacter(characters: string): string {
		return characters.charAt(getRandom(characters.length));
	}

	function generatePassword(characterCount: number, useSpecialCharacters: boolean): string {
		let characters =
			'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890' +
			(useSpecialCharacters ? specialCharacters : '');

		let result: string[] = [];

		for (let i = 0; i < characterCount; i++) {
			result.push(randomCharacter(characters));
		}

		if (useSpecialCharacters ? !result.some((char) => specialCharactersSet.has(char)) : false) {
			result[getRandom(characterCount)] = randomCharacter(specialCharacters);
		}

		return result.join('');
	}

	function copyPasswordToClipboard() {
		navigator.clipboard
			.writeText(password)
			.then(() => console.log('copyPasswordToClipboard: success'))
			.catch(() => console.log('copyPasswordToClipboard: fail'));
		clearTimeout(copiedToClipboardTimer);
		copiedToClipboardTimer = setTimeout(() => (copiedToClipboardTimer = null), 1500);
	}

	function regeneratePasswordAndCopyToClipboard() {
		console.log('regeneratePasswordAndCopyToClipboard');
		password = generatePassword(characterCount, useSpecialCharacters);
		copyPasswordToClipboard();
	}

	function handleUseSpecialCharactersChange(event: any) {
		let value = event.target.checked;
		useSpecialCharacters = value;
		localStorage.setItem('passwordGenerator.useSpecialCharacters', value);
		regeneratePasswordAndCopyToClipboard();
	}

	function handleCharacterCountChange(event: any) {
		let value = event.currentTarget.value;
		characterCount = parseInt(value);
		localStorage.setItem('passwordGenerator.characterCount', value);
		regeneratePasswordAndCopyToClipboard();
	}
</script>

<section>
	{#key password + copiedToClipboardTimer}
		<h2>
			{copiedToClipboardTimer ? 'Copied' : 'Password Generator'}
		</h2>
	{/key}
	<table>
		<tr on:click={copyPasswordToClipboard}>
			<td><label for="password" on:click|preventDefault>Password</label></td>
			<td>
				<input
					readonly
					id="password"
					value={password}
					style:min-width="{maxCharacterCount * 1.2}ch"
				/>
			</td>
		</tr>
		<tr>
			<td>
				<label for="characterCount">Length = {characterCount}</label>
			</td>
			<td>
				<input
					type="range"
					id="characterCount"
					value={characterCount}
					on:change={handleCharacterCountChange}
					min="4"
					max={maxCharacterCount}
				/>
			</td>
		</tr>
		<tr>
			<td>
				<label for="useSpecialCharacters">Special characters</label>
			</td>
			<td>
				<input
					id="useSpecialCharacters"
					type="checkbox"
					checked={useSpecialCharacters}
					on:change={handleUseSpecialCharactersChange}
				/>
			</td>
		</tr>

		<tr>
			<td colspan="2">
				<div>
					<button on:click={regeneratePasswordAndCopyToClipboard}>Generate New And Copy</button>
				</div>
			</td>
		</tr>
	</table>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	h2 {
		text-align: center;
		animation: fadeIn 0.3s ease-out;
	}

	table {
		border-spacing: 0.5em;
	}

	td > div {
		display: flex;
		flex-direction: column;
		justify-content: stretch;
	}
</style>
