<script lang="ts">
	import { ownerName } from '$lib/ownerName';
	import PageContainer from '$lib/widgets/shared/PageContainer.svelte';
</script>

<svelte:head>
	<title>{ownerName}</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<PageContainer>
	<h1>Settings page</h1>
</PageContainer>

<style lang="scss">
</style>
