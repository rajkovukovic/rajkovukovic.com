<script lang="ts">
	import { infoPanelStore, mouseInSettingsPanelStore, type InfoPanelData } from '$lib/state/app';
	import LanguageSelector from './LanguageSelector.svelte';
	import ThemeSelector from './ThemeSelector.svelte';

	let timer: number | undefined;
	let isMouseIn: boolean;
	let action: InfoPanelData | null = null;
	let lastAction: InfoPanelData | null = null;

	$: isMouseIn = $mouseInSettingsPanelStore;
	$: action = $infoPanelStore;
	$: lastAction = action ?? lastAction;

	// cancel fade out when there is an action to display or mouse inside the div
	$: if ((action || isMouseIn) && timer) {
		clearTimeout(timer);
		timer = undefined;
	}
	// set up fade out when no action and mouse is out and fade-out timer is not already running
	else if (!action && !isMouseIn && !timer) {
		timer = setTimeout(() => {
			lastAction = null;
			timer = undefined;
		}, 1200);
	}
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class:visible={Boolean(action) || isMouseIn}
	on:mouseenter={() => mouseInSettingsPanelStore.next(true)}
	on:mouseleave={() => mouseInSettingsPanelStore.next(false)}
>
	{#if lastAction?.language}
		<LanguageSelector />
	{:else if lastAction?.theme}
		<ThemeSelector />
	{/if}
</div>

<style lang="scss">
	div {
		&:not(.visible) {
			transition: opacity 0.2s ease-out 1s;
			opacity: 0;
		}
	}
</style>
