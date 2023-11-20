<script lang="ts">
	import { onMount } from 'svelte';
	import { stagger, timeline } from 'motion';

	let div: HTMLDivElement;
	onMount(() => {
		timeline([
			[
				'.letter',
				{ opacity: 1, transform: 'none' },
				{ delay: stagger(0.05), duration: 0.1, easing: 'ease-in-out' }
			],
			[
				'.letter',
				{ opacity: 0, transform: 'translateY(0.5rem)' },
				{ at: 1, delay: stagger(0.04), duration: 0.2, easing: 'ease-in' }
			],
			[
				div,
				{ opacity: 0, pointerEvents: 'none' },
				{ at: 1.25, duration: 0.5, easing: 'ease-in-out' }
			],
			[div, { display: 'none' }]
		]);
	});
</script>

<div bind:this={div} class="fixed flex justify-center items-center inset-0 bg-white">
	<h1 class="font-black text-7xl">
		{#each 'duydang' as letter}
			<span class="letter opacity-0 translate-y-2 inline-block">{letter}</span>
		{/each}
	</h1>
</div>
