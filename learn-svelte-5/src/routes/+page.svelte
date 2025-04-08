<script>
	import Header from './Header.svelte';

	let name = $state('Bharath');
	let status = $state('OPEN');

	function toggle() {
		status = status === 'OPEN' ? 'CLOSED' : 'OPEN';
	}
</script>

<Header {name} />

<input type="text" bind:value={name} />

<p>The store is now {status}</p>
<button onclick={toggle}>Toggle status</button>
