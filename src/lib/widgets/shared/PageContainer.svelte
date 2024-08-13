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
		opacity: 0;
		animation: fadeIn 0.5s ease-out 0.1s forwards;
	}
</style>
