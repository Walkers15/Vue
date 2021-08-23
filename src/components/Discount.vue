<template>
	<div class="discount" @click="() => {showAlert('엄준식123')}">
		<h4>지금 결제하면 {{ discountRate }}% 할인</h4>
	</div>
</template>

<script>
export default {
    name: 'Discount',
	data() {
		return {
			discountRate: 30
		}
	},
    methods: {
        showAlert: (str) => {
            alert(str);
        }
    },
	mounted() {
		setInterval(() => {
			if (this.discountRate > 0) {
				this.discountRate -= 1;
			}
		}, 500)
	}
}
</script>

<style>
.discount {
	background: #eee;
	padding: 10px;
	margin: 10px;
	border-radius: 5px;
}
</style>