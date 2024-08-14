<script lang="ts">
	import { getContext, onDestroy, onMount } from 'svelte';
	import type { Writable } from 'svelte/store';

	export let active = false;
	export let error = false;
	export let href: string | null = null;
	export let position: 'corner' | 'up' | 'down' | null = null;

	let navBarButtonCBStore: Writable<Function | undefined> = getContext('navBarButtonCB');
	let w: number;
	let h: number;

	$: navBarButtonCB = $navBarButtonCBStore;

	$: if (navBarButtonCB) navBarButtonCB(w, h);

	onMount(() => navBarButtonCB && navBarButtonCB());
	onDestroy(() => navBarButtonCB && navBarButtonCB());
</script>

<a
	{href}
	class="nab-bar-button {position ?? ''}"
	class:active
	class:error
	bind:clientWidth={w}
	bind:clientHeight={h}
	on:click
>
	<div class="content">
		<slot />
	</div>
</a>

<style lang="scss">
	.nab-bar-button {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 10px;
		color: var(--color-navbar);
		min-width: 3rem;
		min-height: 3rem;
		transform-origin: 50% 50%;
		transition:
			opacity 0.2s ease-out,
			transform 0.2s ease-out;
		&.active,
		&:hover {
			color: var(--color-primary);
		}
		&:active {
			transform: scale(0.9);
		}
		&.error {
			color: var(--color-danger);
		}

		&.corner,
		&.up,
		&.down {
			opacity: 0;
			pointer-events: none;
		}

		&.corner {
			transform: translate(-35%, -35%) scale(2);
			opacity: 0.1;
		}

		&.up {
			transform: translateY(-100%);
		}

		&.down {
			transform: translateY(100%);
		}
	}

	.content {
		display: flex;
		justify-content: center;
		align-self: center;
		font-size: 1.2em;
	}

	// selector when screen is larger than 768px;
	@media only screen and (min-width: 769px) {
		.nab-bar-button {
			&.up {
				transform: translateX(-100%);
			}
			&.down {
				transform: translateX(100%);
			}
		}
	}
</style>
