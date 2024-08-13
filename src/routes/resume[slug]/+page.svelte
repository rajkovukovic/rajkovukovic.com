<script lang="ts">
	import { ownerName } from '$lib/ownerName';
	import { resumes } from '$lib/resumes';
	import PageContainer from '$lib/widgets/shared/PageContainer.svelte';

	const resume = resumes[0];
</script>

<svelte:head>
	<title>{ownerName}</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<PageContainer>
	<div class="resume">
		<h1 class="center upper">Rajko Vukovic</h1>
		<h3 class="center">/ ry-ko &nbsp; voo-koh-vich /</h3>

		<hr />

		<h2 class="upper">Summary</h2>
		<p>
			{resume.summary}
		</p>

		<hr />

		<h2 class="upper">Work Experience</h2>

		<hr />

		<h2 class="upper">Skills</h2>

		<hr />

		<h2 class="upper">Education</h2>
	</div>
</PageContainer>

<style lang="scss">
	h1,
	h2,
	h3 {
		margin: 0;
	}

	.center {
		text-align: center;
	}

	.upper {
		text-transform: uppercase;
	}

	h3 {
		font-weight: 200;
	}

	p {
		text-align: justify;
	}

	hr {
		margin: 2rem 0;
	}

	.resume {
		max-width: 720px;
		margin: auto;
	}
</style>
