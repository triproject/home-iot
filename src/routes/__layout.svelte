<script>
	import '$lib/styles/global.css';
	import Container from '../lib/components/container.svelte';
</script>

<header class="mt-5">
	<Container>
		<nav class="flex justify-between py-2">
			<div class="text-xl">Hi, <span class="font-semibold text-brand">Ling Ling</span></div>
			<div />
		</nav>
	</Container>
</header>

<slot />
