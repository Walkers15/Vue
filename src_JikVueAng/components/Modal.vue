<template>
	<div class="black-bg" v-if="isModalOpened === true">
		<div class="white-bg">
			<h4>{{ rooms[clickedId].title }}</h4>
			<img :src="rooms[clickedId].image">
			<p>{{ rooms[clickedId].content }}</p>
			<input v-model.number="userInput">
			<input type="range" min="1" max="12">
			<p>{{ rooms[clickedId].price }} 원인데...</p>
			<p> {{ userInput }} 개월 선택함 </p>
			<p> 그래서 {{ userInput * rooms[clickedId].price }} 원임</p>
			<textarea v-model="userText" />
			<p>{{ userText }}</p>
			<p />
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
	data() {
		return {
			userInput: 3,
			userText: ''
		}
	},
	watch: {
		userInput(a, b) {
			if (isNaN(this.userInput) === true) {
				alert('디질래?')
				this.userInput = b;
			}
		}
	},
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
	emits: ['closeModal','discount'],
	beforeUpdate() {
		if (this.userInput <= 2) {
			alert('우리는 두달 이하는 안받아요~')
			this.userInput = 3;
		}
	}
}
</script>

<style>

</style>