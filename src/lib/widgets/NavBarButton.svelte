<script lang="ts">
	import { getContext, onDestroy, onMount } from 'svelte';
	import type { Writable } from 'svelte/store';

	let navBarButtonCBStore: Writable<Function | undefined> = getContext('navBarButtonCB');
	let w: number;
	let h: number;

	$: navBarButtonCB = $navBarButtonCBStore;

	$: if (navBarButtonCB) navBarButtonCB(w, h);

	onMount(() => navBarButtonCB && navBarButtonCB());
	onDestroy(() => navBarButtonCB && navBarButtonCB());
</script>

<span class="nab-bar-button" bind:clientWidth={w} bind:clientHeight={h}>
	<slot />
</span>

<style lang="scss">
	.nab-bar-button {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 10px;
		background-color: var(--color-text-secondary);
		color: var(--color-bg-secondary);
		min-width: 40px;
		min-height: 40px;
		&:first-of-type {
			border-radius: var(--border-radius-md) 0 0 var(--border-radius-md);
		}
		&:last-of-type {
			border-radius: 0 var(--border-radius-md) var(--border-radius-md) 0;
		}
		&:not(:first-of-type) {
			margin-top: 0;
			margin-left: var(--navbar-button-spacing);
		}
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
