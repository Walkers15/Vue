<template>
	<div class="discount" @click="() => {showAlert('엄준식123')}">
		<h4>지금 결제하면 20% 할인</h4>
	</div>
</template>

<script>
export default {
    name: 'Discount',
    methods: {
        showAlert: (str) => {
            alert(str);
        }
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