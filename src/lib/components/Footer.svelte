<script lang="ts">
	import { base } from '$app/paths';
</script>

<footer>
	<hr />
	<nav>
		<ul>
			<li>
				<a href="{base}/about">about</a>
			</li>
			<li>
				<a href="{base}/contact">contact</a>
			</li>
		</ul>
	</nav>
</footer>

<style lang="css">
	hr {
		margin-bottom: 0.4vh;
	}
	ul {
		list-style-type: none;
		display: flex;
		flex-wrap: wrap;
		justify-content: right;
		align-content: flex-end;
	}

	ul li {
		display: inline;
		margin-left: 2em;
	}
</style>
