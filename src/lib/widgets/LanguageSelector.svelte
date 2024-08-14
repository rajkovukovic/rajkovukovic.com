<script lang="ts">
	import { availableLanguages } from '$lib/constants';
	import { languageStore, setLanguage } from '$lib/state/app';
	import OverlayMenu from './OverlayMenu.svelte';
	import OverlayMenuItem from './OverlayMenuItem.svelte';

	const languageMap: Record<string, string> = {
		de: '🇩🇪',
		en: '🇬🇧',
		es: '🇪🇸'
	};
</script>

<OverlayMenu>
	<div>
		{#each availableLanguages as language}
			<OverlayMenuItem
				selected={language === $languageStore}
				on:click={() => setLanguage(language)}
			>
				{languageMap[language]}
			</OverlayMenuItem>
		{/each}
	</div>
</OverlayMenu>

<style>
	div {
		font-size: 2em;
	}
</style>
