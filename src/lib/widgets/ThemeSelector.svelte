<script lang="ts">
	import { IoDesktopOutline, IoMoonOutline, IoSunnyOutline } from '$lib/icons';
	import { availableThemes, setTheme, themeStore } from '$lib/state/app';
	import { Icon, type IconType } from 'svelte-icons-pack';
	import OverlayMenu from './OverlayMenu.svelte';
	import OverlayMenuItem from './OverlayMenuItem.svelte';

	const themeMap: Record<string, IconType> = {
		dark: IoMoonOutline,
		light: IoSunnyOutline,
		auto: IoDesktopOutline
	};
</script>

<OverlayMenu>
	<div>
		{#each availableThemes as theme}
			<OverlayMenuItem selected={theme === $themeStore} on:click={() => setTheme(theme)}>
				<Icon src={themeMap[theme] ?? IoDesktopOutline} />
			</OverlayMenuItem>
		{/each}
	</div>
</OverlayMenu>

<style>
	div {
		font-size: 2em;
	}
</style>
