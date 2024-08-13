<script lang="ts">
	import { browser } from '$app/environment';

	let w: number;
	let h: number;

	$: browser && document.documentElement.style.setProperty('--navbar-width', `${w}px`);
	$: browser && document.documentElement.style.setProperty('--navbar-height', `${h}px`);

	$: browser && console.log('--navbar-width', `${w ?? 0}px`);
	$: browser && console.log('--navbar-height', `${h ?? 0}px`);
</script>

<div class="navbar-container" bind:clientWidth={w} bind:clientHeight={h}>
	<div class="navbar-wrapper">
		<slot></slot>
	</div>
</div>

<style lang="scss">
	.navbar-container {
		position: fixed;
		top: auto;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		// background-color: rgba(0, 255, 255, 0.18);
	}

	.navbar-wrapper {
		display: flex;
		flex-direction: row;
		position: absolute;
		position: relative;
		width: fit-content;
		height: auto;
		bottom: 0;
		padding: var(--spacing-sm);
		// background-color: rgba(165, 42, 42, 0.631);
	}

	// selector when screen is larger than 768px;
	@media only screen and (min-width: 769px) {
		.navbar-container {
			top: 0;
			right: auto;
		}

		.navbar-wrapper {
			display: flex;
			flex-direction: column;
		}
	}
</style>
