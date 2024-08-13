<script lang="ts">
	export let enabled = true;
</script>

<div class="safe-area" class:enabled>
	<slot />
</div>

<style lang="scss">
	.safe-area {
		&.enabled {
			padding-top: var(--safe-area-top);
			padding-left: var(--safe-area-left);
			padding-right: var(--safe-area-right);
			padding-bottom: var(--safe-area-bottom);
		}
	}
</style>
