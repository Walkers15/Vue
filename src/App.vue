<template>
	<div>
		<Modal />
		<Discount />

		<div class="menu">
			<a v-for="(menuName, i) in menuNames" :key="(menuName, i)">{{ i }}_{{ menuName }}</a>
		</div>

		<div v-for="(room, i) in products" :key="(room, i)" @click="isModalOpened = true; clickedId = i">
			<img :src="room.image">
			<h4 :style="style">
				{{ room.title }}
			</h4>
			<p>{{ room.price }}</p>
		</div>
	</div>
</template>

<script>
import products from './assets/products'
import Discount from './components/Discount.vue'
import Modal from './components/Modal.vue'
export default {
	name: "App",
	data() {
		return {
			clickedId: 0,
			isModalOpened: false, // ui의 상태 저장: State
			prices: [60, 70, 80],
			productss: ["역삼동원룸", "천호동원룸", "마포구원룸"],
			products,
			menuNames: ["Home", "Objects", "About"],
			style: "color:red",
			reportCounts: {'역삼': 0, '천호': 0, '마포': 0},
			
		};
	},
	methods: {
		increase(obj, key){
			obj[key]++;
		}
	},
	components: {
		Discount,
		Modal
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
body {
  margin : 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%; height:100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
}
.white-bg {
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
} 
</style>
