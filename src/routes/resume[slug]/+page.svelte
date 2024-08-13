<script lang="ts">
	import { ownerName } from '$lib/ownerName';
	import { resumes } from '$lib/resumes';
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
		<h1 class="center upper zero-margin">Rajko Vukovic</h1>
		<h3 class="center zero-margin">/ ry-ko &nbsp; voo-koh-vich /</h3>

		<hr />

		<h2 class="upper">Summary</h2>
		<p>
			{resume.summary}
		</p>

		<hr />

		<h2 class="upper">Work Experience</h2>
		{#each resume.workExperience as job}
			<div class="job">
				<h3 style="margin-bottom: 0;">{job.position}</h3>
				<h4 style="margin-top: 0;">
					{job.company} &nbsp;
					<span style="opacity: 0.5;">{formatDate(job.startDate)} - {formatDate(job.endDate)}</span>
				</h4>
				<ul>
					{#each job.responsibilities as responsibility}
						<li>{responsibility}</li>
					{/each}
				</ul>
			</div>
		{/each}

		<hr />

		<h2 class="upper">Skills</h2>
		<ul class="skills">
			{#each resume.skills as skill}
				<li>{skill.name} - {skill.level}</li>
			{/each}
		</ul>

		<hr />

		<h2 class="upper">Education</h2>
		{#each resume.education as edu}
			<div class="education">
				<h3>{edu.degree}</h3>
				<h4>{edu.institution}</h4>
				<p>{edu.field}</p>
				<p class="date">Graduated: {formatDate(edu.graduationDate)}</p>
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
		opacity: 0.4;
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
</style>
