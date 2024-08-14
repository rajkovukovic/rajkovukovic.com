<script lang="ts">
	export let enabled = true;
</script>

<div class="safe-area" class:enabled>
	<slot />
</div>

<style lang="scss">
	.safe-area {
		&.enabled {
			margin-top: var(--safe-area-top);
			margin-left: var(--safe-area-left);
			margin-right: var(--safe-area-right);
			margin-bottom: var(--safe-area-bottom);
		}
	}
</style>
