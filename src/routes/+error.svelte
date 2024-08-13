<script>
	import { page } from '$app/stores';
	import { errorStore } from '$lib/state/app';
	import { onDestroy, onMount } from 'svelte';

	onMount(() => errorStore.set($page));
	onDestroy(() => errorStore.set(null));
</script>

<h1>{$page.status} {$page.error?.message}</h1>
<p>
	{$page.status}
</p>
