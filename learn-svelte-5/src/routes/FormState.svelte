<script>
	import { fly } from 'svelte/transition';

	// @ts-nocheck

	let formState = $state({
		answers: {},
		step: 0,
		error: ''
	});

	$inspect(formState.step);
	const QUESTIONS = [
		{
			question: 'what is your name?',
			id: 'name',
			type: 'text'
		},
		{
			question: 'what is your birthday?',
			id: 'bday',
			type: 'date'
		}
	];

	function nextStep(id) {
		if (formState.answers[id]) {
			formState.step += 1;
			formState.error = '';
		} else {
			formState.error = `Please fill out the ${id}`;
		}
	}
</script>

<h2>Multi step form</h2>
{JSON.stringify(formState)}
{#if formState.step >= QUESTIONS.length}
	<p>Thank you...</p>
{:else}
	<p>steps: {formState.step + 1}</p>
{/if}

<main>
	{#each QUESTIONS as question, index (question.id)}
		{#if formState.step === index}
			<div
				in:fly={{ x: 200, duration: 200, delay: 200, opacity: 0 }}
				out:fly={{ x: -200, duration: 200, opacity: 0 }}
			>
				{@render formStep(question)}
			</div>
		{/if}
	{/each}
	{#if formState.error}
		<p class="error">{formState.error}</p>
	{/if}
</main>

{#snippet formStep({ id, question, type })}
	<article>
		<div>
			<label for={id}>{question}</label>
			<input {type} {id} bind:value={formState.answers[id]} />
		</div>
		<button onclick={() => nextStep(id)}>Next</button>
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
