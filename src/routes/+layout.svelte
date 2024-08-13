<script lang="ts">
	import MainNavbar from '$lib/widgets/MainNavbar.svelte';
</script>

<!-- <Header name={ownerName} /> -->
<main>
	<slot />
	<MainNavbar />
</main>

<style lang="scss">
	:global(body) {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: stretch;
		align-items: stretch;
	}

	main {
		flex: 1 1 auto;
		display: flex;
		flex-direction: column;
		justify-content: stretch;
		align-items: stretch;
	}
</style>
