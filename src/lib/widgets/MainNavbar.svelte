<script lang="ts">
	import { page } from '$app/stores';
	import { ownerName } from '$lib/ownerName';
	import { route404, routes, settingsRoutes } from '$lib/routes';
	import { errorStore, nextLanguage, nextTheme, showSettingsStore } from '$lib/state/app';
	import NavBar from '$lib/widgets/shared/NavBar.svelte';
	import NavBarButton from '$lib/widgets/shared/NavBarButton.svelte';
	import { Icon } from 'svelte-icons-pack';

	$: rootPath = $page.url.pathname.split('/').slice(0, 2).join('/');
	$: console.log({ rootPath, pathname: $page.url.pathname });
	$: activeIndex = routes.findIndex((route) => route.path === rootPath);
	$: hasError = Boolean($errorStore);
	$: show404 = hasError && activeIndex < 0;
	$: if (hasError && $showSettingsStore) {
		showSettingsStore.set(false);
	}

	function handleAction(event: Event, action: string | undefined) {
		if (!action) {
			return;
		}

		event.preventDefault();
		event.stopPropagation();

		switch (action) {
			case 'settings':
				showSettingsStore.set(true);
				break;
			case 'back':
				showSettingsStore.set(false);
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

<div class="flip-box-container">
	<div class="flip-box" class:flipped={$showSettingsStore}>
		<div class="flip-box-inner">
			<div class="flip-box-front">
				<NavBar>
					{#each routes as route, index}
						<NavBarButton
							active={index === activeIndex}
							error={index === activeIndex && hasError}
							href={route.path ?? ''}
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
				</NavBar>
			</div>
			<div class="flip-box-back">
				<NavBar>
					{#each settingsRoutes as route, index}
						<NavBarButton href={''} on:click={(event) => handleAction(event, route.action)}>
							{#if route.icon}
								<Icon src={route.icon} />
							{:else}
								{route.emoji}
							{/if}
						</NavBarButton>
					{/each}
				</NavBar>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.flip-box-container {
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
	/* source: https://www.w3schools.com/howto/howto_css_flip_box.asp */
	.flip-box {
		position: relative;
		perspective: 1000px; /* Remove this if you don't want the 3D effect */
		/* Do an horizontal flip when you move the mouse over the flip box container */
		&:not(.flipped) {
			.flip-box-back {
				pointer-events: none;
			}
		}
		&.flipped {
			.flip-box-inner {
				transform: rotateY(180deg);
			}
			.flip-box-front {
				pointer-events: none;
			}
		}
	}

	/* This container is needed to position the front and back side */
	.flip-box-inner {
		/* background-color: darkmagenta; */
		position: relative;
		/* width: 100%;
		height: 100%; */
		text-align: center;
		transition: transform 0.4s ease-in-out;
		transform-style: preserve-3d;
	}

	/* Position the front and back side */
	.flip-box-front,
	.flip-box-back {
		position: relative;
		// -webkit-backface-visibility: hidden; /* Safari */
		backface-visibility: hidden;
		transition: pointer-events 0.4s linear 0.4s;
	}

	.flip-box-back {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.flip-box-back {
		transform: translateZ(-0.01px) rotateY(180deg);
	}

	// selector when screen is larger than 768px;
	@media only screen and (min-width: 769px) {
		.flip-box-container {
			top: 0;
			right: auto;
		}

		.flip-box {
			&.flipped {
				.flip-box-inner {
					transform: rotateX(180deg);
				}
			}
		}

		.flip-box-back {
			transform: translateZ(-0.01px) rotateX(180deg);
		}
	}
</style>
