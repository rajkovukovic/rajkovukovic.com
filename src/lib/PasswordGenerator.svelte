<script lang="ts">
	import { generatePassword } from '$lib/generatePassword';
	import { globalWindow } from '$lib/globalWindow';
	import { safeStorage } from '$lib/safeStorage';
	import { makeFinite } from '$lib/utils';
	import { localization } from './localization';
	import { translatorStore } from './state/app';

	const minCharacterCount = 4;
	const maxCharacterCount = 20;
	let characterCount = makeFinite(safeStorage.passwordGeneratorCharacterCount, 8);
	let useSpecialCharacters = safeStorage.passwordGeneratorUseSpecialCharacters ?? true;
	let password =
		globalWindow.initialPassword ?? generatePassword(characterCount, useSpecialCharacters);
	let copiedToClipboardTimer: any;
	let copyToClipboardError = null;

	// copiedToClipboardTimer = setTimeout(
	// 	() => (copiedToClipboardTimer = setTimeout(() => (copiedToClipboardTimer = null), 1500)),
	// 	1000
	// );

	function copyPasswordToClipboard() {
		Promise.resolve()
			.then(() => navigator.clipboard.writeText(password))
			.then(() => (copyToClipboardError = null))
			.catch((e) => (copyToClipboardError = e))
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
		let value = event.target.checked ?? !useSpecialCharacters;
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

<form on:submit|preventDefault={copyPasswordToClipboard}>
	{#key password + copiedToClipboardTimer}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<h2 on:click={copyPasswordToClipboard}>
			{copiedToClipboardTimer
				? $translatorStore(localization.passwordGeneratorCopied)
				: $translatorStore(localization.passwordGeneratorTitle)}
		</h2>
	{/key}
	<table>
		<tbody>
			<tr on:click={copyPasswordToClipboard}>
				<td
					><label for="password">{$translatorStore(localization.passwordGeneratorPassword)}</label
					></td
				>
				<td>
					<span id="password" style:min-width="{maxCharacterCount}ch">{password}</span>
				</td>
			</tr>
			<tr>
				<td on:click={increaseCharacterCount}>
					<label for="not-characterCount"
						>{characterCount} {$translatorStore(localization.passwordGeneratorCharacters)}</label
					>
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
					<label for="not-useSpecialCharacters"
						>{$translatorStore(localization.passwordGeneratorSpecial)}</label
					>
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
					<div class="button-wrapper">
						<button on:click|preventDefault={regeneratePasswordAndCopyToClipboard}
							>{$translatorStore(localization.passwordGeneratorGenerateAndCopy)}</button
						>
						<button on:click|preventDefault={copyPasswordToClipboard} class="default"
							>{$translatorStore(localization.passwordGeneratorCopy)}</button
						>
					</div>
				</td>
			</tr>
		</tbody>
	</table>
</form>

<style lang="scss">
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

	h2,
	label {
		user-select: none;
	}

	button {
		flex: 1 1 auto;
		&:first-of-type {
			margin-right: 1rem;
		}
	}

	.button-wrapper {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-top: 1rem;
	}
</style>
