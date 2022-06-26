<script>
	import Switch from '../forms/Switch.svelte';
	export let title = '';
	export let Icon = '';
	export let value = false;
</script>

<div
	class={`rounded-xl p-4 rounded-tr-3xl rounded-bl-3xl duration-300 transition bg-gradient-to-tl flex flex-col aspect-square gap-4 ${
		value ? 'from-slate-900/70 to-slate-900/10' : 'from-slate-600/20 to-slate-900/40'
	}`}
>
	<div class="space-y-3">
		<svelte:component this={Icon} class={`w-10 h-10 transition text-slate-300`} />
		<div class="text-xs text-slate-500 font-ligth">{title}</div>
	</div>

	<div class="flex gap-2 justify-between mt-auto">
		<div class={`font-medium transition`}>
			{value ? 'On' : 'Off'}
		</div>

		<div>
			<Switch {value} on:click={() => (value = !value)} />
		</div>
	</div>
</div>
