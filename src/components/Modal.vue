<template>
	<div class="black-bg" v-if="isModalOpened === true">
		<div class="white-bg">
			<h4>{{ rooms[clickedId].title }}</h4>
			<img :src="rooms[clickedId].image">
			<p>{{ rooms[clickedId].content }}</p>
			<p>{{ rooms[clickedId].price }} 원인데...</p>
			<button @click="$emit('discount')">
				할인 ㄱ?
			</button>
			<p />
			<button @click="$emit('closeModal')">
				닫기
			</button>
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
    },
	emits: ['closeModal','discount']
}
</script>

<style>

</style>