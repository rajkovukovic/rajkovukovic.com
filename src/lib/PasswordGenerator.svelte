<script lang="ts">
	import { globalWindow } from '$lib/globalWindow';
	import { generatePassword } from '$lib/generatePassword';
	import { safeStorage } from '$lib/safeStorage';
	import { makeFinite } from '$lib/utils';

	const minCharacterCount = 4;
	const maxCharacterCount = 20;
	let characterCount = makeFinite(safeStorage.passwordGeneratorCharacterCount, 8);
	let useSpecialCharacters = safeStorage.passwordGeneratorUseSpecialCharacters ?? true;
	let password = globalWindow.initialPassword ?? '';
	let copiedToClipboardTimer: any;
	let copyToClipboardError = false;

	copiedToClipboardTimer = setTimeout(
		() => (copiedToClipboardTimer = setTimeout(() => (copiedToClipboardTimer = null), 1500)),
		1000
	);

	function copyPasswordToClipboard() {
		Promise.resolve()
			.then(() => navigator.clipboard.writeText(password))
			.then(() => (copyToClipboardError = false))
			.catch(() => (copyToClipboardError = true))
			.finally(() => {
				clearTimeout(copiedToClipboardTimer);
				copiedToClipboardTimer = setTimeout(() => (copiedToClipboardTimer = null), 1500);
			});
	}

	function regeneratePassword() {
		password = generatePassword(characterCount, useSpecialCharacters);
	}

	function regeneratePasswordAndCopyToClipboard() {
		regeneratePassword();
		copyPasswordToClipboard();
	}

	globalWindow.regeneratePasswordAndCopyToClipboard = regeneratePasswordAndCopyToClipboard;

	function handleUseSpecialCharactersChange(event: any) {
		let value = event.target.checked ?? (!useSpecialCharacters);
		useSpecialCharacters = value;
		safeStorage.setItem('passwordGenerator.useSpecialCharacters', value);
		regeneratePasswordAndCopyToClipboard();
	}

	function increaseCharacterCount() {
		characterCount = characterCount < maxCharacterCount ? characterCount + 1 : minCharacterCount;
		safeStorage.setItem('passwordGenerator.characterCount', characterCount);
		regeneratePasswordAndCopyToClipboard();
	}

	function handleCharacterCountChange(event: any) {
		let value = event.currentTarget.value;
		characterCount = parseInt(value);
		safeStorage.setItem('passwordGenerator.characterCount', value);
		regeneratePasswordAndCopyToClipboard();
	}
</script>

<form on:submit|preventDefault={regeneratePasswordAndCopyToClipboard}>
	{#key password + copiedToClipboardTimer}
		<h2 on:click={copyPasswordToClipboard}>
			{copiedToClipboardTimer
				? copyToClipboardError
					? 'Tap password to copy'
					: 'Copied'
				: 'Password Generator'}
		</h2>
	{/key}
	<table>
		<tr on:click={copyPasswordToClipboard}>
			<td><label for="password">Password</label></td>
			<td>
				<span id="password" style:min-width="{maxCharacterCount}ch">{password}</span>
			</td>
		</tr>
		<tr>
			<td on:click={increaseCharacterCount}>
				<label for="not-characterCount">{characterCount} characters</label>
			</td>
			<td>
				<input
					type="range"
					id="characterCount"
					value={characterCount}
					on:input={handleCharacterCountChange}
					on:change={copyPasswordToClipboard}
					min={minCharacterCount}
					max={maxCharacterCount}
				/>
			</td>
		</tr>
		<tr>
			<td on:click={handleUseSpecialCharactersChange}>
				<label for="not-useSpecialCharacters">Special characters</label>
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
					<button>Generate New And Copy</button>
				</div>
			</td>
		</tr>
	</table>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 1em;
	}

	#password {
		display: inline-block;
		font-weight: bold;
		/* font-family: monospace; */
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

	input {
		-webkit-tap-highlight-color: transparent;
	}

	h2, label {
		user-select: none;
	}
</style>
