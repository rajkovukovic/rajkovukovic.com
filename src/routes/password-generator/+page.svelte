<script lang="ts">
	import { ownerName } from '$lib/ownerName';
	import PasswordGenerator from '$lib/PasswordGenerator.svelte';
	import PageContainer from '$lib/widgets/shared/PageContainer.svelte';
</script>

<svelte:head>
	<title>{ownerName}</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<PageContainer>
	<div>
		<PasswordGenerator />
	</div>
</PageContainer>

<style>
	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}
</style>
