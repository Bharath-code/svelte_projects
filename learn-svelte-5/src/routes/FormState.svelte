<script>
	let formState = $state({
		name: '',
		bday: '',
		step: 0,
		error: ''
	});
</script>

<h2>Multi step form</h2>

<p>steps: {formState.step + 1}</p>
<main>
	{#if formState.step === 0}
		<div>
			<label for="name">Name</label>
			<input type="text" id="name" bind:value={formState.name} />
			<button
				onclick={() => {
					if (formState.name !== '') {
						formState.step += 1;
						formState.error = '';
					} else {
						formState.error = 'Your name is empty. Please fillout the name';
					}
				}}>Next</button
			>
		</div>
	{:else if formState.step === 1}
		<div>
			<label for="bday">Birthday</label>
			<input type="date" id="bday" bind:value={formState.bday} />
			<button
				onclick={() => {
					formState.step -= 1;
				}}>Prev</button
			>
			<button
				onclick={() => {
					if (formState.bday !== '') {
						formState.step += 1;
						formState.error = '';
					} else {
						formState.error = 'Your birthday is empty. Please fillout the name';
					}
				}}>Next</button
			>
		</div>
	{:else}
		<p>Thank you!!!</p>
	{/if}
	{#if formState.error}
		<p class="error">{formState.error}</p>
	{/if}
</main>

<style>
	.error {
		color: crimson;
	}
	h2 {
		color: chocolate;
	}
</style>
