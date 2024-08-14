<script lang="ts">
	import { browser } from '$app/environment';

	let w: number;
	let h: number;

	$: browser && document.documentElement.style.setProperty('--navbar-width', `${w}px`);
	$: browser && document.documentElement.style.setProperty('--navbar-height', `${h}px`);
</script>

<div class="navbar-wrapper" bind:clientWidth={w} bind:clientHeight={h}>
	<slot></slot>
</div>

<style lang="scss">
	.navbar-wrapper {
		position: relative;
		z-index: 10;
		display: flex;
		flex-direction: row;
		width: fit-content;
		height: auto;
		bottom: 0;
		overflow: hidden;
		border-radius: var(--border-radius-md);
		// border: 0.5px solid var(--color-navbar);
		// frosted glass effect
		background-color: var(--color-bg-navbar);
		backdrop-filter: blur(5px);
		// box-shadow: 0 0 15px 10px var(--color-bg-navbar);
		// filter: drop-shadow(0 0 1rem 0.75rem var(--color-bg-navbar));
	}

	// selector when screen is larger than 768px;
	@media only screen and (min-width: 769px) {
		.navbar-wrapper {
			display: flex;
			flex-direction: column;
		}
	}
</style>
