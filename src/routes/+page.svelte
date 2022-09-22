<script lang="ts">
	import { ownerName } from '$lib/ownerName';
	import PasswordGenerator from '$lib/PasswordGenerator.svelte';
</script>

<svelte:head>
	<title>{ownerName}</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<PasswordGenerator />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
		opacity: 0;
		animation: fadeIn 0.3s ease-out 1s forwards;
	}
</style>
