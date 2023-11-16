<script lang="ts">
    export let data: any;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
	<hgroup class="prose">
		<h1>{data.meta.title}</h1>
		<p>Published at {data.meta.date}</p>
	</hgroup>
    <div>
        {#each data.meta.categories as category}
            <span>&num;{category}</span>
        {/each}
    </div>
	<div class="prose">
		<svelte:component this={data.content} />
	</div>
</article>

