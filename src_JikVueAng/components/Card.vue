<template>
	<div>
		<img :src="room.image">
		<h4 :style="style" @click="openModal">
			{{ room.title }}
		</h4>
		<p>{{ room.price }}</p>
	</div>
</template>

<script>
export default {
    name: "Card",
    data() {
        return {
            style: "color:red"
        }
    },
    props: {
		room: {
			type: Object,
			required: true,
			default: null
		}
    },
    emits: ['openModal'],
    methods: {
        openModal() {
            this.$emit('openModal', this.room.id)
        }
    }
}
</script>

<style>

</style>