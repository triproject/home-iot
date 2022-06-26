<script>
	export let value = true;
</script>

<div class={`w-9 rounded-full p-0.5 ${value ? 'bg-green-500/90' : 'bg-slate-700'}`} on:click>
	<div
		class={`rounded-full h-4 w-4 transition ${
			value ? 'bg-green-900 translate-x-4' : 'bg-slate-400'
		}`}
	/>
</div>
