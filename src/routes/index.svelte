<script>
	// @ts-nocheck
	import { scale } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import moment from 'moment';
	import Cloudy from '../lib/components/icons/Cloudy.svelte';
	import Container from '../lib/components/container.svelte';
	import Bulb from '$lib/components/icons/Bulb.svelte';
	import Laptop from '$lib/components/icons/Laptop.svelte';
	import OnOffCard from '$lib/components/resources/OnOffCard.svelte';
	import Fan from '$lib/components/icons/Fan.svelte';
	import Microwave from '$lib/components/icons/Microwave.svelte';

	let rooms = ['Utama', 'Dapur', 'Kamar Ling Ling', 'Kamar Mama', 'Kamar Mandi'];
	let selectedRoom = 'Utama';

	let data = [
		{
			title: 'Lampu Ling Ling',
			value: true,
			Icon: Bulb,
			room: 'Kamar Ling Ling'
		},
		{
			title: 'Lampu RGB',
			value: false,
			Icon: Bulb,
			room: 'Kamar Ling Ling'
		},
		{
			title: 'Lampu Dapur',
			value: false,
			Icon: Bulb,
			room: 'Dapur'
		},
		{
			title: 'Rice Cooker',
			value: false,
			Icon: Microwave,
			room: 'Dapur'
		},
		{
			title: 'Laptop',
			value: true,
			Icon: Laptop,
			room: 'Kamar Ling Ling'
		},
		{
			title: 'Lampu Kamar Mandi',
			value: false,
			Icon: Bulb,
			room: 'Kamar Mandi'
		},
		{
			title: 'Lampu Mama',
			value: false,
			Icon: Bulb,
			room: 'Kamar Mama'
		},
		{
			title: 'Lampu Utama',
			value: false,
			Icon: Bulb,
			room: 'Utama'
		},
		{
			title: 'Kipas Meja',
			value: false,
			Icon: Fan,
			room: 'Kamar Ling Ling'
		},
		{
			title: 'AC Kamar',
			value: false,
			Icon: Fan,
			room: 'Kamar Mama'
		},
		{
			title: 'Kipas Besar',
			value: false,
			Icon: Fan,
			room: 'Utama'
		},
		{
			title: 'Kipas Kecil',
			value: false,
			Icon: Fan,
			room: 'Utama'
		},
		{
			title: 'AC Utama',
			value: false,
			Icon: Fan,
			room: 'Utama'
		}
	];

	let selectedData = [];

	$: {
		selectedData = data.filter((d) => d.room === selectedRoom);
	}
</script>

<Container class="mt-2 text-slate-500">
	<div class="">Today {moment().format('dddd, D MMMM YYYY')}</div>
</Container>

<main class="my-3 mb-8">
	<Container>
		<div class="bg-gradient-to-t from-slate-600/40 to-slate-500/40 px-5 py-4 rounded-2xl">
			<div class="flex gap-5 my-3 items-center">
				<div class="flex gap-4 items-center">
					<div>
						<Cloudy class="w-14 h-14" />
					</div>
					<div class="space-y-0.5">
						<div class="text-lg font-medium">Cloudy</div>
						<div class="text-xs text-slate-400 w-full">Cengkareng, DKI Jakarta</div>
					</div>
				</div>

				<div class="text-4xl text-white ml-auto font-bold">28&#xb0;</div>
			</div>

			<div class="mt-6 grid gap-3 grid-cols-3 text-center">
				<div class="space-y-1">
					<div class="font-medium text-base">31&#xb0;</div>
					<div class="text-xs text-slate-400">Sensible</div>
				</div>

				<div class="space-y-1">
					<div class="font-medium text-base">65%</div>
					<div class="text-xs text-slate-400">Hummidity</div>
				</div>

				<div class="space-y-1">
					<div class="font-medium text-base">3</div>
					<div class="text-xs text-slate-400">Windforce</div>
				</div>
			</div>
		</div>

		<div class="mt-8">
			<div class="overflow-x-auto py-2 pb-5 mb-1 px-5 -mx-5">
				<div class="w-max">
					<div class="flex gap-5">
						{#each rooms as room (room)}
							<button
								class={`py-1 font-medium  relative flex items-center justify-center flex-col ${
									selectedRoom === room ? 'text-brand' : 'text-slate-600'
								}`}
								on:click={() => (selectedRoom = room)}
							>
								{room}

								{#if selectedRoom === room}
									<div class="absolute w-1.5 h-1.5 rounded-full top-6 bg-brand" />
								{/if}
							</button>
						{/each}
					</div>
				</div>
			</div>

			<div class="grid gap-3 grid-cols-2 sm:grid-cols-3">
				{#each selectedData as card (card.title)}
					<div in:scale out:scale animate:flip={{ duration: 500 }}>
						<OnOffCard value={card.value} title={card.title} Icon={card.Icon} />
					</div>
				{/each}
			</div>
		</div>
	</Container>
</main>
