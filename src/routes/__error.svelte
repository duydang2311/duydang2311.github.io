<script context="module" lang="ts">
	export const load = ({ error, status }) => {
		return {
			props: {
				title: `${status}: ${error.message}`
			}
		};
	};
</script>

<script lang="ts">
	import { base } from '$app/paths';
	export let title;
</script>

<h1>Oops, things seem wrong!</h1>
<h5>{title}</h5>
<h5>Just go <a href="{base}/">/home</a> then!</h5>
