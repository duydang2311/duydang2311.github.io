<script lang="ts">
	import { formatRelative } from 'date-fns';

	export let data: any;
	const date = new Date(data.meta.date);
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="w-auto">
	<hgroup class="prose">
		<p class="text-sm">
			<a href="/">Back</a>
		</p>
		<h1 class="mb-0">{data.meta.title}</h1>
		<p class="text-sm flex gap-2 mb-2">
			{Intl.DateTimeFormat('en', { dateStyle: 'medium' }).format(date)}
			<span>·</span>
			<span>{formatRelative(new Date(data.meta.date), new Date())}</span>
		</p>
		<div class="flex gap-2 text-sm">
			{#each data.meta.categories as category}
				<span class="px-1 bg-blue-50 text-blue-700 rounded">{category}</span>
			{/each}
		</div>
	</hgroup>
	<div class="prose mt-8">
		<svelte:component this={data.content} />
	</div>
</article>
