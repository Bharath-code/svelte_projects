export default class NewStore {
	value = $state(0);

	up() {
		this.value++;
	}

	down() {
		this.value--;
	}

	reset() {
		this.value = 0;
	}
}
