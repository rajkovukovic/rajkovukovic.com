<script lang="ts">
	import { spring } from 'svelte/motion';

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

	const radius = 3;
	const startAngle = Math.PI / 2;
	const angleStep = (2 * Math.PI) / 12;

	function generateStage(stageId: number, angle: number) {
		let rotation = (angle * 180) / Math.PI;
		if (rotation > 90) {
			rotation = rotation - 180;
		} else if (rotation < -90) {
			rotation = rotation + 180;
		}
		return {
			id: stageId,
			x: Math.cos(angle) * radius,
			y: Math.sin(angle) * radius,
			rotation: (angle * 180) / Math.PI
		};
	}

	let stageIndex = 0;
	let maxStages = 12;
	let zoomDuration = 500;
	const cMultiplier = 100;

	// Define the rectangle stages with position and rotation
	const stages = Array(maxStages)
		.fill(0)
		.map((_, index) => generateStage(index, startAngle + angleStep * index));
	// [
	// generateStage(0, startAngle)
	// { id: 0, x: 0, y: 0, rotation: 0 }
	// { id: 2, x: 1.5, y: 0, rotation: 30 },
	// { id: 3, x: -1.5, y: 0, rotation: -22.5 },
	// { id: 4, x: -0.5, y: 1.5, rotation: 45 },
	// { id: 5, x: -2, y: 1.5, rotation: 75 }
	// ];

	// Tweened values for smooth transitions
	let cameraX = spring(-stages[0].x * cMultiplier, { stiffness: 3, damping: 1 });
	let cameraY = spring(-stages[0].y * cMultiplier, { stiffness: 3, damping: 1 });
	let cameraRotation = spring(-stages[0].rotation, { stiffness: 3, damping: 1 });
	let zoom = spring(1, { stiffness: 0.01, damping: 0.2 });
	// let zoom = tweened(1, { duration: zoomDuration, easing: sineInOut });
	let nextZoomValue = 1;
	const cameraTimers: Array<number> = [];
	let prevZoom = 1;
	let dZoom = 0;
	$: dZoom = $zoom - prevZoom;
	$: prevZoom = $zoom;

	function goToStage(nextStageId: number) {
		if (nextStageId === stages[stageIndex].id) {
			return;
		}

		while (cameraTimers.length > 0) {
			clearTimeout(cameraTimers.pop());
		}

		// create the stage if not exists
		let nextStageIndex = stages.findIndex((stage) => stage.id === nextStageId);
		if (nextStageIndex < 0) {
			const angle = startAngle + angleStep * stages.length;
			stages.push(generateStage(nextStageId, angle));
			stageIndex = stages.length - 1;
		} else {
			stageIndex = nextStageIndex;
		}

		console.log({ stageIndex, stages });

		if (dZoom >= 0) {
			zoom.set(0.01);
		}

		const t1 = setTimeout(() => {
			// Update camera to focus on the next stage
			const nextStage = stages[stageIndex];
			cameraX.set(-nextStage.x * cMultiplier); // Inverse the direction for camera panning
			cameraY.set(-nextStage.y * cMultiplier); // Inverse the direction for camera panning
			cameraRotation.set(-nextStage.rotation); // Inverse for correct rotation direction
			nextZoomValue = -nextZoomValue;
			cameraTimers.unshift();
		}, zoomDuration * 0.75);

		const t2 = setTimeout(() => {
			zoom.set(1);
			cameraTimers.unshift();
		}, zoomDuration * 1.5);

		cameraTimers.push(t1);
		cameraTimers.push(t2);
	}

	// $: console.log($zoom);

	let viewportWidth: number;
	let viewportHeight: number;
	let stageWidth: number;
	let stageHeight: number;
	let viewportMin: number;
	let viewportMax: number;
	let stageMin: number;
	let stageMax: number;

	$: stageWidth = viewportWidth;
	$: stageHeight = viewportHeight;
	$: viewportMin = Math.min(viewportWidth, viewportHeight);
	$: viewportMax = Math.max(viewportWidth, viewportHeight);
	$: stageMin = Math.min(stageWidth, stageHeight);
	$: stageMax = Math.max(stageWidth, stageHeight);

	let debugging = true;

	function handleKeydown(e: KeyboardEvent) {
		const stageShortcuts: Record<string, number> = {
			'0': 0,
			'1': 1,
			'2': 2,
			'3': 3,
			'4': 4,
			'5': 5,
			'6': 6,
			'7': 7,
			'8': 8,
			'9': 9,
			a: 10,
			b: 11
		};

		if (e.key === 'Alt') {
			debugging = !debugging;
		} else if (e.key === '<' || e.key === ',') {
			goToStage((stages[stageIndex].id - 1 + maxStages) % maxStages);
		} else if (e.key === '>' || e.key === '.') {
			goToStage((stages[stageIndex].id + 1 + maxStages) % maxStages);
		} else if (stageShortcuts[e.key] != undefined) {
			goToStage(stageShortcuts[e.key]);
		} else {
			console.log(e.key);
		}
	}
</script>

<svelte:window
	bind:innerWidth={viewportWidth}
	bind:innerHeight={viewportHeight}
	on:keydown={handleKeydown}
/>

<div
	class="container"
	style:--viewport-width="{viewportWidth}px"
	style:--viewport-height="{viewportHeight}px"
	style:--stage-width="{stageWidth}px"
	style:--stage-height="{stageHeight}px"
>
	<div class="button-wrapper">
		{#each Array(maxStages).fill(0) as _, index}
			<button on:click={() => goToStage(index)}>{index}</button>
		{/each}
	</div>
	<div class="viewport-wrapper" class:debugging>
		<div class="viewport" style="transform: scale({Math.pow(Math.abs($zoom), 0.25)});">
			<div
				class="viewport-center"
				style="transform:
				rotate({$cameraRotation}deg)
				translate({($cameraX * stageMax) / cMultiplier}px,
				{($cameraY * stageMax) / cMultiplier}px);
			"
			>
				<!-- <div
				style="position: absolute; top: -800vh; left: -800vw; right: -800vw; bottom: -800vh; background: rgba(0, 200, 0, 0.1);"
			></div> -->
				<!-- Viewport that will rotate and pan the camera -->
				<!-- <div
				class="viewport"
				style="transform: translate(-50%, -50%) translate({$cameraX}px, {$cameraY}px) rotate({$cameraRotation}deg);"
			> -->
				<!-- Render all stages (rectangles) -->
				{#each stages as stage}
					<div
						class="rectangle"
						style="transform-origin: center;
					transform:
						translate({stageMax * stage.x}px,
						{stageMax * stage.y}px)
						rotate({stage.rotation}deg);"
					>
						Stage {stage.id}
					</div>
				{/each}
			</div>

			<!-- </div> -->
		</div>
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

	.viewport-wrapper {
		position: fixed;
		width: 100%;
		height: 100%;
		background-color: antiquewhite;
		transition: transform 0.3s ease;
		&.debugging {
			transform: scale(0.1);
		}
	}

	.viewport {
		transform-origin: center;
		position: relative;
		width: var(--viewport-width);
		height: var(--viewport-height);
		background: rgba(255, 0, 0, 0.407);
		// border: 1px solid red;
	}

	.viewport-center {
		transform-origin: center;
		transform-style: preserve-3d;
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		top: 50%;
		left: 50%;
		width: 1px;
		height: 1px;
		position: absolute;
		width: 4px;
		height: 4px;
		border: 2px solid white;
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
	}

	.button-wrapper {
		display: flex;
		justify-content: center;
		position: fixed;
		top: 20px;
		left: 0;
		right: 0;
		z-index: 100;

		padding: 10px 20px;
	}

	button {
		margin: 0 0.5rem;
		font-size: 16px;
		cursor: pointer;
	}
</style>
