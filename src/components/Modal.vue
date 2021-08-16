<template>
	<div class="black-bg" v-if="isModalOpened === true" @click="isModalOpened = false">
		<div class="white-bg">
			<h4>{{ products[clickedId].title }}</h4>
			<img :src="products[clickedId].image">
			<p>{{ products[clickedId].content }}</p>
			<p>{{ products[clickedId].price }} 원인데...</p>
			<p @click="products[clickedId].price -= 1000;">
				할인 ㄱ?
			</p>
			<Discount />
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style>

</style>