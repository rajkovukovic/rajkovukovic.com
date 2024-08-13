<script lang="ts">
	import { ownerName } from '$lib/ownerName';
	import SafeArea from '$lib/widgets/shared/SafeArea.svelte';
</script>

<svelte:head>
	<title>{ownerName}</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<SafeArea>Settings page</SafeArea>
</section>

<style lang="scss">
	div {
		padding: 2rem;
	}
</style>
