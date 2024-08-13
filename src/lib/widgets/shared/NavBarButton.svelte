<script lang="ts">
	import { getContext, onDestroy, onMount } from 'svelte';
	import type { Writable } from 'svelte/store';

	export let active = false;
	export let error = false;
	export let href: string;

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
	class="nab-bar-button"
	class:active
	class:error
	bind:clientWidth={w}
	bind:clientHeight={h}
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
		&:first-of-type {
			border-radius: var(--border-radius-md) 0 0 var(--border-radius-md);
		}
		&:last-of-type {
			// border-right: 0.5px solid var(--color-navbar);
			border-radius: 0 var(--border-radius-md) var(--border-radius-md) 0;
		}
		&:not(:first-of-type) {
			margin-top: 0;
			margin-left: var(--navbar-button-spacing);
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
			&:first-of-type {
				border-radius: var(--border-radius-md) var(--border-radius-md) 0 0;
			}
			&:last-of-type {
				border-radius: 0 0 var(--border-radius-md) var(--border-radius-md);
			}
			&:not(:first-of-type) {
				margin-top: var(--navbar-button-spacing);
				margin-left: 0;
			}
		}
	}
</style>
