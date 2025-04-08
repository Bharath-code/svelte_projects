<script>
	let { name } = $props();
</script>

<h1>Hello from {name}!!</h1>
<h2>{name.replaceAll('a', 'A')}</h2>
