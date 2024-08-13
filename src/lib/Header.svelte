<script lang="ts">
	export let name: string;
</script>

<header>
	<h1>{name}</h1>
</header>

<style>
	header {
		flex: 0 0 auto;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 3em;
	}

	h1 {
		font-size: 24px;
	}
</style>
