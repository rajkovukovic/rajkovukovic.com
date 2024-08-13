<div class="safe-area">
	<slot />
</div>

<style lang="scss">
	div {
		padding-top: var(--safe-area-top);
		padding-left: var(--safe-area-left);
		padding-right: var(--safe-area-right);
		padding-bottom: var(--safe-area-bottom);
	}
</style>
