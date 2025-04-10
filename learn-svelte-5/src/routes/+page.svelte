<script>
	import Header from './Header.svelte';
	import FormState from './FormState.svelte';

	let name = $state('Bharath');
	let status = $state('OPEN');
	let fullName = $derived(name + ' ' + 'Palanisamy');

	function toggle() {
		status = status === 'OPEN' ? 'CLOSED' : 'OPEN';
	}
</script>

<Header {name}>
	<h3>testing children props</h3>
	{#snippet secondChild(name)}
		<p>second children props - testing inline snippet {name}</p>
	{/snippet}
</Header>
<h2>{fullName}</h2>
<input type="text" bind:value={name} />

<p>The store is now {status}</p>
<button onclick={toggle}>Toggle status</button>

<hr />
<FormState />
