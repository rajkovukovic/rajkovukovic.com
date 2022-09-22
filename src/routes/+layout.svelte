<script lang="ts">
	import Header from '$lib/Header.svelte';
	import { ownerName } from '$lib/ownerName';
</script>

<Header name={ownerName} />
<main>
	<slot />
</main>

<style>
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
