<template>
	<div>
		<div class="menu">
			<a v-for="(menuName, i) in menuNames" :key="(menuName, i)">{{ i }}_{{ menuName }}</a>
		</div>
		<Discount v-if="showDiscount === true" />
		<button @click="sortProducts()">
			가격순정렬
		</button>
		<button @click="sortBack()">
			되돌리기
		</button>
		<transition name="fadeModal">
			<Modal :rooms="products" :isModalOpened="isModalOpened" :clickedId="clickedId" @closeModal="isModalOpened = false" @discount="products[clickedId].price -= 1000" />
		</transition>
		<Card v-for="product in products" :key="(product)" :room="product" @openModal="openModal($event)" />
	</div>
</template>

<script>
import products from './assets/products'
import Discount from './components/Discount.vue'
import Modal from './components/Modal.vue'
import Card from './components/Card.vue'



export default {
	name: "App",
	data() {
		return {
			showDiscount: true,
			clickedId: 0,
			isModalOpened: false, // ui의 상태 저장: State
			prices: [60, 70, 80],
			products,
			originProducts: [...products],
			menuNames: ["Home", "Objects", "About"],
			reportCounts: {'역삼': 0, '천호': 0, '마포': 0},
			
		};
	},
	methods: {
		increase(obj, key){
			obj[key]++;
		},
		openModal(id) {
			this.isModalOpened = true;
			this.clickedId = id;
		},
		sortProducts() {
			this.products.sort((a, b) => b.price - a.price);
		},
		sortBack() {
			this.products = [...this.originProducts];
		}
	},
	components: {
		Discount,
		Modal,
		Card
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

.start {
	opacity: 0;
	transition: all 1s;
}

.end {
	opacity: 1;
}

.fadeModal-enter-from {
	transform: translateY(-1000px);
}
.fadeModal-enter-active {
	transition: all 1s;
}
.fadeModal-enter-to {
	transform: translateY(0px);
}

.fadeModal-leave-from {
	opacity: 1;
}
.fadeModal-leave-active {
	transition: all 1s;
}
.fadeModal-leave-to {
	opacity: 0;
}
</style>
