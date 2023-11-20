<script lang="ts">
	import '../app.css';
	import SplashScreen from './SplashScreen.svelte';
</script>

<SplashScreen />
<main class="p-8 mx-auto w-fit">
	<slot />
</main>
