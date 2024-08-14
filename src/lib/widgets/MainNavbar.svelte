<script lang="ts">
	import { page } from '$app/stores';
	import { ownerName } from '$lib/ownerName';
	import { route404, routes, settingsRoutes } from '$lib/routes';
	import { errorStore, nextLanguage, nextTheme, showSettingsStore } from '$lib/state/app';
	import NavBar from '$lib/widgets/shared/NavBar.svelte';
	import NavBarButton from '$lib/widgets/shared/NavBarButton.svelte';
	import { Icon } from 'svelte-icons-pack';
	import OverlayInfoPanel from './OverlayInfoPanel.svelte';

	$: rootPath = $page.url.pathname.split('/').slice(0, 2).join('/');
	$: console.log({ rootPath, pathname: $page.url.pathname });
	$: activeIndex = routes.findIndex((route) => route.path === rootPath);
	$: hasError = Boolean($errorStore);
	$: show404 = hasError && activeIndex < 0;
	// $: if (hasError && $showSettingsStore) {
	// 	showSettingsStore.set(false);
	// }

	function handleAction(event: Event, action: string | undefined) {
		if (!action) {
			return;
		}

		event.preventDefault();
		event.stopPropagation();

		switch (action) {
			case 'settings':
				showSettingsStore.next(true);
				break;
			case 'back':
				showSettingsStore.next(false);
				break;
			case 'language':
				nextLanguage();
				break;
			case 'theme':
				nextTheme();
				break;
		}
	}
</script>

<svelte:head>
	<title>{ownerName}</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<!-- style="transform: scale(0.5) translate(-50%, - 50%);" -->
<div class="nav-bar-container">
	<NavBar>
		{#each routes as route, index}
			<NavBarButton
				active={index === activeIndex}
				error={index === activeIndex && hasError}
				href={route.path ?? ''}
				position={!$showSettingsStore ? null : index === 0 ? 'corner' : 'up'}
				on:click={(event) => handleAction(event, route.action)}
			>
				<Icon src={route.icon} />
			</NavBarButton>
		{/each}

		{#if show404}
			<NavBarButton error href={route404.path}>
				<Icon src={route404.icon} />
			</NavBarButton>
		{/if}

		<div class="settings-menu" class:disabled={!$showSettingsStore}>
			{#each settingsRoutes as route}
				<NavBarButton
					href={''}
					position={$showSettingsStore ? null : 'down'}
					on:click={(event) => handleAction(event, route.action)}
				>
					{#if route.icon}
						<Icon src={route.icon} />
					{:else}
						{route.emoji}
					{/if}
				</NavBarButton>
			{/each}
		</div>
	</NavBar>

	<div class="info-panel-container">
		<OverlayInfoPanel />
	</div>
</div>

<style lang="scss">
	.nav-bar-container {
		position: fixed;
		top: auto;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: var(--spacing-md);
	}

	.settings-menu {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
		&.disabled {
			pointer-events: none;
		}
	}

	.info-panel-container {
		position: absolute;
		bottom: 4rem;
		left: 0;
		right: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	// selector when screen is larger than 768px;
	@media only screen and (min-width: 769px) {
		.nav-bar-container {
			top: 0;
			right: auto;
			flex-direction: column;
		}

		.settings-menu {
			flex-direction: column;
		}

		.info-panel-container {
			top: 0;
			bottom: 0;
			left: 4rem;
			right: unset;
		}
	}
</style>
