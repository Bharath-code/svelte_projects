<script lang="ts">
	class Temperature {
		#c = $state();
		#f = $state();

		get c() {
			return this.#c;
		}

		set c(c) {
			this.#c = c;
			this.#f = Number(c) * (9 / 5) + 32;
		}

		get f() {
			return this.#f;
		}

		set f(f) {
			this.#f = f;
			this.#c = (Number(f) - 32) * (5 / 9);
		}
	}

	const temperature = new Temperature();
</script>

<div>
	<input type="number" bind:value={temperature.c} /> Celsius =
	<input type="number" bind:value={temperature.f} /> Fahrenheit
</div>

<style>
	input[type='number'] {
		max-width: 10ch;
	}
</style>
