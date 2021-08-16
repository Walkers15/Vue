<template>
	<div>
		<img :src="room.image">
		<h4 :style="style">
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
    }
}
</script>

<style>

</style>