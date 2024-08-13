<script lang="ts">
	import SafeArea from './SafeArea.svelte';

	export let withSafeArea = true;
</script>

<section>
	<SafeArea enabled={withSafeArea}>
		<slot />
	</SafeArea>
</section>

<style lang="scss">
	section {
		padding: 12rem 8rem;
	}
</style>
