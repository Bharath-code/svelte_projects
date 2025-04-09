<script>
	let { name } = $props();
</script>

<div>
	<h1>Hello from {name}!!</h1>
	<h2>{name.replaceAll('a', 'A')}</h2>
</div>

<style>
	h2 {
		color: brown;
	}
	:global(div) {
		padding: 5px;
		background-color: beige;
	}
</style>
