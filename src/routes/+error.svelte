<script>
	import { page } from '$app/stores';
	import { errorStore } from '$lib/state/app';
	import PageContainer from '$lib/widgets/shared/PageContainer.svelte';
	import { onDestroy, onMount } from 'svelte';

	onMount(() => errorStore.next($page));
	onDestroy(() => errorStore.next(null));
</script>

<PageContainer>
	<h1>{$page.status} {$page.error?.message}</h1>
	<p>
		{$page.status}
	</p>
</PageContainer>
