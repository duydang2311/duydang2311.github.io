<script lang="ts">
	import { onMount } from 'svelte';
	import { timeline } from 'motion';

	let div: HTMLDivElement;
	let h1: HTMLElement;
	onMount(() => {
		timeline([
			[h1, { opacity: 1 }, { duration: 0.25, easing: 'ease-in-out' }],
			[h1, { opacity: 0 }, { delay: 0.5, duration: 0.5, easing: 'ease-in-out' }],
			[div, { opacity: 0 }, { at: 1.25, duration: 0.5, easing: 'ease-in-out' }],
			[div, { display: 'none' }]
		]);
	});
</script>

<div bind:this={div} class="fixed flex justify-center items-center inset-0 bg-white">
	<h1 bind:this={h1} class="opacity-0 font-black text-7xl">duydang</h1>
</div>
