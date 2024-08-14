<script lang="ts">
	import { localization } from '$lib/localization';
	import { ownerName } from '$lib/ownerName';
	import { resumes } from '$lib/resumes';
	import { translatorStore } from '$lib/state/app';
	import PageContainer from '$lib/widgets/shared/PageContainer.svelte';

	const resume = resumes[0];

	function formatDate(dateString: Date | null): string {
		if (!dateString) return 'Present';
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
	}
</script>

<svelte:head>
	<title>{ownerName}</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<PageContainer>
	<div class="resume">
		<h1 class="center upper zero-margin">{$translatorStore(resume.name)}</h1>
		{#if resume.phoneticName}
			<h3 class="center zero-margin">
				<span class="phonetic-slash">/ </span>
				{$translatorStore(resume.phoneticName)}
				<span class="phonetic-slash"> /</span>
			</h3>
		{/if}

		<hr />

		<h2 class="upper">{$translatorStore(localization.resumeSummary)}</h2>
		<p>
			{$translatorStore(resume.summary)}
		</p>

		<hr />

		<h2 class="upper">{$translatorStore(localization.resumeWorkExperience)}</h2>
		{#each resume.workExperience as job}
			<div class="job">
				<h3 style="margin-bottom: 0;">{$translatorStore(job.position)}</h3>
				<h4 style="margin-top: 0;">
					{$translatorStore(job.company)} &nbsp;
					<span style="opacity: 0.5;">{formatDate(job.startDate)} - {formatDate(job.endDate)}</span>
				</h4>
				<ul>
					{#each job.responsibilities as responsibility}
						<li>{$translatorStore(responsibility)}</li>
					{/each}
				</ul>
			</div>
		{/each}

		<hr />

		<h2 class="upper">{$translatorStore(localization.resumeSkills)}</h2>
		<ul class="skills">
			{#each resume.skills as skill}
				<li>{$translatorStore(skill.name)}</li>
			{/each}
		</ul>

		<hr />

		<h2 class="upper">{$translatorStore(localization.resumeEducation)}</h2>
		{#each resume.education as edu}
			<div class="education">
				<h3>{$translatorStore(edu.degree)}</h3>
				<h4>{$translatorStore(edu.institution)}</h4>
				<p>{$translatorStore(edu.field)}</p>
				<!-- <p class="date">Graduated: {formatDate(edu.graduationDate)}</p> -->
			</div>
		{/each}
	</div>
</PageContainer>

<style lang="scss">
	.zero-margin {
		margin: 0;
	}

	.center {
		text-align: center;
	}

	.upper {
		text-transform: uppercase;
	}

	h4 {
		font-style: italic;
	}

	p {
		text-align: justify;
	}

	hr {
		margin: 2rem 0;
		opacity: 0.5;
		height: 1px;
		border: 0;
		border-top: 1px solid var(--color-text-secondary);
		background-color: var(--color-text-secondary);
	}

	.resume {
		max-width: 720px;
		margin: auto;
	}

	.job,
	.education {
		margin-bottom: 1.5rem;
	}

	.date {
		font-style: italic;
		margin: 0.5rem 0;
	}

	ul {
		margin-top: 0.5rem;
	}

	.skills {
		columns: 2;
		-webkit-columns: 2;
		-moz-columns: 2;
	}

	.phonetic-slash {
		display: inline-block;
		font-weight: 100;
		transform: scale(1.5);
		opacity: 0.5;
	}
</style>
