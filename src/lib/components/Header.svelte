<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	const mappingNavigation = ['/', '/blog'];
</script>

<header>
	<div>
		<a href={$page.url.pathname}>{$page.url.pathname.substring(1) || 'home'}</a>
		<nav>
			<ul>
				{#each mappingNavigation as i}
					{#if i !== $page.url.pathname}
						<li>
							<a href={`${base}${i}`}>{i.substring(1) || 'home'}</a>
						</li>
					{/if}
				{/each}
			</ul>
		</nav>
	</div>
	<hr />
</header>

<style lang="css">
	header div {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	hr {
		margin-top: 0.4vh;
	}
	ul {
		list-style-type: none;
		text-align: center;
	}

	ul li {
		display: inline;
		margin-left: 2em;
	}
</style>
