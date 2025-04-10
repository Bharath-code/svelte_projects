<script>
	let count = $state(0);
</script>

<div class="flex-gap">
	<input type="number" disabled value={count} />
	<button onclick={() => count++}>Count</button>
</div>

<style>
</style>
