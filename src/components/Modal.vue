<template>
	<div class="black-bg" v-if="isModalOpened === true" @click="isModalOpened = false">
		<div class="white-bg">
			<h4>{{ rooms[clickedId].title }}</h4>
			<img :src="rooms[clickedId].image">
			<p>{{ rooms[clickedId].content }}</p>
			<p>{{ rooms[clickedId].price }} 원인데...</p>
			<p @click="rooms[clickedId].price -= 1000;">
				할인 ㄱ?
			</p>
			<!-- <Discount /> -->
		</div>
	</div>
</template>

<script>
export default {
    name: 'Modal',
    props: {
		rooms: {
			type: Array,
			required: true,
			default: null
		},
        isModalOpened: Boolean,
        clickedId: {
			type: Number,
			required: true,
			default: 0
		}
    }
}
</script>

<style>

</style>