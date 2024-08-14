<script lang="ts">
	import SafeArea from './SafeArea.svelte';

	export let title: string | null = null;

	export let withSafeArea = true;
</script>

<svelte:head>
	{#if typeof title === 'string'}
		<title>{title}</title>
	{/if}
</svelte:head>

<section>
	<SafeArea enabled={withSafeArea}>
		<slot />
	</SafeArea>
</section>

<style lang="scss">
	section {
		padding: 6rem 3rem;
		opacity: 0;
		animation: fadeIn 0.5s ease-out 0.1s forwards;
	}

	@media only screen and (min-width: 769px) {
		section {
			padding: 12rem 6rem;
		}
	}
</style>
