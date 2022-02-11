Vue.createApp({
	data() {
		return {
			num: '',
			show: false,
		};
	},
	methods: {
		getRandoms() {
			let number = Math.floor(Math.random() * 9999);
			this.num = number;
			this.show = true;
		},
		close() {
			this.num = '';
			this.show = false;
		},
	},
}).mount('#app');
