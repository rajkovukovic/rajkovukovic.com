<script>
	import { page } from '$app/stores';
	import { errorStore } from '$lib/state/app';
	import SafeArea from '$lib/widgets/shared/SafeArea.svelte';
	import { onDestroy, onMount } from 'svelte';

	onMount(() => errorStore.set($page));
	onDestroy(() => errorStore.set(null));
</script>

<section>
	<SafeArea>
		<h1>{$page.status} {$page.error?.message}</h1>
		<p>
			{$page.status}
		</p>
	</SafeArea>
</section>
