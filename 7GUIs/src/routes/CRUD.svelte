<script lang="ts">
	type Person = {
		name: string;
		surname: string;
	};

	let people = $state([
		{ name: 'Rich', surname: 'Harris' },
		{ name: 'Ryan', surname: 'Carniato' },
		{ name: 'Evan', surname: 'You' }
	]);
	let selected = $state<Person>();
	let person = $state({ name: '', surname: '' });
</script>

<div class="container surface-2">
	<div class="search">
		<label class="group">
			<span>Filter perfix:</span>
			<input type="text" />
		</label>
	</div>

	<label class="group">
		<span class="sr-only">Names:</span>
		<select bind:value={selected} size="5">
			{#each people as person}
				<option value={person}>{person.surname},{person.name}</option>
			{/each}
		</select>
	</label>
</div>
