<script lang="ts">
	import { sineInOut } from 'svelte/easing';
	import { spring, tweened } from 'svelte/motion';

	// Custom easing function that is slow in the middle
	function slowMiddleEasing(t: number): number {
		// First half of the transition (speeding up)
		if (t < 0.5) {
			return Math.pow(t * 2, 2) / 2;
		}
		// Second half of the transition (slowing down)
		else {
			return 1 - Math.pow((1 - t) * 2, 2) / 2;
		}
	}

	// Define the rectangle stages with position and rotation
	const stages = [
		{ id: 1, x: 0, y: 0, rotation: 0 },
		{ id: 2, x: 1.5, y: 0, rotation: 30 },
		{ id: 3, x: -1.5, y: 0, rotation: -22.5 },
		{ id: 4, x: -0.5, y: 1.5, rotation: 45 },
		{ id: 5, x: -2, y: 1.5, rotation: 75 }
	];

	let currentStageIndex = 0;

	// Tweened values for smooth transitions
	let cameraX = spring(0, { stiffness: 3, damping: 1 });
	let cameraY = spring(0, { stiffness: 3, damping: 1 });
	let cameraRotation = spring(0, { stiffness: 3, damping: 1 });
	// let zoom = spring(1, { stiffness: 0.5, damping: 0.5 });
	let zoomDuration = 500;
	let zoom = tweened(1, { duration: zoomDuration, easing: sineInOut });
	let nextZoomValue = 1;
	const cMultiplier = 100;
	const cameraTimers: Array<number> = [];
	let prevZoom = 1;
	let dZoom = 0;
	$: dZoom = $zoom - prevZoom;
	$: prevZoom = $zoom;

	function nextStage() {
		while (cameraTimers.length > 0) {
			clearTimeout(cameraTimers.pop());
		}

		currentStageIndex = (currentStageIndex + 1) % stages.length;

		if (dZoom >= 0) {
			zoom.set(0.01);
		}

		const t1 = setTimeout(() => {
			// Update camera to focus on the next stage
			const nextStage = stages[currentStageIndex];
			cameraX.set(-nextStage.x * cMultiplier); // Inverse the direction for camera panning
			cameraY.set(-nextStage.y * cMultiplier); // Inverse the direction for camera panning
			cameraRotation.set(-nextStage.rotation); // Inverse for correct rotation direction
			nextZoomValue = -nextZoomValue;
			cameraTimers.unshift();
		}, zoomDuration * 0.75);

		const t2 = setTimeout(() => {
			zoom.set(1);
			cameraTimers.unshift();
		}, zoomDuration * 1.25);

		cameraTimers.push(t1);
		cameraTimers.push(t2);
	}

	$: console.log($zoom);

	let viewportWidth: number;
	let viewportHeight: number;
	let stageWidth: number;
	let stageHeight: number;

	$: stageWidth = viewportWidth;
	$: stageHeight = viewportHeight;
</script>

<svelte:window bind:innerWidth={viewportWidth} bind:innerHeight={viewportHeight} />

<div
	class="container"
	style:--viewport-width="{viewportWidth}px"
	style:--viewport-height="{viewportHeight}px"
	style:--stage-width="{stageWidth}px"
	style:--stage-height="{stageHeight}px"
>
	<button on:click={nextStage}>Next Stage</button>
	<div class="viewport" style="transform: scale({Math.pow(Math.abs($zoom), 0.25)});">
		<div
			class="viewport-center"
			style="transform:
				rotate({$cameraRotation}deg)
				translate({($cameraX * stageWidth) / cMultiplier}px,
				{($cameraY * stageHeight) / cMultiplier}px);
			"
		>
			<!-- Viewport that will rotate and pan the camera -->
			<!-- <div
				class="viewport"
				style="transform: translate(-50%, -50%) translate({$cameraX}px, {$cameraY}px) rotate({$cameraRotation}deg);"
			> -->
			<!-- Render all stages (rectangles) -->
			{#each stages as stage}
				<div
					class="rectangle"
					style="transform:
						translate({-stageWidth / 2 + viewportWidth * stage.x}px,
						{-stageHeight / 2 + viewportHeight * stage.y}px)
						rotate({stage.rotation}deg);"
				>
					Stage {stage.id}
				</div>
			{/each}
		</div>

		<!-- </div> -->
	</div>
</div>

<!-- <PageContainer>
	<iframe
		id="vimeo-video"
		src="https://player.vimeo.com/video/331776528?controls=0"
		width="320"
		height="569"
		frameborder="0"
		allow="autoplay; fullscreen"
		allowfullscreen
	></iframe>

	<iframe title="vimeo-player" src="" width="640" height="360" frameborder="0" allowfullscreen
	></iframe>
</PageContainer> -->

<style lang="scss">
	.container {
		position: relative;
		width: 100vw;
		height: 100vh;
		background-color: #333;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.viewport {
		transform-origin: center;
		position: relative;
		width: var(--viewport-width);
		height: var(--viewport-height);
		border: 1px solid red;
	}

	.viewport-center {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 1px;
		height: 1px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) rotate(0deg);
		transition: transform 0.6s ease;
	}

	.rectangle {
		position: absolute;
		width: var(--stage-width);
		height: var(--stage-height);
		background-color: #ffdd57b1;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 1rem;
		color: black;
		border-radius: 8px;
		transform-origin: center;
	}

	button {
		position: absolute;
		top: 20px;
		left: 50%;
		transform: translateX(-50%);
		padding: 10px 20px;
		font-size: 16px;
		cursor: pointer;
	}
</style>
