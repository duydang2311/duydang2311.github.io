<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '$lib/styles/global.css';
	import { page } from '$app/stores';
</script>

{#if $page.status !== 200}
	<main style="margin-top: 6em;">
		<slot />
	</main>
{:else}
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
{/if}
