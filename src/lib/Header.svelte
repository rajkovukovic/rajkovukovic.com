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
		opacity: 0;
		animation: fadeIn 5s ease-out 1s forwards;
	}

	h1 {
		font-size: 24px;
	}
</style>
