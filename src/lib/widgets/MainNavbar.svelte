<script lang="ts">
	import { page } from '$app/stores';
	import { ownerName } from '$lib/ownerName';
	import { route404, routes } from '$lib/routes';
	import { errorStore } from '$lib/state/app';
	import NavBar from '$lib/widgets/shared/NavBar.svelte';
	import NavBarButton from '$lib/widgets/shared/NavBarButton.svelte';
	import { Icon } from 'svelte-icons-pack';

	$: rootPath = $page.url.pathname.split('/').slice(0, 2).join('/');
	$: console.log({ rootPath, pathname: $page.url.pathname });
	$: activeIndex = routes.findIndex((route) => route.path === rootPath);
	$: hasError = Boolean($errorStore);
	$: show404 = hasError && activeIndex < 0;
</script>

<svelte:head>
	<title>{ownerName}</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<NavBar>
	{#each routes as route, index}
		<NavBarButton
			active={index === activeIndex}
			error={index === activeIndex && hasError}
			href={route.path}
		>
			<Icon src={route.icon} />
		</NavBarButton>
	{/each}

	{#if show404}
		<NavBarButton active href={route404.path}>
			<Icon src={route404.icon} />
		</NavBarButton>
	{/if}
</NavBar>
