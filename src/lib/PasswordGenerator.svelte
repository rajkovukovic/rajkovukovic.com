<script lang="ts">
	import { globalWindow } from '$lib/globalWindow';
	import { generatePassword } from '$lib/generatePassword';
	import { safeStorage } from '$lib/safeStorage';
	import { makeFinite } from '$lib/utils';

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

	function regeneratePasswordAndCopyToClipboard() {
		console.log('regeneratePasswordAndCopyToClipboard');
		password = generatePassword(characterCount, useSpecialCharacters);
		copyPasswordToClipboard();
	}

	globalWindow.regeneratePasswordAndCopyToClipboard = regeneratePasswordAndCopyToClipboard;

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

<form on:submit|preventDefault={regeneratePasswordAndCopyToClipboard}>
	{#key password + copiedToClipboardTimer}
		<h2>
			{copiedToClipboardTimer
				? copyToClipboardError
					? 'Please copy password manually'
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
			<td>
				<label for="characterCount">{characterCount} characters</label>
			</td>
			<td>
				<input
					type="range"
					id="characterCount"
					value={characterCount}
					on:input={handleCharacterCountChange}
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
</style>
