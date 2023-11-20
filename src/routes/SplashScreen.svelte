<script lang="ts">
	import { onMount } from 'svelte';
	import { stagger, timeline } from 'motion';
	import { eachHourOfInterval } from 'date-fns';

	let div: HTMLDivElement;
	let h1: HTMLElement;
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
			[div, { opacity: 0 }, { at: 1.25, duration: 0.5, easing: 'ease-in-out' }],
			[div, { display: 'none' }]
		]);
	});
</script>

<div bind:this={div} class="fixed flex justify-center items-center inset-0 bg-white">
	<h1 bind:this={h1} class="font-black text-7xl">
		{#each 'duydang' as letter}
			<span class="letter opacity-0 translate-y-2 inline-block">{letter}</span>
		{/each}
	</h1>
</div>
