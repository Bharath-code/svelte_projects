<script lang="ts">
	type Options = 'one-way' | 'return';

	let bookWay = $state<Options>('one-way');
	let startDate = $state(getDate());
	let returnDate = $state(getDate());

	function getDate() {
		const currentDate = new Date();
		const [month, day, year] = currentDate
			.toLocaleDateString('en-US', {
				year: 'numeric',
				month: '2-digit',
				day: '2-digit'
			})
			.split('/');
		return `${year}-${month}-${day}`;
	}
	$inspect({ bookWay, startDate, returnDate });
	function handleSubmit(e: Event) {
		e.preventDefault();
		alert(`You have booked a ${bookWay} flight on ${startDate}`);
	}
</script>

<form class="grid-gap" onsubmit={handleSubmit}>
	<select name="flightBook" id="flightBook" bind:value={bookWay}>
		<option value="one-way">One-way</option>
		<option value="return">Two-way</option>
	</select>
	<label for="fromDate">
		<span class="sr-only">Select the Start Date</span>
		<input type="date" bind:value={startDate} min={getDate()} name="fromDate" required />
	</label>
	<label for="toDate">
		<span class="sr-only">Select the Return Date</span>
		<input
			type="date"
			bind:value={returnDate}
			name="toDate"
			min={getDate()}
			disabled={bookWay === 'one-way'}
			required
		/>
	</label>

	<button type="submit" disabled={!startDate || (bookWay === 'return' && returnDate < startDate)}
		>Book</button
	>
</form>

<style>
</style>
