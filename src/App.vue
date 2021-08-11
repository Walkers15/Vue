<template>
	<div>
		<div class="menu">
			<a v-for="(menuName, i) in menuNames" :key="(menuName, i)">{{ i }}_{{ menuName }}</a>
		</div>

		<div v-for="(roomName, i) in products" :key="(roomName, i)">
			<h4 :style="스타일">
				{{ roomName }}
			</h4>
			<p>{{ prices[i] }} 만원</p>
		</div>
		<div> 
			<h4>{{ products[0] }}</h4>
			<p>50만원</p>
		</div>
		<div>
			<h4>{{ products[1] }}</h4>
			<p>50만원</p>
		</div>
		<div>
			<h4>{{ products[2] }}</h4>
			<p>50만원</p>
		</div>
		<button @click="prices[0] *= 3">
			엄준식
		</button>
	</div>
</template>

<script>

export default {
	name: "App",
	data() {
		return {
			prices: [60, 70, 80],
			products: ["역삼동원룸", "천호동원룸", "마포구원룸"],
			menuNames: ["Home", "Objects", "About"],
			스타일: "color:red"
		};
	},
	components: {
	}
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background : darkslateblue;
  padding : 15px;
  border-radius : 5px;
}
.menu a {
  color : white;
  padding : 10px;
}

</style>
