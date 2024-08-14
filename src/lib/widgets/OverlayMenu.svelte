<div class="overlay-menu-container">
	<div class="overlay-menu-wrapper">
		<slot />
	</div>
</div>

<style lang="scss">
	.overlay-menu-container {
		padding: var(--border-radius-lg);
		border-radius: var(--border-radius-lg);
		background-color: var(--color-bg-navbar);
		backdrop-filter: blur(5px);
	}

	.overlay-menu-wrapper {
		border-radius: var(--border-radius-md);
		overflow: hidden;

		&:hover :global(.overlay-menu-item-background) {
			background: none !important;
		}
	}
</style>
