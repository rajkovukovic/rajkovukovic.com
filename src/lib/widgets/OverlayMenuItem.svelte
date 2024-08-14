<script lang="ts">
	export let selected: boolean = false;
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="overlay-menu-item" class:selected on:click>
	<div class="overlay-menu-item-background"></div>
	<div class="overlay-menu-item-content">
		<slot />
	</div>
</div>

<style lang="scss">
	.overlay-menu-item {
		position: relative;
		padding: 0.5em 1em;
		cursor: default;
		&:not(.selected) {
			cursor: pointer;
		}
		&.selected .overlay-menu-item-background {
			background: rgba(0, 0, 0, 0.2);
		}
		&:hover .overlay-menu-item-background {
			background: rgba(0, 0, 0, 0.2) !important;
		}
	}

	.overlay-menu-item-background {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		border-radius: var(--border-radius-md);
	}

	.overlay-menu-item-content {
		position: relative;
		z-index: 1;
	}
</style>
