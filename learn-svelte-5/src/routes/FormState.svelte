<script>
	// @ts-nocheck

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
	{@render formStep({ question: 'what is your name', id: 'name', type: 'text' })}
	{#if formState.error}
		<p class="error">{formState.error}</p>
	{/if}
</main>

{#snippet formStep({ id, question, type })}
	<article>
		<div>
			<label for={id}>{question}</label>
			<input {type} {id} bind:value={formState[id]} />
		</div>
	</article>
{/snippet}

<style>
	.error {
		color: crimson;
	}
	h2 {
		color: chocolate;
	}
</style>
